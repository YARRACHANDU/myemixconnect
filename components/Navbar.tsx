"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isExportersActive = pathname === "/exporters";
  const isFreightActive = pathname === "/freight-forwarders";
  const isBuyersActive = pathname === "/buyers";
  const isPricingActive = pathname === "/pricing";
  const isAppDownloadActive = pathname === "/app-download";
  const isContactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/logo1.png"
            alt="MY EXIM Connect Logo"
            width={220}
            height={88}
            className="h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <a
            href="/"
            className={`${isHomeActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${isAboutActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            About Us
          </a>
          <a
            href="/exporters"
            className={`${isExportersActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Exporters
          </a>
          <a
            href="/freight-forwarders"
            className={`${isFreightActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Freight Forwarders
          </a>
          <a
            href="/buyers"
            className={`${isBuyersActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Buyers
          </a>
          <a
            href="/pricing"
            className={`${isPricingActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Pricing
          </a>
          <a
            href="/app-download"
            className={`${isAppDownloadActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            App Download
          </a>
          <a
            href="/contact"
            className={`${isContactActive ? "text-exim-green after:w-full" : "hover:text-exim-green after:w-0 hover:after:w-full"} relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-exim-green after:transition-all after:duration-200`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 shadow-inner">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isHomeActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isAboutActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            About Us
          </a>
          <a
            href="/exporters"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isExportersActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Exporters
          </a>
          <a
            href="/freight-forwarders"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isFreightActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Freight Forwarders
          </a>
          <a
            href="/buyers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isBuyersActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Buyers
          </a>
          <a
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isPricingActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Pricing
          </a>
          <a
            href="/app-download"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isAppDownloadActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            App Download
          </a>
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 font-semibold ${isContactActive ? "text-exim-green" : "text-gray-700 hover:text-exim-green"}`}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
