import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function TempleAbout({ temple }) {

  const imageUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    temple.TempleImage.url;

  return (
    <section
      id="about-temple"
       className="
    relative overflow-hidden
    pt-28 pb-20 lg:pt-32 lg:pb-24
    bg-[radial-gradient(circle_at_80%_40%,#35100d_0%,#1c0908_35%,#0c0705_75%)]
  "
    >
       <img
  src="/images/lotus-pattern.png"
  alt=""
  className="
    absolute
    -right-40
    top-1/2
    -translate-y-1/2
    w-[650px]
    max-w-none
    opacity-[0.06]
    pointer-events-none
    object-contain
  "
/>
<div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-transparent
    via-transparent
    to-black/20
    pointer-events-none
  "
/>
      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
            Discover
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#DDB936]">
            About {temple?.TempleName}
          </h2>

          <div className="flex justify-center items-center gap-3 mt-5">
            <span className="w-12 h-px bg-[#D4AF37]" />
            <span className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <span className="w-12 h-px bg-[#D4AF37]" />
          </div>
        </div>


        {/* Content */}
        <div className="text-gray-300 text-lg leading-8">

          {/* Temple Image */}
          {imageUrl && (
            <div
              className="
                relative
                md:float-left
                w-full
                md:w-[42%]
                h-[350px]
                md:h-[480px]
                md:mr-12
                mb-8
                rounded-2xl
                overflow-hidden
              "
            >
                <img alt={temple.TempleName} src={imageUrl} fill
                className="object-cover"/>
             

              {/* subtle image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          )}

          {/* Strapi Description */}
          <div
            className="
              [&_p]:mb-6
              [&_p]:leading-8
              [&_strong]:text-[#DDB936]
              [&_h2]:text-[#DDB936]
              [&_h2]:text-3xl
              [&_h2]:font-bold
              [&_h2]:mb-5
              [&_h3]:text-[#DDB936]
              [&_h3]:text-2xl
              [&_h3]:font-semibold
              [&_h3]:mb-4
            "
          >
            {temple?.DescriptionRich && (
              <BlocksRenderer content={temple.DescriptionRich} />
            )}
          </div>

          {/* Clear float */}
          <div className="clear-both" />

        </div>

      </div>
    </section>
  );
}