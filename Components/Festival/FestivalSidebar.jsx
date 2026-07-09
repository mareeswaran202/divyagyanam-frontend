import Image from "next/image";
import Link from "next/link";

export default function FestivalSidebar({ festivals }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Related Festivals
      </h2>

      <div className="space-y-5">

        {festivals.map((festival) => (
          <Link
            key={festival.id}
            href={`/festival/${festival.Slug}`}
            className="block border rounded-xl overflow-hidden hover:shadow-md transition"
          >
           <img
  src={
    festival.Banner?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${festival.Banner.url}`
      : "/images/default-festival.jpg"
  }
  alt={festival.EventName}
  width={400}
  height={220}
  className="w-full h-40 object-cover"
/>

            <div className="p-4">

              <p className="text-xs text-purple-600 font-semibold">
                {festival.EventDate}
              </p>

              <h3 className="font-bold text-lg mt-1">
                {festival.EventName}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {festival.ShortDescription}
              </p>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}