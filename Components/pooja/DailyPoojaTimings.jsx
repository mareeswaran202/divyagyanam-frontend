"use client";

export default function DailyPoojaTimings({ poojasdata = [] }) {
  if (!poojasdata.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
            Daily Schedule
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#DDB936]">
            Daily Pooja Timings
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#D4AF37]/20 bg-[#151008]">

          <table className="w-full text-left">

            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-[#1b150b]">

                <th className="px-6 py-4 text-[#D4AF37] font-semibold" style={{textAlign:'left'}}>
                  Pooja
                </th>

                <th className="px-6 py-4 text-[#D4AF37] font-semibold">
                  Time
                </th>

                <th className="px-6 py-4 text-[#D4AF37] font-semibold">
                  Duration
                </th>

                <th className="px-6 py-4 text-[#D4AF37] font-semibold">
                  Type
                </th>

              </tr>
            </thead>

            <tbody>

              {poojasdata.map((pooja) => (

                <tr
                  key={pooja.id}
                  className="border-b border-white/5 last:border-0 hover:bg-[#D4AF37]/5 transition"
                >

                  <td className="px-6 py-4 text-white font-medium">
                    {pooja.daily_pooja?.PoojaName || "-"}
                  </td>

                  <td className="px-6 py-4 text-gray-300 text-center">
                    {formatTime(pooja.start_time)}
                  </td>

                  <td className="px-6 py-4 text-gray-300 text-center">
                    {pooja.daily_pooja?.Duration
                      ? `${pooja.daily_pooja?.Duration} min`
                      : "-"}
                  </td>

                  <td className="px-6 py-4 text-center">

                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#D4AF37]/10 text-[#D4AF37]">
                      {pooja.daily_pooja?.PoojaType || "-"}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}


function formatTime(time) {
  if (!time) return "-";

  const [hours, minutes] = time.split(":");

  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0);

  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}