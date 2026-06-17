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

export default function Exporters() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-exim-green selection:text-white pb-16 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH DIAGONAL SPLIT */}
      <section className="relative overflow-hidden min-h-[380px] lg:min-h-[460px] flex items-center bg-white border-b border-gray-100">
        {/* Background Cargo Yard Image (Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block select-none pointer-events-none">
          <Image
            src="/yarrd.png"
            alt="Cargo Yard Exporters Banner"
            fill
            priority
            className="object-cover object-right animate-fade-in"
          />
          {/* Slanted overlay on the left to cover it in white */}
          <div
            className="absolute inset-0 bg-white"
            style={{ clipPath: "polygon(0 0, 53% 0, 42% 100%, 0 100%)" }}
          />
        </div>

        {/* Mobile View Top Image Banner */}
        <div className="w-full lg:hidden relative h-48 sm:h-64 z-0 animate-fade-in">
          <Image
            src="/yarrd.png"
            alt="Cargo Yard Exporters Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-16">
          <div className="w-full lg:w-[48%] flex flex-col justify-center animate-fade-in-up">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4">
              <a href="/" className="text-exim-green hover:underline">
                Home
              </a>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-700">Exporters</span>
            </nav>

            {/* Title & Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-exim-navy tracking-tight leading-tight">
              For Exporters,
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-exim-navy tracking-tight leading-tight">
              Everything You Need
            </h2>
            <h3 className="text-exim-green font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight">
              to Grow Global.
            </h3>

            {/* Description Paragraph */}
            <p className="mt-5 text-gray-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              EXIM Connect provides exporters with the right tools, global
              exposure and reliable connections to expand their business across
              the world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EMPOWERING EXPORTERS AT EVERY STEP */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
              Empowering Exporters at Every Step
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-500 mt-4 font-semibold text-sm sm:text-base leading-relaxed">
              From showcasing your products to getting the best freight rates,
              EXIM Connect helps you manage your export operations in a simple,
              smart and efficient way.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Smartphone mockup */}
          <ScrollReveal direction="left" className="lg:col-span-3 flex justify-center">
            <div className="relative w-[260px] h-[530px] drop-shadow-2xl animate-float">
              <Image
                src="/buyersmobile.png"
                alt="Exporter Dashboard Mobile Screen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1: Showcase Your Products */}
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Showcase Your Products</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Create a powerful business profile and showcase your products to verified global buyers.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Add Trusted Forwarders */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Add Trusted Forwarders</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Add your trusted freight forwarders and build long term business relationships.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Add Shipping Routes */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Add Shipping Routes</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Add your shipping routes and receive personalized freight rates from your forwarders.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4: Get Personalized Rates */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Get Personalized Rates</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Receive competitive and personalized freight rates on your preferred routes.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 5: Global Rate Search */}
            <ScrollReveal delay={400} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Global Rate Search</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Search globally and explore rates published by other verified forwarders.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 6: Direct Communication */}
            <ScrollReveal delay={500} className="h-full">
              <div className="bg-white h-full border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-exim-green text-white flex items-center justify-center mb-4 shadow-md shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm text-exim-navy">Direct Communication</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Connect and communicate directly with your forwarders and buyers anytime.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES FOR EXPORTERS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature List */}
          <ScrollReveal direction="left" className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy leading-tight">
              Key Features for Exporters
            </h2>
            <div className="w-16 h-1 bg-exim-green mt-3 mb-8 rounded-full"></div>

            <ul className="space-y-5">
              {[
                {
                  title: "Powerful Business Profile",
                  desc: "Create your digital identity and build trust with buyers and forwarders.",
                },
                {
                  title: "Product Showcase",
                  desc: "Display your products, categories and certifications to global buyers.",
                },
                {
                  title: "Forwarder Management",
                  desc: "Add, manage and evaluate your trusted freight forwarders.",
                },
                {
                  title: "Route Management",
                  desc: "Create and manage multiple shipping routes as per your needs.",
                },
                {
                  title: "Rate Management",
                  desc: "Receive, compare and manage personalized freight rates easily.",
                },
                {
                  title: "Global Visibility",
                  desc: "Increase your global reach and grow your export opportunities.",
                },
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-exim-navy leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-semibold mt-1 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right Image with quote banner overlay */}
          <ScrollReveal direction="right" className="lg:col-span-6 relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group">
            <Image
              src="/foreignimage.png"
              alt="Businessman analyzing global map on tablet"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />
            {/* Quote banner overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-exim-navy/95 backdrop-blur-sm rounded-[18px] p-5 flex items-center gap-4 border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-[#139c5e]/20 text-[#139c5e] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white text-sm sm:text-base font-extrabold leading-snug">
                Your products have the potential. <br />
                We give you the platform to reach the world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. HOW IT HELPS YOUR EXPORT BUSINESS */}
      <section className="py-16 bg-[#fcfdfe] border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              How It Helps Your Export Business
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-10 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200/70 rounded-[28px] p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Column 1: More Visibility */}
            <ScrollReveal delay={0} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">More Visibility</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Reach more buyers across the globe.
              </p>
            </ScrollReveal>

            {/* Column 2: Better Connections */}
            <ScrollReveal delay={100} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Better Connections</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Build strong relationships with trusted forwarders.
              </p>
            </ScrollReveal>

            {/* Column 3: Competitive Rates */}
            <ScrollReveal delay={200} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Competitive Rates</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Get the best freight rates for your routes.
              </p>
            </ScrollReveal>

            {/* Column 4: Save Time */}
            <ScrollReveal delay={300} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Save Time</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Automate and simplify your export process.
              </p>
            </ScrollReveal>

            {/* Column 5: Grow Business */}
            <ScrollReveal delay={400} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Grow Business</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Focus on your business, we handle the rest.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. READY TO TAKE YOUR EXPORT BUSINESS GLOBAL BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="bg-[#f0f7f3] border border-gray-100 rounded-[24px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-exim-green shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#002244] leading-tight">
                  Ready to take your export business global?
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1.5">
                  Join thousands of exporters who trust EXIM Connect.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <a
                href="#download"
                className="bg-exim-green hover:bg-[#0e7c4b] text-white font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Join Now
              </a>
              <span className="text-[10px] font-bold text-gray-400">
                It's quick and easy!
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
