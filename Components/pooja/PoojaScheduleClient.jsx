"use client";

import { useState } from "react";

import TempleSearch from "./TempleSearch";
import TempleHeaderCard from "./TempleHeaderCard";
import TempleTabs from "./TempleTabs";
import DailyPoojaList from "./DailyPoojaList";
import SpecialSevaList from "./SpecialSevaList";

export default function PoojaScheduleClient({
  temples,
  poojas,
  sevas,
   
}) {
  const defaultTemple =
  temples.find((temple) =>
    poojas.some(
      (schedule) =>
        schedule.temple?.id === temple.id
    )
  ) || temples[0];
 
  const [selectedTemple, setSelectedTemple] =
    useState(defaultTemple);

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

 const filteredPoojas = poojas
  .filter((item) => item.temple?.id === selectedTemple.id)
  .filter(
    (item) =>
      selectedDate >= item.start_date &&
      selectedDate <= item.end_date
  )
  .sort(
    (a, b) =>
      (a.daily_pooja?.Sequence || 0) -
      (b.daily_pooja?.Sequence || 0)
  );
 const filteredSevas = sevas
  .filter((item) => {
    if (!item.templecollection) return false;

    return item.templecollection.id === selectedTemple.id;
  })
  .filter((item) => {
    return (
      selectedDate >= item.start_date &&
      selectedDate <= item.end_date
    );
  });

  return (
    <section className="py-16 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        <TempleSearch
          temples={temples}
          selectedTemple={selectedTemple}
          setSelectedTemple={setSelectedTemple}
        />

        <TempleHeaderCard temple={selectedTemple} />

        <TempleTabs />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <DailyPoojaList
              poojas={filteredPoojas}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

          </div>

          <div>

            <SpecialSevaList
              sevas={filteredSevas}
            />

          </div>

        </div>

      </div>

    </section>
  );
}