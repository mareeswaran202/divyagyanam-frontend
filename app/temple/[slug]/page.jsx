import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";
import TempleGallery from "@/Components/TempleGallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MapPin, Landmark, Globe, LocateFixed, Car, TrainFront, Plane, Clock3, BedDouble, Phone, Globe2, Radio, ExternalLink } from "lucide-react";
import Link from "next/link";
import TempleFestival from "@/Components/TempleFestival";
import HistoryTimeline from "@/Components/HistoryTimeline";
import TempleAbout from "@/Components/TempleAbout";
import TempleMap from "@/Components/TempleMap";
export default async function TempleDetails({ params }) {
  const { slug } = await params;

  // Temple Details
  const templeData = await fetchAPI(
    `/templecollections?filters[Slug][$eq]=${slug}&populate=*`
  );
  const siteSettings = await fetchAPI('/site-setting?populate=*')
  const siteSetting = siteSettings.data

  const temple = templeData.data[0];

  if (!temple) {
    notFound();
  }

  // Festivals related to this temple
  const festivalData = await fetchAPI(
    `/temple-events?filters[temples][Slug][$eq]=${slug}&populate=*`
  );

  const festivals = festivalData.data; 

  return (


    <section className="bg-primary-brown">
      <section
        className="
    relative min-h-[650px]
    flex items-center justify-center
    overflow-hidden
    bg-[#070600]
  "
      >
        {/* Large soft central glow */}
        <div
          className="
      absolute inset-0
      bg-[radial-gradient(ellipse_at_50%_48%,rgba(212,175,55,0.20)_0%,rgba(130,92,10,0.10)_28%,rgba(40,30,5,0.05)_48%,transparent_70%)]
    "
        />

        {/* Bottom glow */}
        <div
          className="
      absolute bottom-0 left-1/2
      -translate-x-1/2
      w-[900px] h-[350px]
      bg-[#D4AF37]/5
      blur-[120px]
      rounded-full
    "
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">

          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-xl">✦</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          {/* Location */}
          <p className="
      text-[#D4AF37]/70
      uppercase
      tracking-[0.35em]
      text-xs md:text-sm
      mb-7
    ">
            Divya Kshetra · {temple.Location} · {temple.State}
          </p>

          {/* Temple name */}
          <h1 className="
      text-[#DDB936]
      text-5xl md:text-7xl
      lg:text-8xl
      font-bold
      tracking-tight
      leading-none
      mb-8
    ">
            {temple.TempleName}
          </h1>

          {/* Small divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-20 h-px bg-[#D4AF37]/30" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <span className="w-20 h-px bg-[#D4AF37]/30" />
          </div>

          {/* Description */}
          <p className="
      max-w-2xl mx-auto
      text-[#c5b67e]
      text-lg md:text-xl
      leading-8
      mb-10
    ">
            {temple.ShortDescription}
          </p>

          {/* Buttons */}


        </div>
      </section>


        <TempleAbout temple={temple}/>

     


    

      {temple.History?.length > 0 && (
        <HistoryTimeline items={temple.History} />
      )}

 

      
      {temple.TempleArchitecture?.length > 0 && (
        <section>
          <div className="max-w-7xl m-auto px-5 py-10">
            <h2 className="text-4xl font-bold mb-6 text-center text-primary-gold">
              Temple Architecture
            </h2>
            <div className="prose prose-invert
          max-w-none
          prose-headings:text-[#D4AF37]
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-p:text-gray-300
          prose-li:text-gray-300
          prose-strong:text-white
          prose-ul:my-4
          prose-li:my-2  p-5 bg-[#181208] border border-[#3a2c12] rounded-2xl overflow-hidden">
              <BlocksRenderer content={temple.TempleArchitecture} />

            </div>
          </div>
        </section>
      )}

 
      {/* {
        temple.HistoryOrigin && temple.HistoryOrigin.length > 0 && (
          <section className="max-w-7xl mx-auto px-5 py-10">
            <div>

              <h2 className="text-4xl font-bold mb-6 text-center text-primary-gold">
                History of {temple.TempleName}
              </h2>

              <div className="prose prose-invert
          max-w-none
          prose-headings:text-[#D4AF37]
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-p:text-gray-300
          prose-li:text-gray-300
          prose-strong:text-white
          prose-ul:my-4
          prose-li:my-2">
                <BlocksRenderer content={temple.HistoryOrigin} />
              </div>

            </div>

          </section>
        )
      } */}
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
      <section className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-[#181208] border border-[#3a2c12] rounded-2xl overflow-hidden">

          <div className="prose prose-invert
          max-w-none
          prose-headings:text-[#D4AF37]
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-p:text-gray-300
          prose-li:text-gray-300
          prose-strong:text-white
          prose-ul:my-4
          prose-li:my-2">
            {siteSetting?.DefaultDressCode?.length > 0 && (
  <BlocksRenderer content={siteSetting.DefaultDressCode} />
)}
            {temple.AdditionalDressCode?.length > 0 && <BlocksRenderer content={temple.AdditionalDressCode} />}
          </div>


          <div className="prose prose-invert
          max-w-none
          prose-headings:text-[#D4AF37]
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-p:text-gray-300
          prose-li:text-gray-300
          prose-strong:text-white
          prose-ul:my-4
          prose-li:my-2">
            {siteSetting?.DefaultDosAndDonts?.length > 0 && (
  <BlocksRenderer content={siteSetting.DefaultDosAndDonts} />
)}
          </div>

        </div>


      </section>
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* By Road */}
          {temple.ByRoad?.length > 0 && (
            <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <Car className="text-[#D4AF37]" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                By Road
              </h3>

              <div className="text-gray-300 leading-7">
                <BlocksRenderer content={temple.ByRoad} />
              </div>
            </div>
          )}

          {/* By Rail */}
          {temple.ByTrain?.length > 0 && (
            <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <TrainFront className="text-[#D4AF37]" />
              </div>

              <h3 className="text-xl text-white font-bold mb-4">
                By Rail
              </h3>

              <div className="text-gray-300 leading-7">
                <BlocksRenderer content={temple.ByTrain} />
              </div>
            </div>
          )}

          {/* By Air */}
          {temple.ByAir?.length > 0 && (
            <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <Plane className="text-[#D4AF37]" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                By Air
              </h3>

              <div className="text-gray-300 leading-7">
                <BlocksRenderer content={temple.ByAir} />
              </div>
            </div>
          )}

        </div>
      </section>
      <div className="max-w-7xl mx-auto p-10 mt-10">

        <h2 className="text-3xl font-bold mb-8 text-primary-gold text-center">
          Upcoming Festivals
        </h2>

        <TempleFestival templefestival={festivals} />

      </div>

      <div className="max-w-7xl mx-auto p-10">
        <section className="mt-20">

          <h2 className="text-3xl font-bold mb-8 text-center text-primary-gold">
            Temple Gallery
          </h2>

          <TempleGallery gallery={temple.Gallery} />

        </section>
      </div>
      {(temple.TempleTiming?.length > 0 ||
        temple.Accommodation?.length > 0) && (

          <section className="mt-16 pb-10">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">
                Temple Information
              </h2>

              <div className="grid md:grid-cols-4 gap-6">

                {temple.TempleTiming?.length > 0 && (
                  <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-7">

                    <div className="w-12 h-12 rounded-full bg-[#2b2109] flex items-center justify-center mb-5">
                      <Clock3 className="text-[#D4AF37]" size={22} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
                      Temple Timings
                    </h3>

                    <div className="text-gray-300 leading-7">
                      <p>{temple.TempleTiming}</p>
                      {/* <BlocksRenderer content={temple.TempleTiming} /> */}
                    </div>

                  </div>
                )}

                {temple.Accommodation?.length > 0 && (
                  <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-7">

                    <div className="w-12 h-12 rounded-full bg-[#2b2109] flex items-center justify-center mb-5">
                      <BedDouble className="text-[#D4AF37]" size={22} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
                      Accommodation
                    </h3>

                    <div className="text-gray-300 leading-7">
                      <BlocksRenderer content={temple.Accommodation} />
                    </div>

                  </div>
                )}

                {temple.ContactNumber?.length > 0 && (
                  <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-7">

                    <div className="w-12 h-12 rounded-full bg-[#2b2109] flex items-center justify-center mb-5">
                      <Phone className="text-[#D4AF37]" size={22} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
                      Contact Number
                    </h3>

                    <div className="text-gray-300 leading-7">
                      <Link href={`tel:${temple.ContactNumber}`}
                        className="text-white hover:text-[#D4AF37] transition">{temple.ContactNumber}</Link>


                    </div>

                  </div>
                )}
                {
                  temple.TempleWebsite?.length > 0 && (
                    <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl p-7">

                      <div className="w-12 h-12 rounded-full bg-[#2b2109] flex items-center justify-center mb-5">
                        <Globe2 className="text-[#D4AF37]" size={22} />
                      </div>

                      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
                        Temple Website
                      </h3>

                      <div className="text-gray-300 leading-7">
                        <Link href="{temple.TempleWebsite}" className="hover:text-[#D4AF37] transition"> Visit Official Website</Link>

                      </div>

                    </div>
                  )
                }

              </div>
            </div>
          </section>
        )}
      {temple.LiveStreamingUrl && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-5">

            {/* Heading */}
            <div className="text-center mb-10">

              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>

                <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">
                  Live Darshan
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                Watch Live from {temple.TempleName}
              </h2>

              <p className="text-gray-400 mt-3">
                Experience live darshan and temple rituals
              </p>

            </div>


            {/* Live Video Card */}
            <div className="bg-[#181208] border border-[#3a2c12] rounded-2xl overflow-hidden">

              {/* Video */}
              <div className="aspect-video bg-black">

                <iframe
                  src={temple.LiveStreamingUrl}
                  title={`${temple.TempleName} Live Darshan`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>


              {/* Bottom information */}
              <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Radio
                      size={21}
                      className="text-red-500"
                    />
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>

                      <span className="text-red-500 text-sm font-semibold">
                        LIVE
                      </span>

                    </div>

                    <h3 className="text-white font-semibold mt-1">
                      {temple.TempleName}
                    </h3>

                  </div>

                </div>


                {/* YouTube link */}
                {temple.LiveStreamingUrl && (
                  <a
                    href={temple.LiveStreamingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Watch on YouTube

                    <ExternalLink size={16} />
                  </a>
                )}

              </div>

            </div>

          </div>
        </section>
      )}

      <TempleMap temple={temple}/>

    </section>

  );
}




