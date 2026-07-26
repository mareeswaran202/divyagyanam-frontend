 import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function HistoryTimeline({ items }) {
  if (!items?.length) return null;

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20 lg:py-24
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/images/gopuram.png')",
        backgroundPosition: "center 40%",
      }}
    >

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Warm temple tone */}
    <div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-[#080603]/90
    via-[#130d06]/70
    to-[#120b05]/85
  "
/>

      {/* Top fade */}
      <div
        className="
          absolute inset-x-0 top-0 h-40
          bg-gradient-to-b
          from-[#0b0905]
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-40
          bg-gradient-to-t
          from-[#0b0905]
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
            Through The Ages
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
            Temple History
          </h2>

          <div className="flex justify-center items-center gap-3 mt-5">
            <span className="w-12 h-px bg-[#D4AF37]" />
            <span className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <span className="w-12 h-px bg-[#D4AF37]" />
          </div>

        </div>

        {/* Horizontal Scroll */}
        <div className=" overflow-x-auto
    pb-10

    [&::-webkit-scrollbar]:h-[6px]

    [&::-webkit-scrollbar-track]:bg-[#171006]
    [&::-webkit-scrollbar-track]:rounded-full

    [&::-webkit-scrollbar-thumb]:bg-[#D4AF37]
    [&::-webkit-scrollbar-thumb]:rounded-full

    hover:[&::-webkit-scrollbar-thumb]:bg-[#e5c24a]">

          <div className="flex min-w-max pt-5">

            {items.map((item, index) => (

              <div
                key={item.id || index}
                className="relative w-[400px] shrink-0 px-8"
              >

                {/* Horizontal Line */}
                <div
                  className="
                    absolute
                    top-[7px]
                    left-0
                    w-full
                    h-px
                    bg-[#8a681d]
                  "
                />

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    top-0
                    left-8
                    w-4
                    h-4
                    rounded-full
                    bg-[#D4AF37]
                    border-4
                    border-[#0d0a03]
                    z-10
                  "
                />

                {/* Timeline Content */}
                <div className="pt-10">

                  <h3 className="text-[#D4AF37] text-xl font-semibold mb-5">
                    {item.Period}
                  </h3>

                  {item.HistoryDescription?.length > 0 && (
                    <div
                      className="
                        history-scroll
                        text-gray-200
                        leading-7
                        h-[300px]
                        overflow-y-auto
                        pr-4
                        [&_p]:mb-4
                        [&_ul]:list-disc
                        [&_ul]:pl-5
                        [&_ol]:list-decimal
                        [&_ol]:pl-5
                      "
                    >
                      <BlocksRenderer
                        content={item.HistoryDescription}
                      />
                    </div>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}