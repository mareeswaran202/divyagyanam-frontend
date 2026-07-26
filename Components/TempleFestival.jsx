"use client";
import { Swiper,SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Link from "next/link"

function TempleFestival({templefestival}) {
  return (
     <Swiper modules={[Navigation, Pagination]}
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
      }}>
        {
         templefestival.map((festival)=> {
             const banner = festival.Banner?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL + festival.Banner.url
                : "/images/default-festival.jpg";
            return(
                  <SwiperSlide>
                  <Link
                  key={festival.id}
                  href={`/festivals/${festival.Slug}`}
                  className="block"
                >

                  <div className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300" style={{ border: "1px solid #816630" }}>

                    {/* Banner */}

                    <div className="relative h-60 overflow-hidden">

                      <img
                        src={banner}
                        alt={festival.EventName}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />

                      <span className="absolute top-4 left-4 bg-primary-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {festival.EventType}
                      </span>

                      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-3 py-2">

                        <p className="text-sm font-semibold">
                          {new Date(festival.EventDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>

                      </div>

                    </div>

                    {/* Content */}

                    <div className="p-6 bg-[#1A160E]">

                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {festival.EventName}
                      </h3>

                      <p className="text-[#B3AB7C] line-clamp-3">
                        {festival.Description?.[0]?.children?.[0]?.text}
                      </p>

                      <div className="mt-5">

                        <span className="text-primary-gold font-semibold">
                          View Festival →
                        </span>

                      </div>

                    </div>

                  </div>

                </Link>
            </SwiperSlide>
            )
         })
        }

     </Swiper>
  )
}

export default TempleFestival