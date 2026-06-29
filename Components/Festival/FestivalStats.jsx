"use client";

import {
  CalendarDays,
  Calendar,
  Clock3,
  Landmark,
  Radio,
} from "lucide-react";

export default function FestivalStats({
  events,
  templeCount = 0,
  liveEvents = 0,
}) {
  const today = new Date();

  const todayString = today.toISOString().split("T")[0];

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const todaysFestival = events.filter(
    (event) => event.EventDate === todayString
  ).length;

  const thisMonth = events.filter((event) => {
    const d = new Date(event.EventDate);

    return (
      d.getMonth() === currentMonth &&
      d.getFullYear() === currentYear
    );
  }).length;

  const upcoming = events.filter(
    (event) => new Date(event.EventDate) >= today
  ).length;

  const cards = [
    {
      title: "Today's Festivals",
      value: todaysFestival,
      icon: CalendarDays,
      bg: "bg-orange-500",
    },
    {
      title: "This Month",
      value: thisMonth,
      icon: Calendar,
      bg: "bg-purple-600",
    },
    {
      title: "Upcoming Events",
      value: upcoming,
      icon: Clock3,
      bg: "bg-blue-600",
    },
    {
      title: "Temples",
      value: templeCount,
      icon: Landmark,
      bg: "bg-green-600",
    },
    {
      title: "Live Events",
      value: liveEvents,
      icon: Radio,
      bg: "bg-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mb-8">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition"
          >
            <div
              className={`${card.bg} w-14 h-14 rounded-full flex items-center justify-center text-white`}
            >
              <Icon size={28} />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                {card.value}
              </h3>

              <p className="text-gray-500 text-sm">
                {card.title}
              </p>
            </div>
          </div>
        );
      })}

    </div>
  );
}