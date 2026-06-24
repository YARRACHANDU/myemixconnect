"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

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

export default function Pricing() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Is MY EXIM Connect really free to use?",
      answer: "Yes, absolutely. The platform is completely free for all users. There are no registration fees, no subscription costs, and no hidden charges."
    },
    {
      question: "Do I need to enter a credit card to sign up?",
      answer: "No. You do not need to provide any credit card or payment details to register and start using the platform."
    },
    {
      question: "Is this free plan for Exporters, Freight Forwarders, and Buyers?",
      answer: "Yes, MY EXIM Connect is completely free for all roles. Exporters, Freight Forwarders, and Buyers all get full access to the features tailored for their workflows."
    },
    {
      question: "Are there any limits on connections or inquiries?",
      answer: "No. All users can connect with unlimited verified members, search rates, and send or receive quotes without any limitations."
    },
    {
      question: "How does MY EXIM Connect keep the platform secure?",
      answer: "We verify all user profiles and implement strict security protocols to ensure that all communication, requests, and data on the platform remain safe and reliable."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-exim-green selection:text-white pb-16 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH DIAGONAL SPLIT */}
      <section className="relative overflow-hidden min-h-[380px] lg:min-h-[460px] flex flex-col lg:flex-row lg:items-center bg-white border-b border-gray-100">
        {/* Background Cargo Ship Image (Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block select-none pointer-events-none">
          <Image
            src="/ship.png"
            alt="Cargo Ship Pricing Banner"
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
        <div className="w-full lg:hidden relative h-48 sm:h-64 z-0 animate-fade-in overflow-hidden">
          <Image
            src="/ship.png"
            alt="Cargo Ship Pricing Banner"
            fill
            priority
            className="object-cover object-right scale-[1.7] origin-right"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-16">
          <div className="w-full lg:w-[48%] flex flex-col justify-center animate-fade-in-up">
            {/* Tag/Badge */}
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-exim-green uppercase mb-3">
              Always Free to Use
            </span>

            {/* Title & Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-exim-navy tracking-tight leading-none">
              Absolutely Free.
            </h1>
            <h2 className="text-exim-green font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight">
              For Everyone.
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-gray-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              MY EXIM Connect is for everyone. Exporters, Freight Forwarders and Buyers – connect and grow your business at zero cost.
            </p>

            {/* Micro-badges under description */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Absolutely Free</span>
              </div>
              
              <div className="w-px h-3.5 bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No Subscription</span>
              </div>

              <div className="w-px h-3.5 bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Secure & Reliable</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ONE PLAN. MAXIMUM VALUE SECTION & PRICING CARD */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
              All Users. Always Free. Maximum Value.
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-500 mt-4 font-semibold text-sm sm:text-base leading-relaxed">
              Exporters, Freight Forwarders and Buyers – get complete access to connect, collaborate and grow.
            </p>
          </ScrollReveal>
        </div>

        {/* PRICING CARD */}
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <ScrollReveal>
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Green top bar */}
              <div className="bg-exim-green text-center py-4">
                <span className="text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                  ITS ABSOLUTELY FREE TO USE!
                </span>
              </div>

              {/* Price Details */}
              <div className="p-8 sm:p-10 text-center border-b border-gray-100">
                <p className="text-gray-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">For All Users</p>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="text-4xl sm:text-5xl font-black text-exim-green">Free</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-2">No subscription. No hidden charges.</p>
              </div>

              {/* Features Columns Grid */}
              <div className="p-8 sm:p-10 bg-[#fafcfa] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:divide-x divide-gray-200/60">
                {/* Column 1 */}
                <ul className="space-y-4">
                  {[
                    "Access to all features",
                    "Unlimited connections",
                    "Advanced search & filters",
                    "Request & respond to quotes",
                    "Real-time alerts & notifications"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-gray-700">
                      <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Column 2 */}
                <ul className="space-y-4 md:pl-10">
                  {[
                    "Direct communication",
                    "Verified profiles",
                    "Data & insights",
                    "Secure platform",
                    "Priority support"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-gray-700">
                      <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Try premium banner inside card */}
              <div className="p-6 bg-white border-t border-gray-100 flex justify-center">
                <div className="bg-[#f0f7f3] text-gray-600 rounded-2xl py-3.5 px-6 flex items-center gap-3 w-full max-w-xl justify-center text-xs font-bold text-center">
                  <svg className="w-5 h-5 text-exim-green shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5h2a1 1 0 011 1v3a1 1 0 01-1 1h-1v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm2.5 0a1 1 0 100-2 1 1 0 000 2zM12.5 5a1 1 0 100-2 1 1 0 000 2zM4 7v2h12V7H4zm2 4v7h3.5v-7H6zm5.5 0v7H14v-7h-2.5z" clipRule="evenodd" />
                  </svg>
                  <span>
                    A completely <span className="text-exim-green">free platform to help your MY EXIM business grow globally.</span>
                  </span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. ONE PLAN FOR ALL TYPES OF USERS */}
      <section className="py-16 bg-[#fbfdfb] border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              One Plan for All Types of Users
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-12 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-200/80">
            {/* Column 1: Exporters */}
            <ScrollReveal delay={0} className="h-full">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-base text-exim-navy">Exporters</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-xs">
                  Showcase your products, connect with global buyers and grow exports.
                </p>
              </div>
            </ScrollReveal>

            {/* Column 2: Freight Forwarders */}
            <ScrollReveal delay={150} className="h-full">
              <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4">
                <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 010-2h3m-3 2h3m3 0a2 2 0 002-2v-3a2 2 0 00-2-2h-3m-6 7H9" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-base text-exim-navy">Freight Forwarders</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-xs">
                  Find new clients, manage shipments and expand your network.
                </p>
              </div>
            </ScrollReveal>

            {/* Column 3: Buyers */}
            <ScrollReveal delay={300} className="h-full">
              <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4">
                <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-base text-exim-navy">Buyers</h3>
                <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-xs">
                  Discover trusted suppliers, compare and source the best products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. WHY USERS TRUST EXIM CONNECT */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Why Users Trust MY EXIM Connect
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-10 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200/70 rounded-[28px] p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Column 1: Trusted Network */}
            <ScrollReveal delay={0} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Trusted Network</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Verified members across the globe.
              </p>
            </ScrollReveal>

            {/* Column 2: Cost Effective */}
            <ScrollReveal delay={100} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Cost Effective</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                One affordable plan for everyone.
              </p>
            </ScrollReveal>

            {/* Column 3: Save Time */}
            <ScrollReveal delay={200} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Save Time</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Streamline your sourcing and connections.
              </p>
            </ScrollReveal>

            {/* Column 4: Grow Business */}
            <ScrollReveal delay={300} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Grow Business</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                More connections, more opportunities.
              </p>
            </ScrollReveal>

            {/* Column 5: Priority Support */}
            <ScrollReveal delay={400} className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 10a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Priority Support</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                We are here to help you succeed.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-12 rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 50} className="h-fit">
              <div className="border border-gray-100 rounded-2xl bg-[#fafcfa]/50 overflow-hidden shadow-sm h-fit">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-extrabold text-xs sm:text-sm text-exim-navy hover:bg-[#e8f5ed]/20 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-4 h-4 text-exim-navy shrink-0 transition-transform duration-200 ${
                      openFAQIndex === idx ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openFAQIndex === idx && (
                  <div className="px-5 pb-5 text-xs font-semibold text-gray-500 leading-relaxed border-t border-gray-100/50 pt-3 bg-white animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM BANNER / APP DOWNLOAD CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="bg-[#f0f7f3] border border-gray-100 rounded-[24px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              {/* Rocket Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-exim-green shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#002244] leading-tight">
                  Start Using MY EXIM Connect Free Today!
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1.5">
                  Join thousands of users who trust MY EXIM Connect.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">Download on the</span>
                    <span className="text-[10px] font-bold leading-none mt-0.5">App Store</span>
                  </div>
                </div>
              </a>
              <a href="#" className="hover:scale-105 active:scale-98 transition-transform duration-200">
                <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg className="w-4 h-4" viewBox="0 0 96.3 96.3">
                    <path fill="#EA4335" d="M46.884 45.762 10.337 84.18a.745.745 0 0 0 .006.023c1.121 4.171 4.967 7.243 9.534 7.243a9.918 9.918 0 0 0 5.008-1.346l.116-.069 41.138-23.509-19.255-20.76z"/>
                    <path fill="#FBBC04" d="m83.858 39.22-.035-.023-17.76-10.198-20.009 17.635 20.079 19.883L83.8 56.422c3.097-1.657 5.2-4.89 5.2-8.618 0-3.705-2.074-6.921-5.142-8.584z"/>
                    <path fill="#4285F4" d="M10.335 11.264A9.54 9.54 0 0 0 10 13.78v67.886c.036.974.115 1.715.337 2.514l37.804-37.434-37.806-35.482z"/>
                    <path fill="#34A853" d="m47.154 47.723 18.915-18.73L24.978 5.398A9.962 9.962 0 0 0 19.877 4c-4.567 0-8.419 3.078-9.54 7.255l-.002.01 36.819 36.458z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">Get it on</span>
                    <span className="text-[10px] font-bold leading-none mt-0.5">Google Play</span>
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
