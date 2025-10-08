"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const EmailSupport = () => {
  const [animate, setAnimate] = useState(false);

  const stats = [
    {
      value: "200",
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
      value: "30",
      label: "Number of Clients",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
    {
      value: "05",
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
    <div className="relative w-full h-[90vh] md:h-[750px] overflow-hidden flex flex-col">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/busyman.png"
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
          Email Support
        </h1>
        <Link
          href="/contact"
          className={`border-[1.5px] border-white rounded-[233px] px-4 py-2 flex items-center justify-center gap-2 mx-auto cursor-pointer transition-all duration-1000 ease-out delay-200 hover:bg-[#d7d7d7f4] hover:text-black ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Buy Service Now
          <Image
            src="/arrowrightorange.png"
            alt="arrow"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex text-white text-center justify-center items-center gap-6 md:gap-16 lg:gap-20 pb-16 px-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h1 className="font-sora font-semibold text-[28px] md:text-[48px] leading-[38px] md:leading-[52px] tracking-[-1.28px]">
              {item.value.split("").map((digit, dIndex) => (
                <span
                  className={`digit ${
                    item.label !== "Availability" ? "flip" : ""
                  }`}
                >
                  {digit}
                </span>
              ))}
              {item.suffix}
            </h1>

            <div className="flex items-center gap-2">
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="object-contain w-4 h-4 md:w-5 md:h-5"
              />
              <p className="text-[13px] md:text-[18px]">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSupport;
