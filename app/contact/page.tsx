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

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  // FAQ Accordion state (stores the index of the open question)
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openFAQIndex === index) {
      setOpenFAQIndex(null);
    } else {
      setOpenFAQIndex(index);
    }
  };

  const faqData = [
    {
      question: "How can I create an account on EXIM Connect?",
      answer: "You can create an account by downloading the EXIM Connect app from the Google Play Store or Apple App Store and signing up as an Exporter, Freight Forwarder, or Buyer. You can also register via our online web platform by clicking the 'Join Now' or 'Get Started' buttons across the site.",
    },
    {
      question: "Is EXIM Connect free to use?",
      answer: "Yes, EXIM Connect offers a free basic plan that allows businesses to create a profile, view basic listings, and receive direct inquiries. For advanced matchmaking, premium badge verification, and unrestricted freight rate comparison, we also offer affordable premium tiers.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our dedicated customer support team directly by emailing us at contactus@myeximbusiness.com, calling us at +91 9003062532, or submitting the contact form on this page. We're also available via the app's in-app help desk.",
    },
    {
      question: "How long does it take to get a response?",
      answer: "We strive to respond to all inquiries within 24 hours. For premium members, we provide priority customer support with responses typically within 2 to 4 hours.",
    },
    {
      question: "Can I update my business information?",
      answer: "Absolutely. Once registered, you can log in to your account dashboard on the mobile app or website, go to your Profile Settings, and update your business registration, product list, locations, and contact details at any time.",
    },
    {
      question: "Is my data secure with EXIM Connect?",
      answer: "Your security is our top priority. We use industry-standard SSL encryption and secure databases to protect all your business records, chat communication, personal details, and transactional data.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]/70 text-gray-800 font-sans selection:bg-exim-green selection:text-white pb-16 overflow-x-hidden">
      {/* 1. HERO SECTION WITH DIAGONAL SPLIT */}
      <section className="relative overflow-hidden min-h-[380px] lg:min-h-[460px] flex items-center bg-white border-b border-gray-100">
        {/* Background Cargo Ship Image (Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block select-none pointer-events-none">
          <Image
            src="/contactus.png"
            alt="Cargo Ship at Port"
            fill
            priority
            className="object-cover object-right animate-fade-in"
          />
        </div>

        {/* Mobile View Top Image Banner */}
        <div className="w-full lg:hidden relative h-48 sm:h-64 z-0 animate-fade-in">
          <Image
            src="/contactus.png"
            alt="Cargo Ship at Port"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-16">
          <div className="w-full lg:w-[58%] flex flex-col justify-center animate-fade-in-up">
            {/* Green Tag */}
            <span className="text-exim-green font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              CONTACT US
            </span>

            {/* Title & Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-exim-navy tracking-tight leading-tight">
              We're Here to Help
            </h1>
            <h2 className="text-exim-green font-black text-3xl sm:text-4xl lg:text-[46px] leading-tight">
              You Grow Global.
            </h2>

            {/* Description Paragraphs */}
            <div className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base font-semibold leading-relaxed space-y-1">
              <p>Have questions or need support? Reach out to our team.</p>
              <p>We're happy to help you with anything you need.</p>
            </div>

            {/* Feature Badges (Horizontal on desktop, stack on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
              {/* Badge 1: Quick Response */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center shrink-0 shadow-sm border border-[#e2ece7]">
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
                      d="M12 6v6h4.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-9-9 9.75 9.75 0 016.74 2.74L21 8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 3h5v5"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-exim-navy">
                    Quick Response
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">
                    We reply within 24 hours
                  </span>
                </div>
              </div>

              {/* Badge 2: Expert Support */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center shrink-0 shadow-sm border border-[#e2ece7]">
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
                      d="M3 18v-6a9 9 0 0118 0v6"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 16c-.5 2-2 3-5 3.5"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-exim-navy">
                    Expert Support
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">
                    Get help from our experts
                  </span>
                </div>
              </div>

              {/* Badge 3: Trusted & Reliable */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0f7f3] text-exim-green flex items-center justify-center shrink-0 shadow-sm border border-[#e2ece7]">
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
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-exim-navy">
                    Trusted & Reliable
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">
                    Your satisfaction is our priority
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS SECTION (4 Column Grid) */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Phone */}
          <ScrollReveal delay={0} className="h-full">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 shadow-sm border border-[#e2ece7] group-hover:scale-110 transition-transform duration-300">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 2a8 8 0 018 8"
                    strokeDasharray="2 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 0110 10"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy mb-2">
                Phone
              </h3>
              <p className="text-sm font-bold text-gray-700 hover:text-exim-green transition-colors">
                <a href="tel:+919003062532">+91 9003062532</a>
              </p>
              <p className="text-[11px] font-bold text-gray-400 mt-2">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Email */}
          <ScrollReveal delay={100} className="h-full">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 shadow-sm border border-[#e2ece7] group-hover:scale-110 transition-transform duration-300">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy mb-2">
                Email
              </h3>
              <p className="text-sm font-bold text-gray-700 hover:text-exim-green transition-colors break-all">
                <a href="mailto:contactus@myeximbusiness.com">
                  contactus@myeximbusiness.com
                </a>
              </p>
              <p className="text-[11px] font-bold text-gray-400 mt-2">
                We reply within 24 hours
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Head Office */}
          <ScrollReveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 shadow-sm border border-[#e2ece7] group-hover:scale-110 transition-transform duration-300">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy mb-2">
                Head Office
              </h3>
              <p className="text-sm font-bold text-gray-700">
                Mumbai, Maharashtra, India
              </p>
              <p className="text-[11px] font-bold text-gray-400 mt-2">400001</p>
            </div>
          </ScrollReveal>

          {/* Card 4: Business Hours */}
          <ScrollReveal delay={300} className="h-full">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(19,156,94,0.12)] hover:border-exim-green/20 hover:-translate-y-1.5 transition-all duration-300 group h-full">
              <div className="w-14 h-14 rounded-full bg-[#f3f9f6] text-exim-green flex items-center justify-center mb-4 shadow-sm border border-[#e2ece7] group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5"
                  />
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-exim-navy mb-2">
                Business Hours
              </h3>
              <p className="text-sm font-bold text-gray-700">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
              <p className="text-[11px] font-bold text-red-500 mt-2">
                Sunday: Closed
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. FORM & REAL MAP SECTION (Side-by-Side) */}
      <section className="py-8 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Send Us a Message Form */}
          <ScrollReveal direction="left" className="lg:col-span-6 bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm flex flex-col">
            {/* Top Indicator & Heading */}
            <span className="w-10 h-0.5 bg-exim-green mb-2 block rounded-full"></span>
            <h3 className="text-xl font-extrabold text-exim-navy mb-6">
              Send Us a Message
            </h3>

            {formSubmitted ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-[#f4faf7] border border-green-100 rounded-2xl animate-fade-in">
                <div className="w-14 h-14 bg-green-100 text-exim-green rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <svg
                    className="w-8 h-8"
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
                <h4 className="text-lg font-black text-exim-navy">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 font-semibold max-w-xs">
                  Thank you for reaching out. A representative from our team will
                  get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center">
                        Full Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full text-xs font-semibold px-4 py-3 border border-gray-200 rounded-xl focus:border-exim-green focus:outline-none bg-gray-50/20 text-gray-800 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center">
                        Email Address{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="w-full text-xs font-semibold px-4 py-3 border border-gray-200 rounded-xl focus:border-exim-green focus:outline-none bg-gray-50/20 text-gray-800 placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full text-xs font-semibold px-4 py-3 border border-gray-200 rounded-xl focus:border-exim-green focus:outline-none bg-gray-50/20 text-gray-800 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center">
                        Subject <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full text-xs font-semibold px-4 py-3 border border-gray-200 rounded-xl focus:border-exim-green focus:outline-none bg-gray-50/20 text-gray-800 placeholder-gray-400 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Sales / Partnership">Sales / Partnership</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center">
                      Message <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full text-xs font-semibold px-4 py-3 border border-gray-200 rounded-xl focus:border-exim-green focus:outline-none bg-gray-50/20 text-gray-800 placeholder-gray-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-exim-green hover:bg-[#0e7c4b] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <svg
                      className="w-4.5 h-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* Right Column: Find Us Here Real Map */}
          <ScrollReveal direction="right" className="lg:col-span-6 bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Top Indicator & Heading */}
                <span className="w-10 h-0.5 bg-exim-green mb-2 block rounded-full"></span>
                <h3 className="text-xl font-extrabold text-exim-navy mb-6">
                  Find Us Here
                </h3>

                {/* Interactive Map Iframe */}
                <div className="w-full h-[280px] rounded-xl overflow-hidden border border-gray-100 shadow-inner relative z-10 bg-gray-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.803746685412!2d72.86060197597274!3d19.072354552044813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ef4c7811ef%3A0xb36ef55fa47291a8!2sTrade%20Centre%20Bkc!5e0!3m2!1sen!2sin!4v1718663489874!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EXIM Connect Mumbai BKC Head Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Office Details & Get Directions Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-gray-800">
                    Our Office
                  </h4>
                  <p className="text-xs font-black text-exim-navy">
                    EXIM Connect
                  </p>
                  <p className="text-xs font-semibold text-gray-500 leading-relaxed">
                    Office No. 501, Trade Center,
                    <br />
                    Bandra Kurla Complex,
                    <br />
                    Mumbai, Maharashtra, India - 400051
                  </p>
                </div>

                {/* Get Directions Button */}
                <a
                  href="https://maps.google.com/?q=Trade+Centre,+Bandra+Kurla+Complex,+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f0f7f3] hover:bg-[#e2f1e9] text-exim-green font-bold text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0 shadow-sm border border-[#e2ece7] cursor-pointer"
                >
                  Get Directions
                  <svg
                    className="w-4 h-4 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 mt-6">
        {/* Title */}
        <div className="text-center mb-10">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-exim-navy">
              Frequently Asked Questions
            </h3>
          </ScrollReveal>
        </div>

        {/* 2 Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openFAQIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 50} className="h-fit">
                <div
                  className="bg-[#f3f7f6]/70 rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 h-fit"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-4 sm:px-6 sm:py-4 cursor-pointer focus:outline-none group"
                  >
                    <span className="font-extrabold text-xs sm:text-sm text-exim-navy group-hover:text-exim-green transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full bg-white text-exim-navy flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-exim-green shadow-sm" : ""
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px] border-t border-white/50" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed bg-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 5. STILL HAVE QUESTIONS? SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <ScrollReveal className="bg-[#f3f7f6] rounded-[24px] border border-gray-100 p-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Left: Chat Icon & Text */}
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-full bg-white text-exim-green flex items-center justify-center shrink-0 shadow-sm border border-gray-100/50">
              <svg
                className="w-7 h-7"
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
            <div className="flex flex-col">
              <h4 className="text-lg font-black text-exim-navy">
                Still have questions?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-0.5">
                Our support team is here to help you succeed.
              </p>
            </div>
          </div>

          {/* Right: Contact Support Button */}
          <div className="flex flex-col items-center sm:items-end shrink-0">
            <a
              href="mailto:contactus@myeximbusiness.com"
              className="bg-exim-green hover:bg-[#0e7c4b] text-white font-extrabold text-xs px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-98 cursor-pointer"
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
                  d="M18.364 5.636l-3.536 3.536m0 0A5 5 0 1110.122 10.12l3.536-3.536m0-0.002a5 5 0 116.364 6.364M12 2A10 10 0 1022 12A10 10 0 0012 2z"
                />
              </svg>
              Contact Support
            </a>
            <span className="text-[10px] font-bold text-gray-400 mt-2">
              We'll get back to you soon!
            </span>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
