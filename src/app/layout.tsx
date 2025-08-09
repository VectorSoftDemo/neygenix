import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Neugenix ",
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
  openGraph: {
    title: "Neugenix Global Health ",
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
      <body className="bg-gradient-to-l from-[#bdf7ba] via-[#e6fae6] to-[#bdf7ba] min-h-screen">
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}

