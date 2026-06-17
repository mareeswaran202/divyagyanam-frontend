"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link
            href="/"
            className="text-2xl font-bold text-orange-600"
          >
            DivyaGyanam
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <Link href="#" className="hover:text-orange-600">
              About Us
            </Link>
            <Link href="#" className="hover:text-orange-600">
              Events
            </Link>
            <Link href="#" className="hover:text-orange-600">
              Blog
            </Link>
            <Link href="#" className="hover:text-orange-600">
              Contact Us
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