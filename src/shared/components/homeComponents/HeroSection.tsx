import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const stats = [
    { value: "25+", label: "Services", icon: "/circlearrowright.png" },
    { value: "62+", label: "Clients", icon: "/circlearrowright.png" },
    { value: "24/7", label: "Availability", icon: "/circlearrowright.png" },
    { value: "626+", label: "Projects", icon: "/circlearrowright.png" },
  ];

  return (
    <div className="relative w-full h-[90vh] md:h-[800px] overflow-hidden flex flex-col">
      <Image
        src="/hero1.png"
        alt="letsoutsource"
        fill
        className="object-center -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/66 -z-10" />
      <div className="flex flex-col justify-between flex-1 text-white text-center">
        <div className="flex flex-col items-center justify-center flex-1 space-y-4">
          <h1 className="font-sora font-semibold text-[36px] md:text-[46px] leading-[46px] md:leading-[56px] tracking-[-1.28px]">
            Perfect Outsourcing <br />
            Partner
          </h1>
          <p className="max-w-[390px] text-[#FFFFFFA8] md:text-[16px] leading-[24px] md:leading-[28px] font-normal">
            Since 2019, Let’s Outsource has been providing tailored outsourcing
            solutions, from taxi booking and remote staff hiring to reliable
            customer support.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer border-[1.5px] border-white rounded-[233px] px-4 py-2 flex items-center justify-center gap-2 mx-auto hover:bg-[#d7d7d7f4] hover:text-black transition-all"
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

        <div className="flex text-white text-center justify-center items-center gap-25 pb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <h1 className="font-sora font-semibold text-[32px] md:text-[48px] leading-[42px] md:leading-[52px] tracking-[-1.28px]">
                {item.value}
              </h1>
              <div className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-[15px] md:text-[18px]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
