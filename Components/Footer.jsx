import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              DivyaGyanam
            </h3>

            <p className="text-gray-300 leading-relaxed">
              DivyaGyanam is a spiritual platform dedicated to
              sharing temple information, devotional content,
              live darshan updates, and sacred traditions from
              across India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-orange-400">
                  Events
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-orange-400">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-orange-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-300">
              DivyaGyanam Spiritual Centre
            </p>

            <p className="text-gray-300">
              Chennai, Tamil Nadu, India
            </p>

            <p className="text-gray-300 mt-2">
              Email: info@divyagyanam.com
            </p>

            <p className="text-gray-300">
              Phone: +91 98765 43210
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} DivyaGyanam. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}