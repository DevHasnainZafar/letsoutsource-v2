import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/layout/navbar/Navbar";
import Footer from "@/shared/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Let's OutSource",
  icons: {
    icon: "/Letoutsource-favicon.ico",
  },
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
    "Let’s Outsource specialized in outsourced call center services to different businesses around the world. We are specialized in booking and dispatch services and are fully trained on all dispatch softwares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
