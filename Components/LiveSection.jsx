export default function LiveSection(){
    return(
        <section className="container mx-auto bg-primary-brown px-4 py-4">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

    {/* Live Darshan */}
    <div className="border border-primary-gold rounded-xl overflow-hidden bg-black">
      <div className="relative">
        <img
          src="/images/gopuram.png"
          alt=""
          className="w-full h-[320px] object-cover"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-primary-gold text-xs">
            ♦ LIVE DARSHAN
          </span>
          <span className="bg-red-600 text-white px-2 rounded text-xs">
            LIVE
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white text-xl">
          Tirumala Venkateswara Temple
        </h3>

        <p className="text-gray-400 mt-1">
          Tirupati, Andhra Pradesh
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-primary-gold text-black px-4 py-2 rounded">
            Watch Live Now
          </button>

          <span className="text-green-400 text-sm">
            ● 12.5K watching now
          </span>
        </div>
      </div>
    </div>

    {/* Upcoming Live */}
    <div className="border border-primary-gold rounded-xl bg-black p-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-primary-gold uppercase text-sm">
          Upcoming Live
        </h3>

        <a href="/coming-soon" className="text-primary-gold text-sm">
          View All →
        </a>
      </div>

      {[1,2,3].map((item) => (
        <div
          key={item}
          className="flex gap-3 pb-3 mb-3 border-b border-zinc-800"
        >
          <img
            src="/images/madurai-meenakshi-small.png"
            alt=""
            className="w-16 h-16 rounded object-cover"
          />

          <div>
            <h4 className="text-white text-sm">
              Meenakshi Amman Temple
            </h4>

            <p className="text-gray-400 text-xs">
              Madurai
            </p>

            <p className="text-gray-400 text-xs">
              Today, 08:00 AM
            </p>
          </div>
        </div>
      ))}

      <a
        href="/coming-soon"
        className="text-primary-gold text-sm block mt-4"
      >
        View All Live Streams →
      </a>
    </div>

    {/* Today's Festivals */}
    <div className="border border-primary-gold rounded-xl bg-black p-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-primary-gold uppercase text-sm">
          Today's Festivals
        </h3>

        <a href="/coming-soon" className="text-primary-gold text-sm">
          View Calendar →
        </a>
      </div>

      {[1,2,3].map((item) => (
        <div
          key={item}
          className="flex gap-3 pb-3 mb-3 border-b border-zinc-800"
        >
          <img
            src="/images/madurai-meenakshi-small.png"
            alt=""
            className="w-16 h-16 rounded object-cover"
          />

          <div>
            <h4 className="text-white text-sm">
              Vaikunta Ekadasi
            </h4>

            <p className="text-gray-400 text-xs">
              May 12, 2024
            </p>

            <p className="text-gray-400 text-xs">
              Many Temples
            </p>
          </div>
        </div>
      ))}

      <a
        href="/coming-soon"
        className="text-primary-gold text-sm block mt-4"
      >
        View Festival Calendar →
      </a>
    </div>

    {/* Puja Schedule */}
    <div className="border border-primary-gold rounded-xl bg-black p-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-primary-gold uppercase text-sm">
          Puja Schedule
        </h3>

        <a href="/coming-soon" className="text-primary-gold text-sm">
          View All →
        </a>
      </div>

      {[
        ["Suprabhatam","05:00 AM"],
        ["Thomala Seva","07:00 AM"],
        ["Archana","09:00 AM"],
        ["Naivedyam","12:00 PM"],
        ["Deepa Aradhana","07:00 PM"]
      ].map((item,index) => (
        <div
          key={index}
          className="flex justify-between py-3 border-b border-zinc-800"
        >
          <span className="text-white">
            {item[0]}
          </span>

          <span className="text-gray-400">
            {item[1]}
          </span>
        </div>
      ))}

      <a
        href="/coming-soon"
        className="text-primary-gold text-sm block mt-4"
      >
        View Full Schedule →
      </a>
    </div>

  </div>
</section>
    )
}

 