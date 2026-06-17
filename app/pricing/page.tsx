"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Pricing() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Is the 60 days free trial really free?",
      answer: "Yes, absolutely. You get full access to all features on EXIM Connect for 60 days without any charges. No credit card is required to sign up or start your trial."
    },
    {
      question: "What happens after the 60 days free trial?",
      answer: "After 60 days, to continue using the platform and keeping your active connections, you can subscribe to our simple plan for $10/month. We will notify you before your trial ends."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no contracts, commitments, or cancellation fees. You will continue to have access until the end of your billing cycle."
    },
    {
      question: "Is this plan for Exporters, Freight Forwarders and Buyers?",
      answer: "Yes, EXIM Connect has a single, unified plan that serves all user roles. Exporters, Freight Forwarders, and Buyers all get complete access to the features tailored for their workflows."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee if you are not satisfied with the platform after your subscription starts. Please contact our support team to request a refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, and international payment gateways via our secure checkout system."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-exim-green selection:text-white pb-16">
      
      {/* 1. HERO SECTION WITH DIAGONAL SPLIT */}
      <section className="relative overflow-hidden min-h-[380px] lg:min-h-[460px] flex items-center bg-white border-b border-gray-100">
        {/* Background Cargo Ship Image (Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block select-none pointer-events-none">
          <Image
            src="/ship.png"
            alt="Cargo Ship Pricing Banner"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Slanted overlay on the left to cover it in white */}
          <div 
            className="absolute inset-0 bg-white" 
            style={{ clipPath: "polygon(0 0, 53% 0, 42% 100%, 0 100%)" }}
          />
        </div>

        {/* Mobile View Top Image Banner */}
        <div className="w-full lg:hidden relative h-48 sm:h-64 z-0">
          <Image
            src="/ship.png"
            alt="Cargo Ship Pricing Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-16">
          <div className="w-full lg:w-[48%] flex flex-col justify-center">
            {/* Tag/Badge */}
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-exim-green uppercase mb-3">
              Simple & Transparent Pricing
            </span>

            {/* Title & Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-exim-navy tracking-tight leading-none">
              One Plan.
            </h1>
            <h2 className="text-exim-green font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight">
              Unlimited Opportunities.
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-gray-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              EXIM Connect is for everyone. Whether you are an Exporter, Freight Forwarder or Buyer – our plan is the same for all.
            </p>

            {/* Micro-badges under description */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>60 Days Free Trial</span>
              </div>
              
              <div className="w-px h-3.5 bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                <div className="w-4.5 h-4.5 rounded-full bg-green-100 text-exim-green flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Cancel Anytime</span>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
            All Users. One Plan. Maximum Value.
          </h2>
          <div className="w-16 h-1 bg-exim-green mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-4 font-semibold text-sm sm:text-base leading-relaxed">
            Exporters, Freight Forwarders and Buyers – get complete access to connect, collaborate and grow.
          </p>
        </div>

        {/* PRICING CARD */}
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Green top bar */}
            <div className="bg-exim-green text-center py-4">
              <span className="text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                60 Days Free Trial
              </span>
            </div>

            {/* Price Details */}
            <div className="p-8 sm:p-10 text-center border-b border-gray-100">
              <p className="text-gray-400 text-xs sm:text-sm font-extrabold">After 60 days</p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="text-4xl sm:text-5xl font-black text-exim-green">$10</span>
                <span className="text-gray-500 text-sm sm:text-base font-bold">/ month</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-semibold mt-1">Billed monthly</p>
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
                <svg className="w-5 h-5 text-exim-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>
                  Try all premium <span className="text-exim-green">features free for 60 days. No credit card required.</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ONE PLAN FOR ALL TYPES OF USERS */}
      <section className="py-16 bg-[#fbfdfb] border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
            One Plan for All Types of Users
          </h2>
          <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-12 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-200/80">
            {/* Column 1: Exporters */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy">Exporters</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-xs">
                Showcase your products, connect with global buyers and grow exports.
              </p>
            </div>

            {/* Column 2: Freight Forwarders */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4">
              <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm">
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

            {/* Column 3: Buyers */}
            <div className="flex flex-col items-center text-center p-4 pt-8 md:pt-4">
              <div className="w-14 h-14 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy">Buyers</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed max-w-xs">
                Discover trusted suppliers, compare and source the best products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY USERS TRUST EXIM CONNECT */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
            Why Users Trust EXIM Connect
          </h2>
          <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200/70 rounded-[28px] p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Column 1: Trusted Network */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Trusted Network</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Verified members across the globe.
              </p>
            </div>

            {/* Column 2: Cost Effective */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Cost Effective</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                One affordable plan for everyone.
              </p>
            </div>

            {/* Column 3: Save Time */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Save Time</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Streamline your sourcing and connections.
              </p>
            </div>

            {/* Column 4: Grow Business */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Grow Business</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                More connections, more opportunities.
              </p>
            </div>

            {/* Column 5: Priority Support */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 10a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-green">Priority Support</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                We are here to help you succeed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-12 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl bg-[#fafcfa]/50 overflow-hidden shadow-sm h-fit">
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
                <div className="px-5 pb-5 text-xs font-semibold text-gray-500 leading-relaxed border-t border-gray-100/50 pt-3 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM BANNER / APP DOWNLOAD CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f0f7f3] border border-gray-100 rounded-[24px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              {/* Rocket Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-exim-green shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#002244] leading-tight">
                  Start Your 60 Days Free Trial Today!
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1.5">
                  Join thousands of users who trust EXIM Connect.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="#" className="hover:opacity-90 transition-opacity">
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
              <a href="#" className="hover:opacity-90 transition-opacity">
                <div className="bg-black text-white px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.23 3c-.115.025-.23.07-.33.14l10.96 10.96 3.12-3.12-13.43-7.73c-.106-.062-.218-.088-.32-.05zm-1.6 1.48c-.062.158-.09.344-.09.55v13.94c0 .206.028.392.09.55l7.98-7.98-7.98-8.01zm9.64 6.53L3.89 21c.102.03.214.004.32-.058l13.43-7.73-3.12-3.12-1.24 1.25z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">Get it on</span>
                    <span className="text-[10px] font-bold leading-none mt-0.5">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
