 import { Clock3 } from "lucide-react";

function formatTime(time) {
  if (!time) return "";

  const [hours, minutes] = time.split(":");

  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function DailyPoojaCard({ pooja }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-5 last:border-0">

      {/* Left */}
      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <Clock3 className="w-5 h-5 text-amber-600" />
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {pooja.daily_pooja?.PoojaName}
          </h3>

          <p className="text-sm text-gray-500">
            {pooja.daily_pooja?.PoojaType} Pooja
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="text-right">

        <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
          {formatTime(pooja.start_time)}
        </div>

        <p className="text-xs text-gray-500 mt-2">
          {pooja.daily_pooja?.Duration ?? "-"} mins
        </p>

      </div>

    </div>
  );
}