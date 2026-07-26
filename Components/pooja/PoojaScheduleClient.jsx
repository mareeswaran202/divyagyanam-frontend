"use client";

import { useState } from "react";

import TempleSearch from "./TempleSearch";
import TempleHeaderCard from "./TempleHeaderCard";
import TempleTabs from "./TempleTabs";
import DailyPoojaList from "./DailyPoojaList";
import SpecialSevaList from "./SpecialSevaList";
import FestivalSidebar from "../Festival/FestivalSidebar";
import SpecialPoojaList from "./SpecialPoojaList";
import BookingSection from "./BookingSection";
import TempleAbout from "./TempleAbout";
import TempleGallerys from "./TempleGallerys";
export default function PoojaScheduleClient({
  temples,
  poojas,
  sevas,
  festival,

}) {

  const [activeTab, setActiveTab] = useState("pooja")
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

  // const filteredFestivals = festival.filter(
  //   (festival) => festival.temples?.id === selectedTemple.id
  // );

  const filteredFestivals = festival.filter((item) =>
    item.temples?.some(
      (temple) => temple.id === selectedTemple.id
    )
  );


console.log("Selected Temple:", selectedTemple);
console.log("Selected Temple ID:", selectedTemple?.id);

console.log("All Pooja Schedules:", poojas);

console.log(
  "Samayapuram schedules:",
  poojas.filter(
    (item) => item.temple?.id === selectedTemple?.id
  )
);

console.log("Selected Date:", selectedDate);


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

        <TempleTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}

        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* Left Content */}
  <div className="lg:col-span-2">

    {activeTab === "pooja" && (
      <DailyPoojaList
        poojas={filteredPoojas}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    )}

    {activeTab === "seva" && (
      <SpecialSevaList
        sevas={filteredSevas}
      />
    )}

    {activeTab === "special-pooja" && (
      <SpecialPoojaList />
    )}

    {activeTab === "booking" && (
      <BookingSection />
    )}

    {activeTab === "gallerytab" && (
        <TempleGallerys/>
    )}

    {activeTab === "abouttemple" && (
      <TempleAbout />
    )}

  </div>

  {/* Right Sidebar - Always Visible */}
  <div>
    <FestivalSidebar festivals={filteredFestivals} />
  </div>

</div>

      </div>

    </section>
  );
}