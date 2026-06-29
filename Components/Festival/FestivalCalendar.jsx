 "use client";

import { useState } from "react";
import CalendarView from "./CalendarView";
 import PanchangCard from "./PanchangCard";
import FestivalStats from "./FestivalStats";
import UpcomingFestivals from "./UpcomingFestivals";
export default function FestivalCalendar({ events, panchang }) {
  

const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <section className="bg-[#fdf9f5] py-12">
      <div className="container mx-auto px-5">

        <h2 className="text-4xl font-bold text-center text-primary-gold mb-10">
          Temple Festival Calendar
        </h2>
        <FestivalStats events={events}
    templeCount={0}
    liveEvents={0}/>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Calendar */}

          <div className="lg:col-span-8">

            <CalendarView
              events={events}              
              onMonthChange={setCurrentMonth}
            />

          </div>

          {/* Event Details */}

          <div className="lg:col-span-4">

           <PanchangCard data={panchang}/>
           <UpcomingFestivals events={events}
        currentMonth={currentMonth}/>

          </div>

        </div>

      </div>
    </section>
  );
}