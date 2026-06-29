"use client";
import { SunMedium, Sunset, Clock, CalendarDays } from "lucide-react";
export default function PanchangCard({ data }) {
  return (
    <div className="bg-[#FEF3DD] rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold mb-5">
        Today's Panchang
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Tamil Date</span>
          <span>{data.tamilDate}</span>
        </div>

        <div className="flex justify-between">
          <span>Tithi</span>
          <span>{data.tithi}</span>
        </div>

        <div className="flex justify-between">
          <span>Nakshatra</span>
          <span>{data.nakshatra}</span>
        </div>

        <div className="flex justify-between">
          <span>Yoga</span>
          <span>{data.yoga}</span>
        </div>

        <div className="flex justify-between">
          <span>Karana</span>
          <span>{data.karana}</span>
        </div>

        <hr />

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
          <SunMedium color="#EC7F08" size={14} strokeWidth={4}/>          
           <span>Sunrise</span>
           </div>
          <span>{data.sunrise}</span>
          
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Sunset color="#EC7F08" size={14} strokeWidth={4}/>
          <span>Sunset</span>
          </div>
          <span>{data.sunset}</span>
        </div>

        <div className="flex justify-between">
         <div className="flex items-center gap-2">
           <Clock color="#292929" size={14} strokeWidth={4}/>
          <span>Rahu Kalam</span>
         </div>
          <span>{data.rahuKalam}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Clock color="#292929" size={14} strokeWidth={4}/>
          <span>Yamagandam</span>
          </div>
          <span>{data.yamaGandam}</span>
        </div>

        <div className="flex justify-between">
         <div className="flex items-center gap-2">
           <Clock color="#292929" size={14} strokeWidth={4}/>
          <span>Gulikai</span>
         </div>
          <span>{data.gulikai}</span>
        </div>

      </div>
    </div>
  );
}