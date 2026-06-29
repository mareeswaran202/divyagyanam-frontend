"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRouter } from "next/navigation";
import "./FestivalCalendar.css";

export default function CalendarView({ events, onMonthChange }) {
  const router = useRouter();
  const getEventColor = (type) => {
  switch (type) {
    case "Shiva":
      return "#8B5CF6";

    case "Vishnu":
      return "#22C55E";

    case "Murugan":
      return "#3B82F6";

    case "Amman":
      return "#EC4899";

    case "Ganesh":
      return "#F97316";

    default:
      return "#F59E0B";
  }
};

const getTextColor = (type) => {
  switch (type) {
    case "Shiva":
      return "#6D28D9";

    case "Vishnu":
      return "#15803D";

    case "Murugan":
      return "#2563EB";

    case "Amman":
      return "#DB2777";

    case "Ganesh":
      return "#EA580C";

    default:
      return "#374151";
  }
};

const calendarEvents = events.map((event) => ({
  title: event.EventName,
  date: event.EventDate,
  backgroundColor: getEventColor(event.EventType),
  borderColor: getEventColor(event.EventType),
  textColor:  getTextColor(event.EventType),
  extendedProps: {
    event,
  },
}));

 const handleEventClick = (info) => {
  console.log("Event clicked:", info.event.extendedProps.event);
  const event = info.event.extendedProps.event;

  router.push(`/festivals/${event.Slug}`);
};

  return (
    <div className="festival-calendar-wrapper">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={calendarEvents}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        datesSet={(info) => {
        onMonthChange(info.view.currentStart);
    }}
      />
    </div>
  );
}