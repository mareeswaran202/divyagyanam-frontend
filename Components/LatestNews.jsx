 
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetchAPI(
          "/temple-news-articles?populate=*&sort=PublishedDate:desc"
        );

        const articles = response?.data || [];
        setNews(articles);
      } catch (err) {
        console.error("Failed to load latest news:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  const getImage = (media) => {
    // Supports both Strapi v4 and v5 media response structures.
    const image =
      media?.data?.attributes ||
      media?.data ||
      media?.attributes ||
      media;

    const url = image?.url;

    if (!url) return "";

    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    const baseUrl = (
      process.env.NEXT_PUBLIC_STRAPI_URL || ""
    ).replace(/\/api\/?$/, "").replace(/\/$/, "");

    return `${baseUrl}${url}`;
  };

  const scrollCarousel = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const firstCard = container.querySelector("[data-news-card]");
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 16
      : container.clientWidth * 0.8;

    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <section className="py-12 text-center">
        Loading latest news...
      </section>
    );
  }

  if (error || news.length === 0) return null;

  return (
    <section className="max-w-full mx-auto px-5 py-12 md:py-16 bg-primary-brown">
      <div className="mx-auto max-w-8xl px-4">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ffffff]">
              From the spiritual world
            </p>

            <h2 className="text-3xl font-bold text-[#b58a3b] md:text-4xl">
              Latest News
            </h2>

             
          </div>

         
        </div>

      
<div className="latest-news-swiper relative">
  <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: ".latest-news-prev",
      nextEl: ".latest-news-next",
    }}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    }}
    className="latest-news-slider"
  >
    {news.map((article) => {
      const imageUrl = getImage(article.FeatureImage);

      return (
        <SwiperSlide key={article.documentId || article.id}>
          <Link
            href={`/temple-news/${article.Slug}`}
            className="group block h-full overflow-hidden rounded-xl border border-primary-gold bg-primary-brown shadow-sm transition hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={article.Title || "Temple news"}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}
            </div>

            <div className="p-5">
              {article.PublishedDate && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#ffffff]">
                  {new Date(article.PublishedDate).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
              )}

              <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-primary-gold group-hover:text-[#b58a3b]">
                {article.Title}
              </h3>

              <p className="line-clamp-3 text-sm leading-6 text-white">
                {article.ShortDescription}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-gold">
                Read More →
              </span>
            </div>
          </Link>
        </SwiperSlide>
      );
    })}
  </Swiper>

  <button
    type="button"
    className="latest-news-prev absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-[#20296e] shadow"
    aria-label="Previous news"
  >
    ←
  </button>

  <button
    type="button"
    className="latest-news-next absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-[#20296e] shadow"
    aria-label="Next news"
  >
    →
  </button>
</div>


        <div className="mt-6 text-center">
          <Link
            href="/temple-news"
            className="inline-flex rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b58a3b]"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
