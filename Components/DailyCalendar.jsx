"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function DailyCalendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  const [panchang, setPanchang] = useState(null);
  const [inauspicious, setInauspicious] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("en-IN", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const formatDateForAPI = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
  };

  const formatTime = (value) => {
    if (!value) return "-";

    return new Date(value).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Get Panchang when date changes
 useEffect(() => {
  const getCalendarData = async () => {
    try {
      setLoading(true);
      setError("");

      const date = formatDateForAPI(selectedDate);

      // Get Panchang + Inauspicious periods
      const [panchangResponse, inauspiciousResponse] = await Promise.all([
        fetch(`/api/prokerala-panchang?date=${date}`),
        fetch(`/api/prokerala-inauspicious?date=${date}`),
      ]);

      const panchangResult = await panchangResponse.json();
      const inauspiciousResult = await inauspiciousResponse.json();

      if (!panchangResponse.ok || !panchangResult.success) {
        throw new Error("Unable to load Panchang");
      }

      if (!inauspiciousResponse.ok || !inauspiciousResult.success) {
        throw new Error("Unable to load inauspicious periods");
      }

      setPanchang(panchangResult.panchang?.data || null);

      setInauspicious(
        inauspiciousResult.inauspicious?.data?.muhurat || []
      );

    } catch (err) {
      console.error(err);

      setError("Unable to load Panchang information.");
      setPanchang(null);
      setInauspicious(null);

    } finally {
      setLoading(false);
    }
  };

  getCalendarData();
}, [selectedDate]);

const rahuKalam = inauspicious?.find(
  (item) => item.name === "Rahu"
);

const rahuStart = rahuKalam?.period?.[0]?.start;
const rahuEnd = rahuKalam?.period?.[0]?.end;

  const previousMonth = () => {
  const newDate = new Date(year, month - 1, 1);

  setCurrentDate(newDate);
  setSelectedDate(newDate);
};

const nextMonth = () => {
  const newDate = new Date(year, month + 1, 1);

  setCurrentDate(newDate);
  setSelectedDate(newDate);
};

  const selectDay = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const isSelected = (day) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  return (
    <section className="py-24 bg-[#0b0905] min-h-screen">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-3">
            Hindu Calendar
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#DDB936]">
            Daily Panchang
          </h1>

          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
            <MapPin size={16} />

            <span>
              Chennai, Tamil Nadu
            </span>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= CALENDAR ================= */}

          <div className="bg-[#151008] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8">

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-8">

              <button
                onClick={previousMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <ChevronLeft size={20} />
              </button>

              <h2 className="text-2xl font-semibold text-white">
                {monthName} {year}
              </h2>

              <button
                onClick={nextMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <ChevronRight size={20} />
              </button>

            </div>

            {/* Week */}
             {/* Week Days */}
<div
  className="mb-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  }}
>
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
    <div
      key={day}
      className="text-center text-[#D4AF37] text-sm font-medium py-2"
    >
      {day}
    </div>
  ))}
</div>

{/* Calendar Days */}
<div
  className="gap-2"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  }}
>
  {Array.from({ length: firstDay }).map((_, index) => (
    <div key={`blank-${index}`} />
  ))}

  {Array.from({ length: daysInMonth }).map((_, index) => {
    const day = index + 1;

    return (
      <button
        key={day}
        onClick={() => selectDay(day)}
        className={`
          aspect-square
          rounded-xl
          flex items-center
          justify-center
          text-sm
          md:text-base
          transition
          ${
            isSelected(day)
              ? "bg-[#D4AF37] text-black font-bold"
              : "text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
          }
        `}
      >
        {day}
      </button>
    );
  })}
</div>

            

          </div>


          {/* ================= PANCHANG ================= */}

          <div className="bg-[#151008] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8">

            <div className="border-b border-[#D4AF37]/20 pb-5 mb-6">

              <p className="text-[#D4AF37] text-sm uppercase tracking-wider mb-2">
                Selected Date
              </p>

              <h2 className="text-2xl font-semibold text-white">
                {selectedDate.toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h2>

            </div>

            {loading && (
              <div className="py-20 text-center text-gray-400">
                Loading Panchang...
              </div>
            )}

            {error && !loading && (
              <div className="py-20 text-center text-red-400">
                {error}
              </div>
            )}

            {!loading && !error && panchang && (
              <div>

                {/* Panchang Values */}
                <div className="space-y-5 grid grid-cols-1 md:grid-cols-2  border border-[#6b4a1b] rounded-xl">

                  <PanchangRow
                    label="Tithi"
                    value={panchang.tithi?.[0]?.name}
                    end={formatTime(panchang.tithi?.[0]?.end)}
                  />

                  <PanchangRow
                    label="Nakshatra"
                    value={panchang.nakshatra?.[0]?.name}
                    end={formatTime(panchang.nakshatra?.[0]?.end)}
                  />

                  <PanchangRow
                    label="Yoga"
                    value={panchang.yoga?.[0]?.name}
                    end={formatTime(panchang.yoga?.[0]?.end)}
                  />

                  <PanchangRow
                    label="Karana"
                    value={panchang.karana?.[0]?.name}
                    end={formatTime(panchang.karana?.[0]?.end)}
                  />

                </div>
                {/* Rahu Kalam */}
{rahuKalam && (
  <div className="mt-2 bg-[#0b0905] border border-[#6b4a1b] rounded-xl p-5 ">

    <p className="text-gray-500 text-sm mb-2">
      Rahu Kalam
    </p>

    <div className="flex items-center justify-between">

      <p className="text-white text-lg font-semibold">
        {formatTime(rahuStart)}
      </p>

      <span className="text-[#D4AF37]">
        to
      </span>

      <p className="text-white text-lg font-semibold">
        {formatTime(rahuEnd)}
      </p>

    </div>

  </div>
)}

                {/* Sun / Moon */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 border border-[#6b4a1b] rounded-xl">

                  <TimeCard
                    icon={<Sun size={20} />}
                    label="Sunrise"
                    value={formatTime(panchang.sunrise)}
                  />

                  <TimeCard
                    icon={<Sun size={20} />}
                    label="Sunset"
                    value={formatTime(panchang.sunset)}
                  />

                  <TimeCard
                    icon={<Moon size={20} />}
                    label="Moonrise"
                    value={formatTime(panchang.moonrise)}
                  />

                  <TimeCard
                    icon={<Moon size={20} />}
                    label="Moonset"
                    value={formatTime(panchang.moonset)}
                  />

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}


function PanchangRow({ label, value, end }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/5 p-4">

      <div>
        <p className="text-gray-500 text-sm mb-1">
          {label}
        </p>

        <p className="text-white text-lg font-medium">
          {value || "-"}
        </p>
      </div>

      {end && (
        <div className="text-right">
          <p className="text-gray-500 text-xs">
            Until
          </p>

          <p className="text-[#D4AF37] text-sm">
            {end}
          </p>
        </div>
      )}

    </div>
  );
}


function TimeCard({ icon, label, value }) {
  return (
    <div className="bg-[#0b0905] border border-[#D4AF37]/10 rounded-xl p-4">

      <div className="text-[#D4AF37] mb-3">
        {icon}
      </div>

      <p className="text-gray-500 text-xs mb-1">
        {label}
      </p>

      <p className="text-white font-semibold">
        {value}
      </p>

    </div>
  );
}