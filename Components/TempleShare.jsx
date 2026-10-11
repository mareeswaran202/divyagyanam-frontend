
"use client";

import { MessageCircle, Share2 } from "lucide-react";

export default function TempleShare({ templeName, description, slug }) {
  const siteUrl = "https://divyagyanam.com";
  const pageUrl = `${siteUrl}/temple/${encodeURIComponent(slug)}`;

  const shareText = `${templeName}\n${pageUrl}`;

  const facebookUrl =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

  const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      <span className="flex items-center gap-2 text-[#D4AF37] font-medium">
        <Share2 size={18} />
        Share this temple:
      </span>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${templeName} on Facebook`}
        className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2.5 text-white transition hover:bg-[#1464cc]"
      >
        <span className="text-lg font-bold leading-none">f</span>
        Facebook
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${templeName} on WhatsApp`}
        className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-white transition hover:bg-[#1eaf54]"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
