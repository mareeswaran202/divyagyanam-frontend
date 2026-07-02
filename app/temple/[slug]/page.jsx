import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";
import TempleGallery from "@/Components/TempleGallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MapPin, Landmark, Globe, LocateFixed } from "lucide-react";
import Link from "next/link";

export default async function TempleDetails({ params }) {
  const { slug } = await params;

  // Temple Details
  const templeData = await fetchAPI(
    `/templecollections?filters[Slug][$eq]=${slug}&populate=*`
  );

  const temple = templeData.data[0];

  if (!temple) {
    notFound();
  }

  // Festivals related to this temple
  const festivalData = await fetchAPI(
    `/temple-events?filters[temples][Slug][$eq]=${slug}&populate=*`
  );

  const festivals = festivalData.data;

  const imageUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    temple.TempleImage.url;

  return (
    <section className="bg-primary-brown">
      <div className="relative overflow-hidden">

        <img
          src={imageUrl}
          alt={temple.TempleName}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute bottom-12 left-12">

          <h1 className="text-5xl font-bold text-white">
            {temple.TempleName}
          </h1>

          <p className="text-white/90 mt-3 text-lg">
            {temple.Location}, {temple.State}
          </p>

        </div>

      </div>
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div>

          <h2 className="text-4xl font-bold mb-6 text-center text-primary-gold">
            About {temple.TempleName}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-400">
            <BlocksRenderer content={temple.DescriptionRich} />
          </div>

        </div>

      </section>
      <section className="mt-16">
        <div className="max-w-5xl mx-auto">

          <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl overflow-hidden">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {/* Location */}

              <div className="flex items-center gap-4 p-8 border-r border-[#3a2c12]">

                <div className="w-14 h-14 rounded-xl bg-primary-gold/20 flex items-center justify-center">
                  <MapPin color="#d4af37" size={"20"} />
                </div>

                <div>

                  <p className="text-gray-400 uppercase text-sm">
                    Location
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {temple.Location}
                  </h3>

                </div>

              </div>

              {/* Deity */}

              <div className="flex items-center gap-4 p-8 border-r border-[#3a2c12]">

                <div className="w-14 h-14 rounded-xl bg-primary-gold/20 flex items-center justify-center">

                  <Landmark color="#d4af37" size={"20"} />

                </div>

                <div>

                  <p className="text-gray-400 uppercase text-sm">
                    Deity
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {temple.Deity}
                  </h3>

                </div>

              </div>

              {/* State */}

              <div className="flex items-center gap-4 p-8 border-r border-[#3a2c12]">

                <div className="w-14 h-14 rounded-xl bg-primary-gold/20 flex items-center justify-center">

                  <Globe color="#d4af37" size={"20"} />

                </div>

                <div>

                  <p className="text-gray-400 uppercase text-sm">
                    State
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {temple.State}
                  </h3>

                </div>

              </div>

              {/* District */}

              <div className="flex items-center gap-4 p-8">

                <div className="w-14 h-14 rounded-xl bg-primary-gold/20 flex items-center justify-center">

                  <LocateFixed color="#d4af37" size={"20"} />

                </div>

                <div>

                  <p className="text-gray-400 uppercase text-sm">
                    District
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {temple.District}
                  </h3>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      <div className="max-w-7xl mx-auto p-10 mt-10">

        <h2 className="text-3xl font-bold mb-8 text-primary-gold text-center">
          Upcoming Festivals
        </h2>

        {festivals.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {festivals.map((festival) => {

              const banner = festival.Banner?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL + festival.Banner.url
                : "/images/default-festival.jpg";

              return (

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

              );

            })}

          </div>

        ) : (

          <p className="text-gray-500">
            No upcoming festivals.
          </p>

        )}

      </div>
      <div className="max-w-7xl mx-auto p-10">
        <section className="mt-20">

          <h2 className="text-3xl font-bold mb-8 text-center text-primary-gold">
            Temple Gallery
          </h2>

          <TempleGallery gallery={temple.Gallery} />

        </section>
      </div>
    </section>
  );
}




