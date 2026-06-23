import {stats}  from "@/data/utilityjs";

export default function HomeStats() {
  return (
    <section className="py-6 bg-primary-brown">
      <div className="container mx-auto px-5">

        <div className="
          relative
          bg-[#120904]
          border
          border-[#8b5a16]
          rounded-2xl
          overflow-hidden
        ">

          <div className="grid grid-cols-2 lg:grid-cols-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4
                  px-6 py-5
                  border-r border-[#3d250a]
                  last:border-r-0
                "
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 object-contain"
                />

                <div>
                  <h3 className="text-white text-3xl font-bold">
                    {item.count}
                  </h3>

                  <p className="text-primary-gold text-sm">
                    {item.label}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}