"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getDirectionStyle = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0";
      case "down":
        return isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0";
      case "left":
        return isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0";
      case "right":
        return isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0";
      case "none":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getDirectionStyle()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Custom authentic-looking SVG QR Code
const QRCodeSVG = () => (
  <svg
    className="w-16 h-16 text-black shrink-0"
    viewBox="0 0 21 21"
    fill="currentColor"
  >
    {/* Top Left corner finder */}
    <rect x="0" y="0" width="7" height="7" />
    <rect x="1" y="1" width="5" height="5" fill="white" />
    <rect x="2" y="2" width="3" height="3" />

    {/* Top Right corner finder */}
    <rect x="14" y="0" width="7" height="7" />
    <rect x="15" y="1" width="5" height="5" fill="white" />
    <rect x="16" y="2" width="3" height="3" />

    {/* Bottom Left corner finder */}
    <rect x="0" y="14" width="7" height="7" />
    <rect x="1" y="15" width="5" height="5" fill="white" />
    <rect x="2" y="16" width="3" height="3" />

    {/* Alignment marker and data blocks */}
    <rect x="15" y="15" width="2" height="2" />

    <rect x="8" y="2" width="1" height="1" />
    <rect x="10" y="2" width="1" height="1" />
    <rect x="12" y="2" width="1" height="1" />
    <rect x="2" y="8" width="1" height="1" />
    <rect x="2" y="10" width="1" height="1" />
    <rect x="2" y="12" width="1" height="1" />

    <rect x="8" y="8" width="2" height="1" />
    <rect x="8" y="10" width="1" height="2" />
    <rect x="11" y="8" width="2" height="2" />
    <rect x="11" y="11" width="1" height="1" />
    <rect x="8" y="14" width="2" height="2" />
    <rect x="10" y="17" width="2" height="1" />
    <rect x="17" y="8" width="1" height="3" />
    <rect x="15" y="11" width="3" height="1" />
    <rect x="19" y="12" width="1" height="2" />
    <rect x="14" y="18" width="2" height="2" />
    <rect x="18" y="17" width="2" height="1" />
  </svg>
);

