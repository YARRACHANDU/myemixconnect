import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-exim-navy-dark text-gray-300 pt-10 pb-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Logo & Desc */}
        <div className="lg:col-span-4 flex flex-col">
          <a href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="MY EXIM Connect Logo"
              width={160}
              height={64}
              className="h-24 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm font-semibold">
            A digital platform built for Indian Exporters, Buyers and Freight
            Forwarders to connect, collaborate and grow globally.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {[
              {
                name: "Facebook",
                path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z",
              },
              {
                name: "LinkedIn",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
              },
              {
                name: "Twitter",
                path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
              },
              {
                name: "YouTube",
                path: "M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 hover:border-exim-green hover:text-exim-green flex items-center justify-center transition-colors duration-200"
                aria-label={social.name}
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 flex flex-col">
          <h4 className="text-white font-extrabold text-sm border-b border-gray-800 pb-2">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2 mt-3 text-xs font-semibold text-gray-400">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="/exporters" className="hover:text-white transition-colors">
              Exporters
            </a>
            <a
              href="/freight-forwarders"
              className="hover:text-white transition-colors"
            >
              Freight Forwarders
            </a>
            <a href="/buyers" className="hover:text-white transition-colors">
              Buyers
            </a>
            <a href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a
              href="/app-download"
              className="hover:text-white transition-colors"
            >
              App Download
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Support */}
        <div className="lg:col-span-3 flex flex-col">
          <h4 className="text-white font-extrabold text-sm border-b border-gray-800 pb-2">
            Support
          </h4>
          <nav className="flex flex-col gap-2 mt-3 text-xs font-semibold text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Refund Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Help & Support
            </a>
          </nav>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3 flex flex-col">
          <h4 className="text-white font-extrabold text-sm border-b border-gray-800 pb-2">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 mt-3 text-xs font-semibold text-gray-400">
            <li className="flex items-center gap-3.5">
              <svg
                className="w-4 h-4 text-exim-green shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+919003062532"
                className="hover:text-white transition-colors"
              >
                +91 9003062532
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <svg
                className="w-4 h-4 text-exim-green shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:contactus@myeximbusiness.com"
                className="hover:text-white transition-colors"
              >
                contactus@myeximbusiness.com
              </a>
            </li>
            <li className="flex items-start gap-3.5">
              <svg
                className="w-4 h-4 text-exim-green shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                Ground Floor, Plot No: 221, Door No: 8/8, Elango Street,
                Alwarthirunagar, Chennai, Tamilnadu, India – 600087
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 mt-8 pt-4 text-center text-xs font-semibold text-gray-500">
        <p>© 2024 MY EXIM Connect. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
