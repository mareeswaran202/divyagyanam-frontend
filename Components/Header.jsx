"use client";
import { Menu, X } from "lucide-react";
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
            <Link href="/temple-collection" className="text-white">
             Temples
            </Link>
            <Link href="/festivals" className="text-white">
              Festivals
            </Link>
            <Link href="/pooja-schedule" className="text-white">
              Puja Schedule
            </Link>
            <Link href="/daily-calendar" className="text-white">
            Daily Calendar
            </Link>
            <Link href="/live-darshan" className="text-white">
              Live Darshan
            </Link>
            <Link href="/coming-soon" className="text-white">
             Library
            </Link>
             <Link href="/coming-soon" className="text-white">
             Media
            </Link>
            <Link href="/coming-soon" className="text-white">
            Plan Visit
            </Link>
            <Link href="/coming-soon" className="text-white">
            More
            </Link>
          </nav>

         <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white mobilemenu"
>
  {menuOpen ? (
    <X size={30} />
  ) : (
    <Menu size={30} />
  )}
</button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/temple-collection" className="text-white">
             Temples
            </Link>
            <Link href="/coming-soon" className="text-white">
              Festivals
            </Link>
            <Link href="/pooja-schedule" className="text-white">
              Puja Schedule
            </Link>
             <Link href="/daily-calendar" className="text-white">
            Daily Calendar
            </Link>
            <Link href="/live-darshan" className="text-white">
              Live Darshan
            </Link>
            <Link href="/coming-soon" className="text-white">
             Library
            </Link>
             <Link href="/coming-soon" className="text-white">
             Media
            </Link>
            <Link href="/coming-soon" className="text-white">
            Plan Visit
            </Link>
            <Link href="/coming-soon" className="text-white">
            More
            </Link>
             <Link href="/coming-soon" className="text-white">
            Login
            </Link>
             <Link href="/coming-soon" className="text-white">
           Become Member
            </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}