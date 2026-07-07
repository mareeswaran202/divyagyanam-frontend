"use client";

import {
  Clock3,
  HandCoins,
  Sparkles,
  CalendarDays,
  Images,
  Info,
} from "lucide-react";

export default function TempleTabs() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">

        {/* Active Tab */}
        <button className="flex items-center gap-2 px-6 py-4 border-b-2 border-purple-600 text-purple-600 font-semibold bg-purple-50 transition">
          <Clock3 size={18} />
          Pooja Timings
        </button>

        <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition">
          <HandCoins size={18} />
          Seva Services
        </button>

        <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition">
          <Sparkles size={18} />
          Special Poojas
        </button>

        <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition">
          <CalendarDays size={18} />
          Booking
        </button>

        <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition">
          <Images size={18} />
          Gallery
        </button>

        <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition">
          <Info size={18} />
          About Temple
        </button>

      </div>
    </div>
  );
}