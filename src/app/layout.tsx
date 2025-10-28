import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/layout/navbar/Navbar";
import Footer from "@/shared/layout/footer/Footer";
import Script from "next/script";
import WhatsAppButton from "@/shared/components/whatsappButton/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Let's OutSource | Taxi Booking & Dispatch Outsourcing | iCabbi, Autocab, Cab9, Cordic Experts | ",
  icons: { icon: "/Letoutsource-favicon.ico" },
  keywords: [
    "customer support outsourcing",
    "call center services",
    "outsource customer support",
    "live chat support service",
    "email support outsourcing",
    "live call answering service",
    "taxi booking support service",
    "virtual assistant services",
    "24/7 customer support company",
    "business process outsourcing (BPO)",
    "call center services UK",
    "outsource to Pakistan from UK",
    "UK business support outsourcing",
    "remote call center for UK companies",
    "live chat agents for UK websites",
    "UK-based virtual receptionists",
    "UK dispatch services",
    "live chat support agents",
    "email support for small business",
    "24/7 call handling service",
    "taxi dispatch outsourcing",
    "remote customer service team",
    "helpdesk outsourcing",
    "virtual receptionist",
    "technical support outsourcing",
    "appointment booking call center",
  ],
  description:
    "24/7 UK-focused taxi booking, dispatching, and complaints handling by neutral-accent operators fluent in English with expertise in iCabbi, Autocab, Cordic, CabTreasure & Cab9. Plus appointment scheduling, call handling, legal support, medical billing, and remote staffing. Trusted by 45+ taxi firms across the UK & USA.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Letoutsource-favicon.ico" type="image/x-icon" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-41ZEG74992"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-41ZEG74992');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
