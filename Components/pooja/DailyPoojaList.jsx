"use client";

import { useState } from "react";
import DailyPoojaCard from "./DailyPoojaCard";
import PoojaFilter from "./PoojaFilter";
const FILTERS = ["All", "Morning", "Noon", "Evening", "Night"];

export default function DailyPoojaList({ poojas,
  selectedDate,
  setSelectedDate, }) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredPoojas =
  activeFilter === "All"
    ? poojas
    : poojas.filter(
        (pooja) =>
          pooja.daily_pooja.PoojaType === activeFilter
      );
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Daily Pooja Timings
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 justify-between">
        <PoojaFilter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          {FILTERS.map((filter) => (

          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-purple-100"
              }`}
          >
            {filter}
          </button>
        ))}
        </div>
      </div>

      {/* Pooja List */}
      <div className="space-y-2">
        {filteredPoojas.length > 0 ? (
          filteredPoojas.map((pooja) => (
            <DailyPoojaCard
              key={pooja.id}
              pooja={pooja}
            />
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No poojas available.
          </div>
        )}
      </div>

    </div>
  );
}