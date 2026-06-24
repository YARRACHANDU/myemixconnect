import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MY EXIM Connect | Co-Digital. Grow Global.",
  description: "A digital platform built for Indian Exporters, Buyers and Freight Forwarders to connect, collaborate and grow globally.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919003062532?text=Hi%20MY%20EXIM%20Connect,%20I%20have%20an%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          title="Chat with us on WhatsApp"
        >
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:animate-none"></span>
          
          <svg className="w-7 h-7 relative z-10 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.884-6.974C16.592 1.909 14.116.884 11.487.884c-5.443 0-9.867 4.42-9.871 9.858 0 1.93.505 3.811 1.464 5.483L1.993 22l6.096-1.599c1.6.87 3.298 1.328 4.558 1.328z"/>
            <path d="M17.472 14.382c-.3-.149-1.778-.878-2.046-.976-.269-.099-.463-.149-.658.149-.195.297-.752.975-.921 1.17-.17.195-.338.219-.638.07-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.495-1.782-1.67-2.08-.175-.298-.018-.459.13-.607.135-.133.3-.347.45-.52.149-.174.199-.297.299-.497.099-.2.05-.376-.025-.525-.075-.149-.658-1.587-.901-2.172-.236-.57-.477-.492-.658-.5-.17-.008-.365-.01-.56-.01s-.51.074-.776.365c-.266.291-1.017.992-1.017 2.42 0 1.427 1.039 2.805 1.183 3.002.144.195 2.043 3.12 4.95 4.38.69.298 1.23.478 1.65.612.693.22 1.325.19 1.823.114.557-.083 1.778-.727 2.028-1.427.25-.7.25-1.3.175-1.427-.075-.127-.269-.201-.569-.35z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