export default function AppDownload() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-open-sans selection:bg-exim-green selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        {/* Mobile Layout (lg:hidden) */}
        <div className="block lg:hidden">
          {/* Text content first */}
          <div className="px-6 py-8 flex flex-col bg-gradient-to-b from-[#f8fafc] to-white animate-fade-in-up">
            {/* Tag */}
            <span className="text-exim-green font-bold text-xs tracking-wider uppercase mb-3 block">
              DOWNLOAD THE EXIM CONNECT APP
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-black text-exim-navy tracking-tight leading-tight">
              Your Global Trade Partner, <br />
              <span className="text-exim-green">Now in Your Pocket.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed font-semibold">
              Connect with verified exporters, forwarders and buyers, manage
              inquiries, track shipments and grow your business – anytime,
              anywhere.
            </p>

            {/* Badges */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                      Download on the
                    </span>
                    <span className="text-[10px] font-bold leading-none mt-0.5">
                      App Store
                    </span>
                  </div>
                </div>
              </a>
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                      Get it on
                    </span>
                    <span className="text-[10px] font-bold leading-none mt-0.5">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Banner image below */}
          <div className="w-full relative aspect-[16/10] bg-gradient-to-b from-white to-[#f0f9f4] animate-fade-in overflow-hidden px-4">
            <Image
              src="/mob.png"
              alt="EXIM Connect App Mockups"
              fill
              priority
              className="object-contain scale-[1.05] animate-float"
            />
          </div>

          {/* Features row under image on mobile */}
          <div className="px-6 py-8 grid grid-cols-2 gap-4 border-t border-gray-100 bg-white">
            {[
              {
                title: "Secure & Reliable",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Real-time Updates",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18.7"
                    />
                  </svg>
                ),
              },
              {
                title: "Easy to Use",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                ),
              },
              {
                title: "Save Time",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((feat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-2xl bg-gray-50/50"
              >
                <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center mb-2">
                  {feat.icon}
                </div>
                <span className="text-xs font-bold text-gray-700">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (lg:block hidden) */}
        <div
          className="hidden lg:block relative w-full h-[600px] bg-white animate-fade-in"
          style={{
            backgroundImage: "url('/mob.png')",
            backgroundSize: "contain",
            backgroundPosition: "right 5% center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12">
              <div className="col-span-7 flex flex-col justify-center animate-fade-in-up">
                {/* Tag */}
                <span className="text-exim-green font-bold text-xs tracking-wider uppercase mb-3 block">
                  DOWNLOAD THE EXIM CONNECT APP
                </span>

                {/* Title */}
                <h1 className="text-4xl lg:text-[52px] font-black text-exim-navy tracking-tight leading-tight">
                  Your Global Trade Partner, <br />
                  <span className="text-exim-green">Now in Your Pocket.</span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-5 leading-relaxed font-semibold max-w-xl">
                  Connect with verified exporters, forwarders and buyers, manage
                  inquiries, track shipments and grow your business – anytime,
                  anywhere.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                    <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-gray-800 shadow-md">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                          Download on the
                        </span>
                        <span className="text-[11px] font-bold leading-none mt-0.5">
                          App Store
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                    <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-gray-800 shadow-md">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                          Get it on
                        </span>
                        <span className="text-[11px] font-bold leading-none mt-0.5">
                          Google Play
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Sub-features horizontal row */}
                <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-100 max-w-xl">
                  {[
                    {
                      title: "Secure & Reliable",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Real-time Updates",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18.7"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Easy to Use",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Save Time",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ),
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center mb-2">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-700">
                        {feat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVERYTHING YOU NEED, ALL IN ONE APP */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
              Everything You Need,{" "}
              <span className="text-[#002244] border-b-2 border-exim-green">
                All in One App
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 6 Grid Cards */}
        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Connect",
              desc: "Connect with verified exporters, forwarders and buyers globally.",
              icon: (
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Search & Discover",
              desc: "Find products, suppliers and services with advanced filters.",
              icon: (
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Inquiries & Quotes",
              desc: "Send inquiries and get quotations quickly and easily.",
              icon: (
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
            {
              title: "Shipment Tracking",
              desc: "Track your shipments and stay updated in real-time.",
              icon: (
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
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1m0-4h3m-11 0h3m7.5 0h.5M19 16h1.5a1.5 1.5 0 001.5-1.5v-3.5L18.5 7H14v9h3"
                  />
                </svg>
              ),
            },
            {
              title: "Alerts & Updates",
              desc: "Get instant notifications on inquiries, quotes and shipments.",
              icon: (
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              ),
            },
            {
              title: "Secure & Trusted",
              desc: "Your data is protected with enterprise-grade security.",
              icon: (
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
          ].map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 80} className="h-full">
              <div
                className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-lg text-exim-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. DOWNLOAD WITH QR CODE SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Layout (lg:hidden) */}
          <div className="block lg:hidden bg-[#f4faf7] rounded-[32px] p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-exim-navy leading-tight">
              Download the EXIM Connect App
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 font-semibold">
              Scan the QR code or download from your favorite store.
            </p>

            {/* QR Codes Grid */}
            <div className="grid grid-cols-1 gap-4 mt-6">
              {/* iOS Store */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <QRCodeSVG />
                <div className="flex flex-col gap-2">
                  <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-sm w-36">
                    <svg
                      className="w-4 h-4 text-white shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[6px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                        Download on the
                      </span>
                      <span className="text-[9px] font-bold leading-none mt-0.5">
                        App Store
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-400">
                    For iOS 13.0 and above
                  </span>
                </div>
              </div>

              {/* Google Play */}
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <QRCodeSVG />
                <div className="flex flex-col gap-2">
                  <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-sm w-36">
                    <svg
                      className="w-4 h-4 text-white shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[6px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                        Get it on
                      </span>
                      <span className="text-[9px] font-bold leading-none mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-400">
                    For Android 7.0 and above
                  </span>
                </div>
              </div>
            </div>

            {/* Globe image below */}
            <div className="w-full relative aspect-[1.5] mt-6 bg-transparent">
              <Image
                src="/map.png"
                alt="Globe Map"
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom check banner */}
            <div className="mt-6 w-full bg-white border border-[#e8f5ed] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center shrink-0">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs font-extrabold text-exim-navy">
                Trusted by thousands of users across the globe.
              </span>
            </div>
          </div>

          {/* Desktop Layout (hidden lg:block) */}
          <ScrollReveal>
            <div
              className="hidden lg:block w-full rounded-[32px] bg-[#f4faf7] overflow-hidden relative h-[440px]"
              style={{
                backgroundImage: "url('/map.png')",
                backgroundSize: "contain",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center pl-10 pr-0">
                <div className="max-w-7xl w-full grid grid-cols-12 items-center">
                  <div className="col-span-7 flex flex-col justify-center z-10">
                    <h2 className="text-[32px] font-extrabold text-exim-navy leading-tight">
                      Download the EXIM Connect App
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 font-semibold">
                      Scan the QR code or download from your favorite store.
                    </p>

                    {/* QR Codes Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      {/* iOS Store */}
                      <div className="rounded-2xl p-3 flex items-center gap-4 transition-transform duration-200">
                        <QRCodeSVG />
                        <div className="flex flex-col gap-2">
                          <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-sm w-36">
                            <svg
                              className="w-4.5 h-4.5 text-white shrink-0"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                            </svg>
                            <div className="flex flex-col text-left">
                              <span className="text-[6px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                                Download on the
                              </span>
                              <span className="text-[9px] font-bold leading-none mt-0.5">
                                App Store
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-gray-400">
                            For iOS 13.0 and above
                          </span>
                        </div>
                      </div>

                      {/* Google Play */}
                      <div className="rounded-2xl p-3 flex items-center gap-4 transition-transform duration-200">
                        <QRCodeSVG />
                        <div className="flex flex-col gap-2">
                          <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-sm w-36">
                            <svg
                              className="w-4.5 h-4.5 text-white shrink-0"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                            </svg>
                            <div className="flex flex-col text-left">
                              <span className="text-[6px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                                Get it on
                              </span>
                              <span className="text-[9px] font-bold leading-none mt-0.5">
                                Google Play
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-gray-400">
                            For Android 7.0 and above
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom check banner */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-5.5 h-5.5 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold text-exim-navy">
                        Trusted by thousands of users across the globe.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. WHY USERS LOVE EXIM CONNECT */}
      <section className="py-16 bg-[#fcfdfe]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
              Why Users Love{" "}
              <span className="text-[#002244] border-b-2 border-exim-green">
                EXIM Connect
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials 4 Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Easy to Use",
              quote: "The app is simple, clean and very easy to navigate.",
              author: "Rajiv P., Exporter",
              icon: (
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
                    d="M14 10h4.757a2 2 0 011.91 1.39l1.433 4.779A2 2 0 0120.19 21H7.83a2 2 0 01-1.952-1.567L4.17 11.233A2 2 0 002.217 9H2V7a2 2 0 012-2h4a2 2 0 012 2v2.5M10 14V9.5"
                  />
                </svg>
              ),
            },
            {
              title: "Saves Time",
              quote:
                "I receive inquiries and quotes instantly. It saves so much time.",
              author: "Ananya S., Buyer",
              icon: (
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Reliable Platform",
              quote: "Verified suppliers and secure communication I can trust.",
              author: "Michael D., Importer",
              icon: (
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              title: "Great Support",
              quote: "Customer support is responsive and always helpful.",
              author: "Priya K., Freight Forwarder",
              icon: (
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
              <div
                className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm flex flex-col justify-between hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-base text-exim-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <span className="text-exim-green font-bold text-xs mt-4 block">
                  &mdash; {item.author}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="bg-exim-navy rounded-[28px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            {/* Left Block */}
            <div className="flex items-center gap-6">
              {/* Smartphone download icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0 shadow-inner">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM12 6v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-1.5">
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Take Your Business Global
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold max-w-md">
                  Download the EXIM Connect app today and experience seamless
                  global trade.
                </p>
              </div>
            </div>

            {/* Right badging */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-white/5 text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 hover:border-white/20 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                      Download on the
                    </span>
                    <span className="text-[11px] font-bold leading-none mt-0.5">
                      App Store
                    </span>
                  </div>
                </div>
              </a>
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-white/5 text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 hover:border-white/20 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                      Get it on
                    </span>
                    <span className="text-[11px] font-bold leading-none mt-0.5">
                      Google Play
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
