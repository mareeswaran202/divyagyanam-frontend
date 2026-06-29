"use client";

export default function EventDetails({ event }) {
  if (!event) {
    return (
      <div className="bg-[#2B1A11] border border-[#6d4d22] rounded-2xl p-8 text-center text-white h-full flex flex-col justify-center">
        <div className="text-6xl mb-4">🛕</div>

        <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">
          Select a Festival
        </h2>

        <p className="text-gray-300">
          Click any festival from the calendar to view its complete details.
        </p>
      </div>
    );
  }

  const temple = event.Temple?.[0];

  return (
    <div className="bg-[#2B1A11] border border-[#6d4d22] rounded-2xl overflow-hidden shadow-xl">

      {/* Temple Image */}

      {temple?.TempleImage?.url ? (
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${temple.TempleImage.url}`}
          alt={temple.TempleName}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="h-64 bg-[#1A120B] flex items-center justify-center text-[#D4AF37] text-6xl">
          🛕
        </div>
      )}

      <div className="p-8">

        <span className="inline-block bg-[#D4AF37] text-black text-sm font-semibold px-4 py-1 rounded-full mb-4">
          {event.EventType}
        </span>

        <h2 className="text-4xl font-bold text-white mb-4">
          {event.EventName}
        </h2>

        <div className="space-y-3 text-gray-300">

          <p>
            📅 <strong>Date:</strong> {event.EventDate}
          </p>

          <p>
            🛕 <strong>Temple:</strong> {temple?.TempleName}
          </p>

          <p>
            📍 <strong>Location:</strong> {temple?.Location}
          </p>

          <p>
            🌎 <strong>State:</strong> {temple?.State}
          </p>

          <p>
            🙏 <strong>Deity:</strong> {temple?.Deity}
          </p>

        </div>

      </div>

    </div>
  );
}