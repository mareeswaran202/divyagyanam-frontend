"use client";

import { useEffect, useState } from "react";

export default function ComingSoon() {
  const launchDate = new Date("2026-01-01T00:00:00");

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / 1000 / 60) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/gopuram.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl">
 

        <p className="text-primary-gold uppercase tracking-[4px] mb-3">
          Divine Experience Is Arriving
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Coming Soon
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Discover temples, festivals, live darshan,
          devotional media, digital library and spiritual
          experiences across India.
        </p>

        {/* Countdown */}

      

        {/* Email */}

        <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-14 rounded-lg px-5 bg-white text-black"
          />

          <button
            className="bg-primary-gold text-black px-8 rounded-lg font-semibold"
          >
            Notify Me
          </button>

        </div>

      </div>
    </section>
  );
}

 