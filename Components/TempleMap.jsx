 import { MapPin, LocateFixed } from "lucide-react";

export default function TempleMap({ temple }) {

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Create Google Maps search query
  const mapQuery = [
    temple?.TempleName,
    temple?.Location,
    temple?.District,
    temple?.State,
  ]
    .filter(Boolean)
    .join(", ");

  // Embedded map
  const mapUrl =
    `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(mapQuery)}`;

  // Directions
  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  // Open Google Maps
  const googleMapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  return (
    <section className="relative py-24 bg-[#080603] overflow-hidden">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <div className="text-center mb-12">

      <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
        Visit the Temple
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#DDB936]">
        Find {temple.TempleName}
      </h2>

      <div className="flex justify-center items-center gap-3 mt-5">
        <span className="w-12 h-px bg-[#D4AF37]" />
        <span className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
        <span className="w-12 h-px bg-[#D4AF37]" />
      </div>

    </div>


    {/* Location Card */}
    <div className="border border-[#D4AF37]/30 rounded-2xl overflow-hidden bg-[#151008]">

      {/* Temple Information */}
      <div className="p-7 md:p-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Address */}
          <div>

            <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs mb-3">
              Temple Location
            </p>

            <h3 className="text-white text-2xl font-semibold mb-3">
              {temple.TempleName}
            </h3>

            <p className="text-[#B3AB7C] leading-7">
              {temple.Location}
              {temple.District && `, ${temple.District}`}
              <br />
              {temple.State}
            </p>

          </div>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-[#D4AF37]
                text-black
                font-semibold
                px-6 py-3
                rounded-lg
                hover:bg-[#E6C64A]
                transition
              "
            >
              <LocateFixed size={18} />
              Get Directions
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                border border-[#D4AF37]/50
                text-[#D4AF37]
                font-semibold
                px-6 py-3
                rounded-lg
                hover:bg-[#D4AF37]/10
                transition
              "
            >
              <MapPin size={18} />
              Open in Google Maps
            </a>

          </div>

        </div>

      </div>


      {/* Google Map */}
      <div className="w-full h-[450px] md:h-[520px]">

        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${temple.TempleName} Location`}
        />

      </div>

    </div>

  </div>

</section>
  );
}