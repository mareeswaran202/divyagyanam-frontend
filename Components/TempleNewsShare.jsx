
"use client";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.94 11.94 0 0 0 5.86 1.49h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.21-3.51-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.19 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24V7.9h-1.51c-1.49 0-1.95.93-1.95 1.88v2.29h3.32l-.53 3.49h-2.79V24C19.61 23.19 24 18.1 24 12.07Z" />
    </svg>
  );
}

export default function TempleNewsShare({ title }) {
  const share = (platform) => {
    const url = window.location.href;
    const shareUrl =
      platform === "whatsapp"
        ? `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`
        : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <span className="mr-1 text-sm font-semibold text-gray-600">
        Share this news:
      </span>

      <button
        type="button"
        onClick={() => share("whatsapp")}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-[#111111] transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
        aria-label="Share news on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </button>

      <button
        type="button"
        onClick={() => share("facebook")}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-[#111111] transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
        aria-label="Share news on Facebook"
      >
        <FacebookIcon />
        Facebook
      </button>
    </div>
  );
}
