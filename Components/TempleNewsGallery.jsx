
"use client";

import { useEffect, useState } from "react";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function getImageUrl(image) {
  if (!image?.url) return null;

  return image.url.startsWith("http")
    ? image.url
    : `${STRAPI_URL}${image.url}`;
}

export default function TempleNewsGallery({
  images = [],
  title = "Temple News",
}) {
  const gallery = images.filter((image) => image?.url);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!gallery.length) return null;

  const changeImage = (index) => {
    setCurrentIndex((index + gallery.length) % gallery.length);
  };

  const showPrevious = () => {
    changeImage(currentIndex - 1);
  };

  const showNext = () => {
    changeImage(currentIndex + 1);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const distance =
      touchStartX - event.changedTouches[0].clientX;

    if (distance > 40) showNext();
    if (distance < -40) showPrevious();

    setTouchStartX(null);
  };

  const activeImage = gallery[currentIndex];
  const activeImageUrl = getImageUrl(activeImage);

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B7920]">
        Explore the Moments
      </p>

      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        Photo Gallery
      </h2>

      <div className="mb-6 mt-3 h-1 w-14 rounded-full bg-[#D4AF37]" />

      {/* Fixed-height carousel */}
      <div
        className="relative w-full overflow-hidden rounded-xl bg-[#111111]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex h-[280px] w-full items-center justify-center sm:h-[420px] lg:h-[500px]">
          {activeImageUrl && (
            <img
              key={activeImage.documentId || activeImage.id || currentIndex}
              src={activeImageUrl}
              alt={`${title} - Gallery image ${currentIndex + 1}`}
              className="h-full w-full object-contain"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.98)",
                transition:
                  "opacity 350ms ease-in-out, transform 350ms ease-in-out",
              }}
            />
          )}
        </div>

        {gallery.length > 1 && (
          <>
            {/* Previous: fixed to left */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous gallery image"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-3xl leading-none text-white shadow-lg transition-colors hover:bg-[#D4AF37] hover:text-black"
            >
              &#8249;
            </button>

            {/* Next: fixed to right */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next gallery image"
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-3xl leading-none text-white shadow-lg transition-colors hover:bg-[#D4AF37] hover:text-black"
            >
              &#8250;
            </button>

            {/* Image counter */}
            <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/75 px-4 py-2 text-sm text-white">
              {currentIndex + 1} / {gallery.length}
            </span>
          </>
        )}
      </div>

      {/* Clickable thumbnails */}
      {gallery.length > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {gallery.map((image, index) => {
            const thumbnailUrl = getImageUrl(image);

            return (
              <button
                key={image.documentId || image.id || index}
                type="button"
                onClick={() => changeImage(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === currentIndex}
                className={`h-16 w-20 overflow-hidden rounded-md border-2 transition-all duration-200 sm:h-20 sm:w-28 ${
                  index === currentIndex
                    ? "border-[#D4AF37] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {thumbnailUrl && (
                  <img
                    src={thumbnailUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
