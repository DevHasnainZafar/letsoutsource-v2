"use client";
import React from "react";
import Image from "next/image";

const PartnersLogos = () => {
  const logos = [
    "/albatross.webp",
    "/novatech.png",
    "/skullview.png",
    "/khanujalaw.png",
    "/DaddyCabs.webp",
    "/uridowhite.webp",
    "/cmac.webp",
    "/Saltire.webp",
    "/Booking.webp",
    "/jstelecomlogowhite.png",
  ];

  return (
    <section className="relative bg-black text-center py-20 overflow-hidden h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/map.png"
          alt="World Map"
          width={1000}
          height={500}
          className="object-contain mt-1 pointer-events-none select-none animate-pulse-smooth"
          priority
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 mt-15">
        <p className="text-[#FFFFFFB8] font-sora font-medium text-[14px] leading-6">
          WHO WE ARE
        </p>
        <h2 className="text-white font-sora font-semibold text-[42px] leading-[100%] mt-2">
          Meet Our Partners
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-18 justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[120px] h-[60px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Letsoutsource logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogos;
