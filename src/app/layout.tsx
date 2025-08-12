import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

import Image from "next/image";

export const metadata = {
  title: "Neugenix",
  description:
    "Neugenix Global Health delivers innovative, patient-focused healthcare solutions. Contact us for personalized medical support, client services, and wellness expertise.",
  keywords: [
    "Neugenix",
    "Global Health",
    "Healthcare",
    "Patient Wellness",
    "Medical Support",
    "Client Services",
    "Contact Neugenix",
    "Wellness Solutions",
    "Medical Practitioner",
    "Patient Care",
    "Gainesville GA"
  ],
  authors: [{ name: "Neugenix Global Health", url: "https://neugenix.com" }],
  creator: "Neugenix Global Health",
  icons: {
    icon: "/logo.webp" // path relative to /public
  },
  openGraph: {
    title: "Neugenix Global Health",
    description:
      "Neugenix Global Health delivers innovative, patient-focused healthcare solutions. Contact us for personalized medical support, client services, and wellness expertise.",
    url: "https://neugenix.com",
    siteName: "Neugenix Global Health",
    locale: "en_US",
    type: "website"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <html lang="en">
      {/* <body className="bg-gradient-to-r from-[#46A941] to-[#2F855A] min-h-screen"> */}
      {/* <body className="bg-gradient-to-r from-[#69a185] via-[#bdf7ba] to-[#69a185] min-h-screen"> */}
      {/* <body className="bg-gradient-to-l from-[#bdf7ba] via-[#e6fae6] to-[#bdf7ba] min-h-screen"> */}
      <body className="bg-gradient-to-l from-[#bdf7ba] via-[#e6fae6] to-[#bdf7ba] min-h-screen">
          <Header />
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              style: {
                background: '#d1fae5', // Light green (Tailwind green-100)
                color: '#065f46',      // Dark green text (Tailwind green-900)
                border: '1px solid #6ee7b7',
                fontWeight: 500,
              },
              iconTheme: {
                primary: '#10b981', // Tailwind green-500
                secondary: '#d1fae5',
              },
            },
            error: {
              style: {
                background: '#fee2e2', // Light red (Tailwind red-100)
                color: '#991b1b',      // Dark red text (Tailwind red-900)
                border: '1px solid #fca5a5',
                fontWeight: 500,
              },
              iconTheme: {
                primary: '#ef4444', // Tailwind red-500
                secondary: '#fee2e2',
              },
            },
          }}
        />

        //ui for react-hot-toast

          {children}
          <Footer />
      </body>
    </html>
  );
}

