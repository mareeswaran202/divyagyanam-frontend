"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TempleGallery({ gallery }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {gallery.map((image) => {
        const imageUrl =
          process.env.NEXT_PUBLIC_STRAPI_URL + image.url;

        return (
          <SwiperSlide key={image.id}>
            <img
              src={imageUrl}
              alt=""
              className="w-full h-80 object-cover rounded-xl"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}