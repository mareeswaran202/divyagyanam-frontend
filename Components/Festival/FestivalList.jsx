"use client";

import FestivalCard from "./FestivalCard";

export default function FestivalList({
    festivals,
}) {

    return (

        <section className="py-16 bg-gray-50">

            <div className="container mx-auto px-5">

                <h1 className="text-5xl font-bold text-center mb-12">

                    All Festivals

                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {festivals.map((festival)=>(
                        
                        <FestivalCard
                            key={festival.id}
                            festival={festival}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}
