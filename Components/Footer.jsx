import Link from "next/link";

export default function Footer() {
  return (
   <footer className="bg-black border-t border-[#D4AF37] text-white">
  <div className="container mx-auto px-6 py-8">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">

      {/* Company Info */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3">
          <img
            src="/images/dlogo.png"
            alt="DivyaGyanam"
            className="w-20 h-20"
          />

          <div>
            <h3 className="text-3xl text-[#D4AF37] font-serif">
              DivyaGyanam
            </h3>

            <p className="text-sm text-gray-300">
              Discover. Connect. Be Blessed.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-300 leading-6">
          A complete digital platform for temples,
          devotees and travelers across South India and beyond.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="#"><img src="/images/facebook.png" className="w-8" /></a>
          <a href="#"><img src="/images/instagram.png" className="w-8" /></a>
          <a href="#"><img src="/images/youtube.png" className="w-8" /></a>
          <a href="#"><img src="/images/telegram.png" className="w-8" /></a>
          <a href="#"><img src="/images/whatsapp.png" className="w-8" /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-[#D4AF37] uppercase font-semibold mb-4">
          Quick Links
        </h4>

        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/coming-soon">About Us</a></li>
          <li><a href="/coming-soon">Contact Us</a></li>
          <li><a href="/coming-soon">FAQ</a></li>
          <li><a href="/coming-soon">Privacy Policy</a></li>
          <li><a href="/coming-soon">Terms & Conditions</a></li>
          <li><a href="/coming-soon">Refund Policy</a></li>
        </ul>
      </div>

      {/* Popular Links */}
      <div>
        <h4 className="text-[/coming-soonD4AF37] uppercase font-semibold mb-4">
          Popular Links
        </h4>

        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/coming-soon">Temples</a></li>
          <li><a href="/coming-soon">Festivals</a></li>
          <li><a href="/coming-soon">Puja Schedule</a></li>
          <li><a href="/coming-soon">Live Darshan</a></li>
          <li><a href="/coming-soon">Digital Library</a></li>
          <li><a href="/coming-soon">Plan Your Visit</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-[/coming-soonD4AF37] uppercase font-semibold mb-4">
          Support
        </h4>

        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/coming-soon">Help Center</a></li>
          <li><a href="/coming-soon">Suggest a Temple</a></li>
          <li><a href="/coming-soon">Report an Issue</a></li>
          <li><a href="/coming-soon">Careers</a></li>
          <li><a href="/coming-soon">Press & Media</a></li>
        </ul>
      </div>

      {/* App Download */}
      <div>
        <h4 className="text-[/coming-soonD4AF37] uppercase font-semibold mb-4">
          Download Our App
        </h4>

        <div className="space-y-3">
          <img
            src="/images/googleplay.png"
            alt="Google Play"
            className="w-full max-w-[160px]"
          />

          <img
            src="/images/apple.svg"
            alt="App Store"
            className="w-full max-w-[160px]"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-[#D4AF37] uppercase font-semibold mb-4">
          Newsletter
        </h4>

        <p className="text-sm text-gray-300 mb-4">
          Subscribe for updates on festivals,
          live darshan and other news.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded bg-white text-black text-sm"
        />

        <button
          className="w-full mt-3 bg-[#D4AF37] text-black font-medium py-2 rounded"
        >
          Subscribe
        </button>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-[#D4AF37] mt-8 pt-4 text-center text-sm text-gray-300">
      © 2026 DivyaGyanam.com | All Rights Reserved
    </div>

  </div>
</footer>
  );
}