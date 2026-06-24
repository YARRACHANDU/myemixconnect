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

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-exim-green selection:text-white overflow-x-hidden">
      {/* ABOUT US HERO SECTION WITH DIAGONAL SPLIT */}
      <section className="relative overflow-hidden min-h-[350px] lg:min-h-[420px] flex items-center bg-[#051a2e]">
        {/* Ship Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ship1.png"
            alt="Cargo Ship"
            fill
            priority
            className="object-cover object-[right_center] animate-fade-in"
          />
          {/* Mobile Overlay Dark Tint */}
          <div className="absolute inset-0 bg-[#051a2e]/75 lg:hidden"></div>
        </div>

        {/* Diagonal Slanted Overlay for Content */}
        <div className="absolute inset-0 z-10 hidden lg:block bg-[#051a2e] [clip-path:polygon(0_0,56%_0,44%_100%,0_100%)]"></div>

        {/* Content container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="w-full lg:w-[42%] text-white animate-fade-in-up">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-gray-300">
              <a href="/" className="text-exim-green hover:underline">
                Home
              </a>
              <span className="text-gray-400">&gt;</span>
              <span className="text-white">About Us</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white mt-3 tracking-tight">
              About Us
            </h1>

            {/* Tagline */}
            <h2 className="text-exim-green font-bold text-lg sm:text-xl lg:text-[22px] mt-4 leading-tight">
              Connecting Indian Businesses to Global Opportunities.
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-xs sm:text-sm mt-4 leading-relaxed font-semibold">
              MY EXIM Connect is a digital platform created to empower Indian
              Exporters, Buyers, and Freight Forwarders by bringing them
              together in a smart, simple, and transparent ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT OUR PLATFORM SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Hands shaking image */}
          <ScrollReveal
            direction="left"
            className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] group"
          >
            <Image
              src="/hands.png"
              alt="Business handshake"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </ScrollReveal>

          {/* About our platform text */}
          <ScrollReveal direction="right" className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy flex flex-col items-start">
              About Our Platform
              <span className="w-12 h-0.5 bg-exim-green mt-2 rounded-full"></span>
            </h2>

            <div className="mt-4 space-y-3 text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
              <p>
                MY EXIM Connect is an all-in-one digital platform designed for
                Indian Exporters, Buyers, and Freight Forwarders.
              </p>
              <p>
                We help businesses showcase products, find trusted partners,
                request quotations, compare freight rates, and grow together in
                the global market.
              </p>
              <p>
                Our platform brings transparency, speed, and efficiency to your
                MY EXIM operations—right at your fingertips.
              </p>
            </div>

            {/* Grid checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              {/* One Platform */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-exim-green flex items-center justify-center shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-gray-700 mt-1.5">
                  One Platform
                </span>
              </div>

              {/* Stronger Connections */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-exim-blue flex items-center justify-center shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-gray-700 mt-1.5">
                  Stronger Connections
                </span>
              </div>

              {/* Trusted Network */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-exim-orange flex items-center justify-center shadow-sm">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <span className="text-[10px] font-bold text-gray-700 mt-1.5">
                  Trusted Network
                </span>
              </div>

              {/* Business Growth */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-gray-700 mt-1.5">
                  Business Growth
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision card */}
          <ScrollReveal delay={0} className="h-full">
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-exim-navy">
                  Our Vision
                </h3>
                <p className="text-gray-600 mt-2 text-xs font-semibold leading-relaxed">
                  To become the most trusted digital platform for the global
                  EXIM community, enabling seamless connections, transparent
                  trade, and limitless growth opportunities.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission card */}
          <ScrollReveal delay={150} className="h-full">
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-full bg-[#f0f5fa] text-exim-blue flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    d="M18.364 5.636l-3.536 3.536m0 0A5 5 0 1110.122 10.12l3.536-3.536m0-0.002a5 5 0 116.364 6.364M12 2A10 10 0 1022 12A10 10 0 0012 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-exim-navy">
                  Our Mission
                </h3>
                <p className="text-gray-600 mt-2 text-xs font-semibold leading-relaxed">
                  To simplify international trade for Indian businesses through
                  technology, collaboration, and access to the right information
                  at the right time.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE EXIM CONNECT */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
                Why Choose MY EXIM Connect?
              </h2>
              <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 w-full mx-auto">
            {/* Card 1 */}
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-subtle">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Built for MY EXIM Community
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  A platform specially designed for Exporters, Buyers & Freight
                  Forwarders.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Easy & Convenient
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  Access everything you need on Android and iOS – anytime,
                  anywhere.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 7v3l2 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Real-time Information
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  Get up-to-date freight rates, quotations and business updates.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Secure & Reliable
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  Your business data and information are safe with us.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 5 */}
            <ScrollReveal delay={400} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Global Opportunities
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  Connect with global markets and unlock new opportunities.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 6 */}
            <ScrollReveal delay={500} className="h-full">
              <div className="bg-white rounded-3xl border border-gray-200/60 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-full bg-green-50 text-exim-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                      d="M18.421 16.584a6 6 0 00-12.842 0m12.842 0a2.25 2.25 0 11-2.25-2.25c.17 0 .337.019.497.056L18.421 16.584zm-12.842 0a2.25 2.25 0 112.25-2.25c-.17 0-.337.019-.497.056L5.579 16.584zm11.594-5.07c.04.5.06 1.019.06 1.545a8.978 8.978 0 01-1.402 4.851M7.102 11.51a8.978 8.978 0 00-1.402 4.85M12 2C7.029 2 3 6.029 3 11c0 .526.02 1.046.06 1.546M12 2c4.971 0 9 4.029 9 9 0 .526-.02 1.046-.06 1.546"
                    />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-exim-navy mt-3 leading-tight">
                  Dedicated Support
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-2 px-0.5 leading-snug">
                  We are here to help you at every step of your journey.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR GROWING COMMUNITY STATS */}
      <section className="py-10 bg-[#061e35] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-lg sm:text-xl font-extrabold text-white flex flex-col items-center">
                Our Growing Community
                <span className="w-10 h-0.5 bg-exim-green mt-1.5 rounded-full"></span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
            {/* Exporters */}
            <ScrollReveal delay={0} className="h-full">
              <div className="flex items-center gap-4 justify-center md:justify-start p-3 md:pl-8">
                <div className="w-10 h-10 rounded-full bg-exim-green/10 text-exim-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
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
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-exim-green leading-none">
                    100+
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                    Exporters
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Freight Forwarders */}
            <ScrollReveal delay={100} className="h-full">
              <div className="flex items-center gap-4 justify-center md:justify-start p-3 md:pl-8 pt-6 md:pt-3">
                <div className="w-10 h-10 rounded-full bg-exim-green/10 text-exim-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
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
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-exim-green leading-none">
                    150+
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                    Forwarders
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Buyers */}
            <ScrollReveal delay={200} className="h-full">
              <div className="flex items-center gap-4 justify-center md:justify-start p-3 md:pl-8 pt-6 md:pt-3">
                <div className="w-10 h-10 rounded-full bg-exim-green/10 text-exim-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-exim-green leading-none">
                    50+
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                    Buyers
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Countries Connected */}
            <ScrollReveal delay={300} className="h-full">
              <div className="flex items-center gap-4 justify-center md:justify-start p-3 md:pl-8 pt-6 md:pt-3">
                <div className="w-10 h-10 rounded-full bg-exim-green/10 text-exim-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-exim-green leading-none">
                    10+
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                    Countries
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LET'S GROW TOGETHER - CARD GRID LAYOUT */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="bg-[#f0f7f3] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center border border-gray-100 shadow-lg">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center p-8 sm:p-12 z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
                Let's Grow Together
              </h2>
              <p className="text-gray-600 mt-3 font-semibold text-xs sm:text-sm leading-relaxed">
                Join MY EXIM Connect today and take your business to global markets
                with confidence.
              </p>
              <div className="mt-6">
                <button className="py-3 px-6 rounded-full bg-exim-green hover:bg-[#0e7c4b] text-white text-xs font-bold transition-all shadow-md hover:scale-105 duration-200">
                  <a href="/app-download"> Let's Start </a>
                </button>
              </div>
            </div>

            {/* Right: 2x2 Image Card Grid - Compact */}
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-2 p-3 sm:p-4">
              {/* Card 1: Air Freight */}
              <div className="group relative rounded-xl overflow-hidden shadow-sm border border-white/60 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 aspect-[16/9]">
                <Image
                  src="/plane.png"
                  alt="Air Freight"
                  fill
                  className="object-cover object-[25%_center] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-white text-[9px] font-bold tracking-wide drop-shadow">
                  ✈ Air Freight
                </span>
              </div>

              {/* Card 2: Road Freight */}
              <div className="group relative rounded-xl overflow-hidden shadow-sm border border-white/60 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 aspect-[16/9]">
                <Image
                  src="/lorry.png"
                  alt="Road Freight"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-white text-[9px] font-bold tracking-wide drop-shadow">
                  🚛 Road Freight
                </span>
              </div>

              {/* Card 3: Sea Freight */}
              <div className="group relative rounded-xl overflow-hidden shadow-sm border border-white/60 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 aspect-[16/9]">
                <Image
                  src="/ship.png"
                  alt="Sea Freight"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-white text-[9px] font-bold tracking-wide drop-shadow">
                  🚢 Sea Freight
                </span>
              </div>

              {/* Card 4: Container Yard */}
              <div className="group relative rounded-xl overflow-hidden shadow-sm border border-white/60 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 aspect-[16/9]">
                <Image
                  src="/yarrd.png"
                  alt="Container Yard"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-2 text-white text-[9px] font-bold tracking-wide drop-shadow">
                  📦 Container Yard
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
