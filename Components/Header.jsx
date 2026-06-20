"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({logoimg}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary-brown shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-4 py-4">

          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
             <img src={logoimg} alt="" className="sitelogo" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white">
             Temples
            </Link>
            <Link href="#" className="text-white">
              Festivals
            </Link>
            <Link href="#" className="text-white">
              Puja Schedule
            </Link>
            <Link href="#" className="text-white">
              Live Darshan
            </Link>
            <Link href="#" className="text-white">
             Library
            </Link>
             <Link href="#" className="text-white">
             Media
            </Link>
            <Link href="#" className="text-white">
            Plan Visit
            </Link>
            <Link href="#" className="text-white">
            More
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Events</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}