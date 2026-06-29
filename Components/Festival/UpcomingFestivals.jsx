"use client";
import { Star } from "lucide-react";
import Link from "next/link";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
export default function UpcomingFestivals({
  events,
  currentMonth,
}) {

  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  const monthEvents = events
    .filter((event) => {
      const eventDate = new Date(event.EventDate);

      return (
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      );
    })
    .sort(
      (a, b) =>
        new Date(a.EventDate) -
        new Date(b.EventDate)
    );

  return (

    <div className="bg-[#F2FBE8] rounded-xl shadow p-6 mt-2">

      <div className="flex justify-between items-center mb-5">

        <h3 className="text-xl font-bold">
          Upcoming Festivals
        </h3>

        <span className="text-sm text-gray-500">
          {monthEvents.length} Festivals
        </span>

      </div>

      <div className="space-y-4">

        {monthEvents.length === 0 ? (

          <p className="text-gray-500">
            No festivals this month.
          </p>

        ) : (

          monthEvents.map((festival) => (

            <div
              key={festival.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div className="flex items-center gap-3">
                <Star size={12} color="#396098" strokeWidth={4} />

                <div>
                  <h4 className="font-semibold">
                    {festival.EventName}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {formatDate(festival.EventDate)}
                  </p>
                </div>
              </div>
            </div>

          ))

        )}

      </div>
      <Link
  href="/festivals/list"
  className="text-sm text-primary-gold font-semibold hover:underline mt-3" style={{display:'block'}}
>
  View All →
</Link>
    </div>

  );

}