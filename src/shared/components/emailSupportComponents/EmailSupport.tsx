"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const EmailSupport = () => {
  const [animate, setAnimate] = useState(false);

  const stats = [
    {
      value: "210",
      label: "Number of Employees",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
    {
      value: "06",
      label: "Services We Offer",
      icon: "/circlearrowright.png",
      suffix: "",
    },
    {
      value: "84",
      label: "Number of Clients",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
    {
      value: "06",
      label: "Years of Experience",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[45vh] md:h-[750px] overflow-hidden flex flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/busyman.avif"
          alt="letsoutsource hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="flex flex-col justify-center items-center flex-1 text-center text-white px-4 sm:px-6 mt-12 sm:mt-0">
        <h3 className="text-[#FFFFFFB8] font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] mb-3 sm:mb-4">
          Service
        </h3>
        <h1
          className={`font-sora font-semibold text-[28px] sm:text-[36px] md:text-[60px] leading-[36px] sm:leading-[46px] md:leading-[70px] tracking-[-0.8px] md:tracking-[-1.28px] mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Email Support
        </h1>
        <Link
          href="/contact"
          className={`border-[1.5px] border-white rounded-[233px] px-3 sm:px-4 py-2 flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all duration-1000 ease-out delay-200 hover:bg-[#d7d7d7f4] hover:text-black text-[14px] sm:text-[16px] ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Buy Service Now
          <Image
            src="/arrowrightorange.png"
            alt="arrow"
            width={24}
            height={24}
            className="object-contain w-5 h-5 sm:w-6 sm:h-6"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-row text-white text-center justify-center items-center gap-4 sm:gap-6 md:gap-16 lg:gap-20 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-1 sm:space-y-2"
          >
            <h1 className="font-sora font-semibold text-[20px] sm:text-[24px] md:text-[48px] leading-[28px] sm:leading-[34px] md:leading-[52px] tracking-[-0.8px] md:tracking-[-1.28px]">
              {item.value.split("").map((digit, dIndex) => (
                <span
                  key={dIndex}
                  className={`digit ${
                    item.label !== "Availability" ? "flip" : ""
                  }`}
                >
                  {digit}
                </span>
              ))}
              {item.suffix}
            </h1>
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src={item.icon}
                alt={item.label}
                width={16}
                height={16}
                className="object-contain w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              />
              <p className="text-[10px] sm:text-[12px] md:text-[18px] leading-[14px] sm:leading-[16px] md:leading-[22px]">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSupport;
