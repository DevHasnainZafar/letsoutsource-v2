"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TaxiService = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-[750px] overflow-hidden flex flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero1.png"
          alt="letsoutsource hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="flex flex-col justify-center items-center flex-1 text-center text-white px-4">
        <h3 className="text-[#FFFFFFB8] font-medium text-[20px] leading-[24px] mb-4">
          Service
        </h3>
        <h1
          className={`font-sora font-semibold text-[36px] md:text-[60px] leading-[46px] md:leading-[70px] tracking-[-1.28px] mb-6 transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Taxi Booking
          <br />
          Services
        </h1>
        <Link
          href="/contact"
          className={`border-[1.5px] border-white rounded-[233px] px-4 py-2 flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all duration-1000 ease-out delay-200 hover:bg-[#d7d7d7f4] hover:text-black ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Request a Quote
          <Image
            src="/arrowrightorange.png"
            alt="arrow"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default TaxiService;
