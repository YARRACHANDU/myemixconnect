"use client";

import Image from "next/image";

export default function Buyers() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-open-sans selection:bg-exim-green selection:text-white">
      
      {/* 1. HERO SECTION (RESPONSIVE) */}
      <section className="relative bg-white overflow-hidden">
        {/* Mobile Layout (lg:hidden) */}
        <div className="block lg:hidden">
          {/* Text content first */}
          <div className="px-6 py-8 flex flex-col bg-gradient-to-b from-[#f8fafc] to-white">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4">
              <a href="/" className="text-exim-green hover:underline">
                Home
              </a>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-700">Buyers</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-black text-exim-navy tracking-tight leading-tight">
              Find Trusted Suppliers. <br />
              <span className="text-exim-green">Buy with Confidence.</span>
            </h1>
            
            <p className="text-gray-600 text-sm mt-4 leading-relaxed font-semibold">
              EXIM Connect helps buyers discover verified Indian exporters, compare products, and connect directly to source the best for your business.
            </p>

            {/* App Store / Play Store Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="hover:opacity-90 transition-opacity">
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
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
                <div className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-800 shadow-md">
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

          {/* Banner image below */}
          <div className="w-full relative aspect-[16/9] bg-white">
            <Image 
              src="/buyers.png"
              alt="Buyer in a warehouse looking at tablet"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Layout (lg:block hidden) */}
        <div 
          className="hidden lg:block relative w-full h-[450px] lg:h-[480px] bg-white"
          style={{
            backgroundImage: "url('/buyers.png')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12">
              <div className="col-span-6 flex flex-col justify-center">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <a href="/" className="text-exim-green hover:underline">
                    Home
                  </a>
                  <span className="text-gray-400">&gt;</span>
                  <span className="text-gray-700">Buyers</span>
                </nav>

                {/* Title */}
                <h1 className="text-4xl lg:text-[42px] font-black text-exim-navy mt-4 tracking-tight leading-tight">
                  Find Trusted Suppliers. <br />
                  <span className="text-exim-green">Buy with Confidence.</span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-5 leading-relaxed font-semibold max-w-xl">
                  EXIM Connect helps buyers discover verified Indian exporters, compare products, and connect directly to source the best for your business.
                </p>

                {/* App Store / Play Store Buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <a href="#" className="hover:opacity-90 transition-opacity">
                    <div className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2 border border-gray-800 shadow-md">
                      <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.16-.52 2.82-1.33z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[7px] uppercase tracking-wider text-gray-400 font-medium leading-none">Download on the</span>
                        <span className="text-[10px] font-bold leading-none mt-0.5">App Store</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="hover:opacity-90 transition-opacity">
                    <div className="bg-black text-white px-3.5 py-2 rounded-lg flex items-center gap-2 border border-gray-800 shadow-md">
                      <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
          </div>
        </div>
      </section>

      {/* 2. ALL YOU NEED TO SOURCE BETTER SECTION */}
      <section className="py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy inline-block relative pb-2">
            All You Need to <span className="text-[#002244] border-b-2 border-exim-green">Source Better</span>
          </h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm sm:text-base">
            Powerful tools and verified data to help you find the right products and suppliers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Smartphone mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[270px] h-[550px] drop-shadow-2xl">
              <Image
                src="/buyersmobile.png"
                alt="Buyer Dashboard Mobile Screen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1: Search Products */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Search Products</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Find products across various categories from verified Indian exporters.
              </p>
            </div>

            {/* Card 2: Verified Suppliers */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Verified Suppliers</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Connect with verified and trusted exporters with complete business profiles.
              </p>
            </div>

            {/* Card 3: Request Quotations */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Request Quotations</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Send inquiries and receive competitive quotes from multiple suppliers.
              </p>
            </div>

            {/* Card 4: Compare & Choose */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Compare & Choose</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Compare products, prices, and supplier ratings to make the right decision.
              </p>
            </div>

            {/* Card 5: Real-time Alerts */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Real-time Alerts</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Get notified about new products, offers, and supplier updates.
              </p>
            </div>

            {/* Card 6: Direct Communication */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-exim-navy">Direct Communication</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Chat directly with exporters and build strong business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES FOR BUYERS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature List */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy leading-tight">
              Key Features for Buyers
            </h2>
            <div className="w-16 h-1 bg-exim-green mt-3 mb-8 rounded-full"></div>

            <ul className="space-y-4">
              {[
                { title: "Wide Product Range", desc: "Explore products across multiple categories." },
                { title: "Verified Exporters", desc: "All exporters are verified for authenticity and reliability." },
                { title: "Advanced Search", desc: "Use filters to find exactly what you need." },
                { title: "Secure & Transparent", desc: "Safe communication and transparent business deals." },
                { title: "Save & Manage", desc: "Save favorites, manage inquiries, and track responses." }
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5.5 h-5.5 rounded-full bg-[#e8f5ed] text-exim-green flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-exim-navy leading-tight">{feat.title}</h3>
                    <p className="text-gray-500 text-xs font-semibold mt-1 leading-normal">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image with quote banner overlay */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group">
            <Image
              src="/buyersimage.png"
              alt="Businessman overlooking container cargo ship"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />
            {/* Quote banner overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-exim-navy/95 backdrop-blur-sm rounded-[18px] p-5 flex items-center gap-4 border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-[#139c5e]/20 text-[#139c5e] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-white text-sm sm:text-base font-extrabold leading-snug">
                The right supplier can transform <br />
                your business. We help you find them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW EXIM CONNECT HELPS YOU */}
      <section className="py-16 bg-[#fcfdfe] border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
            How EXIM Connect Helps You
          </h2>
          <div className="w-16 h-1 bg-exim-green mx-auto mt-3 mb-10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200/70 rounded-[28px] p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Find the Right Products</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Discover quality products that fit your business needs.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" className="hidden" />
                  {/* Custom Handshake Path */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 003 3h2a3 3 0 003-3M9 12V9a3 3 0 013-3h2a3 3 0 013 3v3M12 15v3m-3 0h6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Connect with Trust</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Build reliable relationships with verified exporters.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Get Best Value</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Compare quotes and choose the best deals.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Save Time</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Simplify sourcing and focus on growing your business.
              </p>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f5ed] text-[#139c5e] flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-extrabold text-sm text-exim-navy">Grow Your Business</h3>
              <p className="text-gray-500 text-xs font-semibold mt-3 leading-relaxed">
                Access India's best products and expand globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOIN BANNER / APP DOWNLOAD CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f0f7f3] border border-gray-100 rounded-[24px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-exim-green shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#002244] leading-tight">
                  Ready to find your ideal supplier?
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1.5">
                  Join thousands of buyers who trust EXIM Connect.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5 shrink-0">
              <span className="text-xs font-bold text-gray-500">
                Download the EXIM Connect App
              </span>
              <div className="flex items-center gap-3">
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
        </div>
      </section>

    </div>
  );
}
