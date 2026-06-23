"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={0}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
        
    >
      {slides.map((slide) => {
        // Build image URL for each slide
        const imageUrl =
          process.env.NEXT_PUBLIC_STRAPI_URL + slide.Sliderimage.url;

        return (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                position: "relative",
              }}
            >
              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  color: "white",
                  maxWidth: "900px",
                  padding: "120px 80px",
                }}
              >
                <h5 className="text-5xl font-bold text-white">{slide.SmallHeading}</h5>

                <h1 className="font-bold  text-primary-gold py-2" style={{fontSize:'60px'}}
                   
                >
                  {slide.Mainheading}
                </h1>

                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5",
                    maxWidth:"700px",
                  }}
                >
                  {slide.Paragraph}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">

  <a
    href="/temples"
    className="bg-gradient-to-r from-[#d4af37] to-[#b8860b]
    text-black font-semibold px-8 py-4 rounded-lg
    flex items-center gap-3 hover:scale-105 transition-all"
  >
      Explore Temples
  </a>

  <a
    href="/live-darshan"
    className="bg-[#1a0f07] border border-[#d4af37]
    text-white font-semibold px-8 py-4 rounded-lg
    flex items-center gap-3 hover:bg-[#2a180d] transition-all"
  >
     Watch Live Darshan
  </a>

  <a
    href="/donate"
    className="bg-gradient-to-r from-[#451507] to-[#451507]
    text-white font-semibold px-8 py-4 rounded-lg
    flex items-center gap-3 hover:scale-105 transition-all"
  >
      Donate Now
  </a>

</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}