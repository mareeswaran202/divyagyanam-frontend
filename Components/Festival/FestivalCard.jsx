"use client";

import Link from "next/link";

export default function FestivalCard({ festival }) {

    return (

        <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">

            <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm mb-4">

                {festival.EventType}

            </span>

            <h2 className="text-2xl font-bold">

                {festival.EventName}

            </h2>

            <p className="text-gray-500 mt-2">

                {festival.EventDate}

            </p>

            <p className="mt-4 line-clamp-3 text-gray-700">

                {festival.Description?.[0]?.children?.[0]?.text}

            </p>

            <Link
                href={`/festivals/${festival.Slug}`}
                className="inline-block mt-6 text-primary-gold font-semibold"
            >

                Read More →

            </Link>

        </div>

    );

}