"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[80vh] md:h-[750px] overflow-hidden flex flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero1.avif"
          alt="letsoutsource hero"
          fill
          priority
          className="object-cover object-center sm:object-top"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="flex flex-col justify-center items-center flex-1 text-center text-white px-4 sm:px-0 md:px-8 mt-20 sm:mt-24 md:mt-0">
        <h1
          className={`font-sora font-semibold text-[28px] sm:text-[32px] md:text-[42px] leading-[36px] sm:leading-[42px] md:leading-[56px] tracking-[-1px] sm:tracking-[-1.28px] mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Connected through People, <br /> Tech, Care, Trust
        </h1>
        <p
          className={`max-w-[90%] sm:max-w-[80%] md:max-w-[660px] text-[#FFFFFFA8] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] font-normal transition-all duration-1000 ease-out delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          At Let’s Outsource, we deliver smart and reliable support services
          that keep your business connected, efficient, and future-ready. Our
          focus is on simplifying operations so you can grow with confidence.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
