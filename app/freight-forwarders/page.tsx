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

export default function FreightForwarders() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-open-sans selection:bg-exim-green selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION (RESPONSIVE) */}
      <section className="relative bg-[#f2f6fa] overflow-hidden">
        {/* Mobile Layout (lg:hidden) */}
        <div className="block lg:hidden">
          {/* Text content first */}
          <div className="px-6 py-8 flex flex-col bg-gradient-to-b from-[#eef4fa] to-white animate-fade-in-up">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4">
              <a href="/" className="text-exim-green hover:underline">
                Home
              </a>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-700">Freight Forwarders</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-black text-exim-navy tracking-tight leading-tight">
              For Freight Forwarders, <br />
              Grow Your Network. <br />
              <span className="text-exim-green">Expand Your Business.</span>
            </h1>
            
            <p className="text-gray-600 text-sm mt-4 leading-relaxed font-semibold">
              EXIM Connect empowers freight forwarders to connect with exporters
              and buyers, share rates, and grow their business globally.
            </p>
          </div>

          {/* Banner image below */}
          <div className="w-full relative aspect-[16/9] bg-white animate-fade-in overflow-hidden">
            <Image 
              src="/contactus.png"
              alt="Cargo ship and container truck at port"
              fill
              priority
              className="object-cover object-right scale-[1.7] origin-right"
            />
          </div>
        </div>

        {/* Desktop Layout (lg:block hidden) */}
        <div 
          className="hidden lg:block relative w-full h-[450px] lg:h-[480px] bg-[#f2f6fa]"
          style={{
            backgroundImage: "url('/contactus.png')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12">
              <div className="col-span-5 flex flex-col justify-center animate-fade-in-up">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <a href="/" className="text-exim-green hover:underline">
                    Home
                  </a>
                  <span className="text-gray-400">&gt;</span>
                  <span className="text-gray-700">Freight Forwarders</span>
                </nav>

                {/* Title */}
                <h1 className="text-4xl lg:text-[42px] font-black text-exim-navy mt-4 tracking-tight leading-tight">
                  For Freight Forwarders, <br />
                  Grow Your Network. <br />
                  <span className="text-exim-green">Expand Your Business.</span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-5 leading-relaxed font-semibold">
                  EXIM Connect empowers freight forwarders to connect with exporters
                  and buyers, share rates, and grow their business globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVERYTHING YOU NEED TO GROW SECTION */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
              Everything You Need to{" "}
              <span className="text-[#002244] border-b-2 border-exim-green">
                Grow as
              </span>{" "}
              a Freight Forwarder
            </h2>
            <p className="text-gray-500 mt-4 font-semibold text-sm sm:text-base">
              Manage your network, share rates, and win more business with EXIM
              Connect.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Smartphone mockup */}
          <ScrollReveal direction="left" className="lg:col-span-4 flex justify-center">
            <div className="relative w-[270px] h-[550px] drop-shadow-2xl animate-float">
              <Image
                src="/buyersmobile.png"
                alt="Forwarder Dashboard Mobile Screen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1: Manage Exporters */}
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                <h3 className="font-bold text-base text-exim-navy">
                  Manage Exporters
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  View and manage your exporters, build strong relationships and
                  grow together.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Quote Personalized Rates */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-exim-navy">
                  Quote Personalized Rates
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Receive rate requests from your exporters and send personalized
                  competitive quotes.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Publish Common Rates */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                <h3 className="font-bold text-base text-exim-navy">
                  Publish Common Rates
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Publish your common freight rates for global routes and get
                  discovered by more exporters.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4: Receive Enquiries */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-exim-navy">
                  Receive Enquiries
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Get enquiries from exporters and buyers looking for freight
                  rates and services.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 5: Grow Your Business */}
            <ScrollReveal delay={400} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-base text-exim-navy">
                  Grow Your Business
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Increase your visibility, expand your reach and grow your
                  forwarder network.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 6: Communicate Easily */}
            <ScrollReveal delay={500} className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group h-full">
                <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                </div>
                <h3 className="font-bold text-base text-exim-navy">
                  Communicate Easily
                </h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                  Chat and communicate directly with exporters and buyers inside
                  the platform.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES SECTION */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature List */}
          <ScrollReveal direction="left" className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy leading-tight">
              Key Features for Freight Forwarders
            </h2>
            <div className="w-16 h-1 bg-exim-green mt-3 mb-8 rounded-full"></div>

            <ul className="space-y-4">
              {[
                {
                  title: "Forwarder Profile",
                  desc: "Create your professional profile and showcase your services.",
                },
                {
                  title: "Exporter Management",
                  desc: "Add and manage your exporters in one place.",
                },
                {
                  title: "Rate Requests & Quotations",
                  desc: "Receive requests and provide personalized freight quotes.",
                },
                {
                  title: "Publish Common Rates",
                  desc: "Share your common rates for multiple routes and destinations.",
                },
                {
                  title: "Global Visibility",
                  desc: "Get discovered by exporters and buyers worldwide.",
                },
                {
                  title: "Real-time Notifications",
                  desc: "Stay updated with instant alerts for enquiries and messages.",
                },
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5.5 h-5.5 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center shrink-0 mt-0.5">
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
              alt="Global map interface"
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
                More visibility. More connections. <br />
                More business opportunities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. BENEFITS YOU GET */}
      <section className="py-16 bg-[#fcfdfe] border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Benefits You Get
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-10 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200/70 rounded-[28px] p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Benefit 1 */}
            <ScrollReveal delay={0} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">
                Increase Visibility
              </h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Reach more exporters and buyers globally.
              </p>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={100} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">
                More Business
              </h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Get more enquiries and rate requests.
              </p>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={200} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 003 3h2a3 3 0 003-3M9 12V9a3 3 0 013-3h2a3 3 0 013 3v3M12 15v3m-3 0h6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">
                Better Connections
              </h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Build long term relationships with trusted partners.
              </p>
            </ScrollReveal>

            {/* Benefit 4 */}
            <ScrollReveal delay={300} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">
                Efficient Operations
              </h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Manage rates and communications in one smart platform.
              </p>
            </ScrollReveal>

            {/* Benefit 5 */}
            <ScrollReveal delay={400} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">
                Business Growth
              </h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Expand your network and grow your freight forwarding business.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. JOIN BANNER SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="bg-[#f0f7f3] border border-gray-100 rounded-[24px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-exim-green shrink-0">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#002244] leading-tight">
                  Join EXIM Connect today and take your forwarding business to
                  the next level.
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1.5">
                  Connect. Quote. Grow.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <button className="py-3 px-8 rounded-xl bg-exim-green hover:bg-[#0e7c4b] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-98 transition-transform duration-200">
                Join Now
              </button>
              <span className="text-[10px] text-gray-400 font-bold mt-2">
                It's quick and easy!
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
