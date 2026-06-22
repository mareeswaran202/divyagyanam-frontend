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
                  maxWidth: "700px",
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
                  }}
                >
                  {slide.Paragraph}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}