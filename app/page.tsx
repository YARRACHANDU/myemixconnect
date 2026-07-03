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
      },
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
        return isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0";
      case "down":
        return isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0";
      case "left":
        return isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-12 opacity-0";
      case "right":
        return isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-12 opacity-0";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-exim-green selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION WITH BACKGROUND BANNER */}
      <section className="relative bg-[#f2f6fa] overflow-hidden">
        {/* Floating ambient particles (desktop only) */}
        <div className="hidden lg:block pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute w-3 h-3 rounded-full bg-exim-green/30 animate-particle1"
            style={{ top: "20%", left: "38%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-exim-blue/25 animate-particle2"
            style={{ top: "60%", left: "42%" }}
          />
          <div
            className="absolute w-4 h-4 rounded-full bg-exim-green/20 animate-particle3"
            style={{ top: "75%", left: "30%" }}
          />
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-exim-orange/20 animate-particle1"
            style={{ top: "35%", left: "25%", animationDelay: "3s" }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-exim-green/40 animate-particle2"
            style={{ top: "50%", left: "48%", animationDelay: "5s" }}
          />
        </div>

        {/* Mobile Layout (lg:hidden) */}
        <div className="block lg:hidden">
          {/* Text content first */}
          <div className="px-6 py-8 flex flex-col bg-gradient-to-b from-[#eef4fa] to-white animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-none">
              Go Digital. <br />
              <span
                className="text-exim-green"
                style={{
                  background:
                    "linear-gradient(90deg, #139c5e, #0e7c4b, #27c97e, #139c5e)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Grow Global.
              </span>
            </h1>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed font-semibold">
              A smart digital platform for Indian Exporters, Buyers and Freight
              Forwarders to connect, quote, collaborate and grow business
              faster.
            </p>
            <p className="text-exim-green font-bold text-sm mt-2">
              Together, we can make wonders in global trade.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="#download"
                className="flex items-center gap-2 bg-exim-navy hover:bg-exim-navy-dark text-white text-xs font-bold py-2.5 px-4.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-98 duration-200 animate-glow-pulse"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download Now</span>
              </a>
              <button
                onClick={() => alert("Watch Video feature is coming soon!")}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-exim-navy border-2 border-exim-navy/20 text-xs font-bold py-2 px-4 rounded-full shadow-sm transition-all hover:scale-105 active:scale-98 duration-200"
              >
                <svg
                  className="w-4 h-4 text-exim-blue fill-exim-blue"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Video</span>
              </button>
            </div>

            {/* App Badges */}
            <div className="flex items-center gap-3 mt-5 pt-3 border-t border-gray-200/50 w-full">
              <a
                href="#"
                className="hover:opacity-90 transition-all hover:scale-103 duration-200 animate-scale-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg className="w-4 h-4" viewBox="0 0 96.3 96.3">
                    <path
                      fill="#EA4335"
                      d="M46.884 45.762 10.337 84.18a.745.745 0 0 0 .006.023c1.121 4.171 4.967 7.243 9.534 7.243a9.918 9.918 0 0 0 5.008-1.346l.116-.069 41.138-23.509-19.255-20.76z"
                    />
                    <path
                      fill="#FBBC04"
                      d="m83.858 39.22-.035-.023-17.76-10.198-20.009 17.635 20.079 19.883L83.8 56.422c3.097-1.657 5.2-4.89 5.2-8.618 0-3.705-2.074-6.921-5.142-8.584z"
                    />
                    <path
                      fill="#4285F4"
                      d="M10.335 11.264A9.54 9.54 0 0 0 10 13.78v67.886c.036.974.115 1.715.337 2.514l37.804-37.434-37.806-35.482z"
                    />
                    <path
                      fill="#34A853"
                      d="m47.154 47.723 18.915-18.73L24.978 5.398A9.962 9.962 0 0 0 19.877 4c-4.567 0-8.419 3.078-9.54 7.255l-.002.01 36.819 36.458z"
                    />
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
              <a
                href="#"
                className="hover:opacity-90 transition-all hover:scale-103 duration-200 animate-scale-in"
                style={{ animationDelay: "0.7s" }}
              >
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
            </div>
          </div>
          {/* Banner image below */}
          <div className="w-full relative aspect-[16/10] animate-fade-in">
            <Image
              src="/banner.png"
              alt="MY EXIM Connect Banner"
              fill
              priority
              className="object-cover object-right"
            />
          </div>
        </div>

        {/* Desktop Layout (lg:block hidden) */}
        <div
          className="hidden lg:block relative w-full h-[calc(100vh-80px)] min-h-[550px] max-h-[700px] bg-[#f2f6fa]"
          style={{
            backgroundImage: "url('/banner.png?v=2')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12">
              <div className="col-span-5 xl:col-span-4 flex flex-col justify-center animate-fade-in-up">
                <h1 className="text-4xl lg:text-[46px] xl:text-[52px] font-black tracking-tight text-gray-900 leading-none">
                  Go Digital. <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #139c5e, #0e7c4b, #27c97e, #139c5e)",
                      backgroundSize: "300% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "shimmer 3s linear infinite",
                    }}
                  >
                    Grow Global.
                  </span>
                </h1>

                <p className="text-gray-600 text-xs lg:text-sm mt-4 leading-relaxed font-semibold">
                  A smart digital platform for Indian Exporters, Buyers and
                  Freight Forwarders to connect, quote, collaborate and grow
                  business faster.
                </p>
                <p
                  className="text-exim-green font-bold text-xs lg:text-sm mt-3 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Together, we can make wonders in global trade.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="#download"
                    className="flex items-center gap-2 bg-exim-navy hover:bg-exim-navy-dark text-white text-[11px] lg:text-xs font-bold py-3 px-5 rounded-full shadow-md transition-all hover:scale-105 active:scale-98 duration-200 animate-glow-pulse"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download Now</span>
                  </a>
                  <button
                    onClick={() => alert("Watch Video feature is coming soon!")}
                    className="flex items-center gap-2 bg-white hover:bg-gray-50 text-exim-navy border-2 border-exim-navy/20 text-[11px] lg:text-xs font-bold py-2.5 px-5 rounded-full shadow-sm transition-all hover:scale-105 active:scale-98 duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-exim-blue fill-exim-blue"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Watch Video</span>
                  </button>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200/50 w-full max-w-sm">
                  <a
                    href="#"
                    className="hover:opacity-90 transition-all hover:scale-105 duration-200 animate-scale-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                      <svg className="w-4.5 h-4.5" viewBox="0 0 96.3 96.3">
                        <path
                          fill="#EA4335"
                          d="M46.884 45.762 10.337 84.18a.745.745 0 0 0 .006.023c1.121 4.171 4.967 7.243 9.534 7.243a9.918 9.918 0 0 0 5.008-1.346l.116-.069 41.138-23.509-19.255-20.76z"
                        />
                        <path
                          fill="#FBBC04"
                          d="m83.858 39.22-.035-.023-17.76-10.198-20.009 17.635 20.079 19.883L83.8 56.422c3.097-1.657 5.2-4.89 5.2-8.618 0-3.705-2.074-6.921-5.142-8.584z"
                        />
                        <path
                          fill="#4285F4"
                          d="M10.335 11.264A9.54 9.54 0 0 0 10 13.78v67.886c.036.974.115 1.715.337 2.514l37.804-37.434-37.806-35.482z"
                        />
                        <path
                          fill="#34A853"
                          d="m47.154 47.723 18.915-18.73L24.978 5.398A9.962 9.962 0 0 0 19.877 4c-4.567 0-8.419 3.078-9.54 7.255l-.002.01 36.819 36.458z"
                        />
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
                  <a
                    href="#"
                    className="hover:opacity-90 transition-all hover:scale-105 duration-200 animate-scale-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                      <svg
                        className="w-4.5 h-4.5 text-white"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO CAN USE THIS PLATFORM SECTION */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Who Can Use This Platform?
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Exporters Card */}
            <ScrollReveal delay={0} className="h-full">
              <div className="group h-full relative rounded-3xl bg-[#f3f9f6] border border-green-50/50 p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_12px_30px_rgba(19,156,94,0.15)] hover:border-exim-green/30 hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-exim-green flex items-center justify-center shadow-md shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-exim-green mt-4">
                    Exporters
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed text-xs font-semibold">
                    Showcase your products to global buyers, add your trusted
                    freight forwarders and receive personalized freight rates
                    for your Destination Ports from your Forwarders Only
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/exporters"
                    className="block w-full py-2.5 px-5 rounded-full bg-exim-green hover:bg-[#0e7c4b] text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-md text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Freight Forwarders Card */}
            <ScrollReveal delay={150} className="h-full">
              <div className="group h-full relative rounded-3xl bg-[#f0f5fa] border border-blue-50/50 p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_12px_30px_rgba(0,34,68,0.15)] hover:border-exim-navy/30 hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-exim-navy flex items-center justify-center shadow-md shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-exim-navy mt-4">
                    Freight Forwarders
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed text-xs font-semibold">
                    Manage your exporter network, quote customized freight rates
                    and publish common freight rates for other exporters
                    searching globally.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/freight-forwarders"
                    className="block w-full py-2.5 px-5 rounded-full bg-exim-navy hover:bg-exim-navy-dark text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-md text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Buyers Card */}
            <ScrollReveal delay={300} className="h-full">
              <div className="group h-full relative rounded-3xl bg-[#fdf8f4] border border-orange-50/50 p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-[0_12px_30px_rgba(242,122,26,0.15)] hover:border-exim-orange/30 hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-exim-orange flex items-center justify-center shadow-md shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold text-exim-orange mt-4">
                    Buyers
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed text-xs font-semibold">
                    Discover verified exporters, request quotations, add your
                    trusted exporters and connect with forwarders for freight
                    rate enquiries.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/buyers"
                    className="block w-full py-2.5 px-5 rounded-full bg-exim-orange hover:bg-[#dd6408] text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-md text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. COMPRESSED POWERFUL FEATURES SECTION */}
      <section
        id="features"
        className="py-16 bg-gray-50 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Powerful Features for Your Business
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Exporters Features Column */}
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-white h-full rounded-3xl border border-gray-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-exim-green/20 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-extrabold text-exim-green border-b border-gray-100 pb-3">
                    For Exporters
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Create business profile",
                      "Showcase products to buyers",
                      "Add trusted freight forwarders",
                      "Add shipping routes",
                      "Receive personalized freight rates",
                      "Search global freight rates",
                      "Connect with forwarders directly",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-semibold text-gray-700"
                      >
                        <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compressed Illustration */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-center overflow-hidden">
                  <Image
                    src="/boxes.png"
                    alt="Exporter Boxes"
                    width={180}
                    height={110}
                    className="object-contain hover:scale-105 transition-transform duration-300 animate-float"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Freight Forwarders Features Column */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white h-full rounded-3xl border border-gray-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-exim-navy/20 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-extrabold text-exim-navy border-b border-gray-100 pb-3">
                    For Freight Forwarders
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      "View assigned exporters",
                      "Quote personalized rates",
                      "Publish common freight rates",
                      "Receive enquiries from exporters and buyers",
                      "Expand business visibility",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-semibold text-gray-700"
                      >
                        <div className="w-4.5 h-4.5 rounded-full bg-blue-100 text-exim-navy flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compressed Lorry */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-center overflow-hidden">
                  <Image
                    src="/lorry.png"
                    alt="Freight Forwarder Lorry"
                    width={180}
                    height={110}
                    className="object-contain hover:scale-105 transition-transform duration-300 animate-float"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Buyers Features Column */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white h-full rounded-3xl border border-gray-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-exim-orange/20 transition-all duration-300">
                <div>
                  <h3 className="text-lg font-extrabold text-exim-orange border-b border-gray-100 pb-3">
                    For Buyers
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      "View exporter profiles",
                      "Request product quotations",
                      "Add trusted exporters",
                      "Search freight rates",
                      "Connect with exporters and forwarders",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-semibold text-gray-700"
                      >
                        <div className="w-4.5 h-4.5 rounded-full bg-orange-100 text-exim-orange flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compressed Push Cart */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-center overflow-hidden">
                  <Image
                    src="/push.png"
                    alt="Buyer Shopping Cart"
                    width={180}
                    height={110}
                    className="object-contain hover:scale-105 transition-transform duration-300 animate-float"
                    style={{ animationDelay: "3s" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
          </ScrollReveal>

          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <ScrollReveal
              delay={0}
              className="flex flex-col items-center text-center max-w-[200px] relative z-10 group"
            >
              <div className="w-16 h-16 rounded-full border-4 border-exim-green bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#0e7c4b] group-hover:shadow-green-100 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-exim-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-gray-900 mt-4">
                1. Sign Up
              </h3>
              <p className="text-gray-500 text-[11px] font-semibold mt-1 px-1 leading-normal">
                Register as Exporter, Forwarder or Buyer
              </p>
            </ScrollReveal>

            {/* Arrow 1 to 2 */}
            <ScrollReveal
              delay={100}
              direction="none"
              className="hidden md:flex items-center justify-center flex-1 h-16 relative"
            >
              <svg
                className="w-6 h-6 text-gray-300 absolute top-5 animate-pulse-subtle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal
              delay={200}
              className="flex flex-col items-center text-center max-w-[200px] relative z-10 group"
            >
              <div className="w-16 h-16 rounded-full border-4 border-exim-blue bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-blue-700 group-hover:shadow-blue-100 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-exim-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-gray-900 mt-4">
                2. Create Profile
              </h3>
              <p className="text-gray-500 text-[11px] font-semibold mt-1 px-1 leading-normal">
                Complete your business profile and preferences
              </p>
            </ScrollReveal>

            {/* Arrow 2 to 3 */}
            <ScrollReveal
              delay={300}
              direction="none"
              className="hidden md:flex items-center justify-center flex-1 h-16 relative"
            >
              <svg
                className="w-6 h-6 text-gray-300 absolute top-5 animate-pulse-subtle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal
              delay={400}
              className="flex flex-col items-center text-center max-w-[200px] relative z-10 group"
            >
              <div className="w-16 h-16 rounded-full border-4 border-exim-orange bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#dd6408] group-hover:shadow-orange-100 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-exim-orange"
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
              </div>
              <h3 className="text-base font-extrabold text-gray-900 mt-4">
                3. Connect & Search
              </h3>
              <p className="text-gray-500 text-[11px] font-semibold mt-1 px-1 leading-normal">
                Find buyers, exporters, forwarders and rates
              </p>
            </ScrollReveal>

            {/* Arrow 3 to 4 */}
            <ScrollReveal
              delay={500}
              direction="none"
              className="hidden md:flex items-center justify-center flex-1 h-16 relative"
            >
              <svg
                className="w-6 h-6 text-gray-300 absolute top-5 animate-pulse-subtle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal
              delay={600}
              className="flex flex-col items-center text-center max-w-[200px] relative z-10 group"
            >
              <div className="w-16 h-16 rounded-full border-4 border-exim-green bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#0e7c4b] group-hover:shadow-green-100 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-exim-green"
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
              </div>
              <h3 className="text-base font-extrabold text-gray-900 mt-4">
                4. Quote & Collaborate
              </h3>
              <p className="text-gray-500 text-[11px] font-semibold mt-1 px-1 leading-normal">
                Send/receive quotations and grow your business
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION - COMPRESSED */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-exim-navy rounded-[32px] overflow-hidden shadow-xl relative">
            <div className="absolute right-0 top-0 w-80 h-80 bg-exim-blue/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-exim-green/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center p-8 sm:p-12 md:p-16 relative z-10">
              {/* White Card Plan */}
              <ScrollReveal direction="left" className="w-full">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-white/20 transform hover:scale-[1.01] transition-transform duration-300 relative pt-12">
                  {/* Top Circle overlapping */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-exim-green flex items-center justify-center border-4 border-exim-navy shadow-md">
                    <svg
                      className="w-7 h-7 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h2a1 1 0 011 1v3a1 1 0 01-1 1h-1v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm2.5 0a1 1 0 100-2 1 1 0 000 2zM12.5 5a1 1 0 100-2 1 1 0 000 2zM4 7v2h12V7H4zm2 4v7h3.5v-7H6zm5.5 0v7H14v-7h-2.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h4 className="text-exim-green font-black text-center text-sm sm:text-base tracking-wider uppercase">
                    ITS ABSOLUTELY FREE TO USE!
                  </h4>
                  <p className="text-gray-800 font-extrabold text-xs sm:text-sm text-center mt-1.5">
                    For All Users
                  </p>

                  <div className="flex flex-col items-center mt-6">
                    <ul className="space-y-3.5 text-left">
                      {[
                        "No Registration Fees",
                        "No Subscription Fees",
                        "No Hidden Charges",
                      ].map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-gray-800"
                        >
                          <div className="w-4.5 h-4.5 rounded-full bg-exim-green text-white flex items-center justify-center shrink-0 shadow-sm">
                            <svg
                              className="w-2.5 h-2.5"
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
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Vertical Divider on desktop */}
              <div className="hidden lg:block w-px h-32 bg-white/15"></div>

              {/* Dark right column */}
              <ScrollReveal
                direction="right"
                className="text-white flex flex-col justify-center"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-exim-green leading-tight">
                  Absolutely Free to Use!
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm font-bold mt-1.5">
                  No subscription. No hidden charges.
                </p>

                <p className="mt-8 text-white text-base sm:text-lg lg:text-xl font-bold leading-relaxed max-w-md">
                  A completely free platform to help your MY EXIM business grow
                  globally.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOWNLOAD APP SECTION - COMPRESSED */}
      <section
        id="download"
        className="py-16 bg-gray-50 border-t border-gray-100"
      >
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
            Download the App
          </h2>
          <p className="text-gray-500 mt-2 font-semibold text-sm sm:text-base">
            Take your MY EXIM business anywhere, anytime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#"
              className="hover:scale-105 active:scale-98 transition-transform duration-200"
            >
              <div className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 border border-gray-800 shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 96.3 96.3">
                  <path
                    fill="#EA4335"
                    d="M46.884 45.762 10.337 84.18a.745.745 0 0 0 .006.023c1.121 4.171 4.967 7.243 9.534 7.243a9.918 9.918 0 0 0 5.008-1.346l.116-.069 41.138-23.509-19.255-20.76z"
                  />
                  <path
                    fill="#FBBC04"
                    d="m83.858 39.22-.035-.023-17.76-10.198-20.009 17.635 20.079 19.883L83.8 56.422c3.097-1.657 5.2-4.89 5.2-8.618 0-3.705-2.074-6.921-5.142-8.584z"
                  />
                  <path
                    fill="#4285F4"
                    d="M10.335 11.264A9.54 9.54 0 0 0 10 13.78v67.886c.036.974.115 1.715.337 2.514l37.804-37.434-37.806-35.482z"
                  />
                  <path
                    fill="#34A853"
                    d="m47.154 47.723 18.915-18.73L24.978 5.398A9.962 9.962 0 0 0 19.877 4c-4.567 0-8.419 3.078-9.54 7.255l-.002.01 36.819 36.458z"
                  />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                    Get it on
                  </span>
                  <span className="text-xs font-bold leading-tight mt-0.5">
                    Google Play
                  </span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="hover:scale-105 active:scale-98 transition-transform duration-200"
            >
              <div className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 border border-gray-800 shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-gray-400 font-medium leading-none">
                    Download on the
                  </span>
                  <span className="text-xs font-bold leading-tight mt-0.5">
                    App Store
                  </span>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
