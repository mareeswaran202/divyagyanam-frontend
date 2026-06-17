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
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
       style={{
    width: "100%",
    height: "100vh",
    
  }}
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
                <h5>{slide.SmallHeading}</h5>

                <h1
                  style={{
                    fontSize: "70px",
                    fontWeight: "bold",
                    margin: "20px 0",
                  }}
                >
                  {slide.Mainheading}
                </h1>

                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "1.8",
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