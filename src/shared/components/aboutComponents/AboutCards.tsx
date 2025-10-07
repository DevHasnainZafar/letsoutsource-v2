"use client";
import React from "react";
import Image from "next/image";

const AboutCards = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-20 flex flex-col space-y-28 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h4 className="text-[#000000B8] font-medium text-[16px] leading-[24px]">
            WHY TO CHOOSE US
          </h4>
          <h2 className="font-sora font-semibold text-[44px] leading-[100%] text-black mt-2">
            Trusted Partner in <br /> Outsourcing
          </h2>
        </div>
        <div className="max-w-[600px] text-center md:text-left text-[#0000008A] text-[16px] leading-[27px] mt-6">
          At Lets Outsource, we go beyond basic support by offering tailored,
          long-term solutions for your business.Our expert team provides
          proactive guidance to keep you ahead of challenges and drive sustained
          growth.
        </div>
      </div>
      <div className="relative  flex flex-col md:flex-row items-center md:items-stretch md:justify-start gap-10 md:gap-0">
        <div className="relative w-full md:w-[65%] rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] h-[430px] flex items-center">
          <Image
            src="/orangebg.png"
            alt="Support 24/7"
            fill
            className="object-cover absolute inset-0 -z-10"
          />
          <div className="relative z-10 flex flex-col justify-center px-8 space-y-4 max-w-[90%] mt-26 ml-4">
            <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[26px] w-14 h-14 rounded-full flex items-center justify-center font-sora font-semibold text-black">
              01
            </div>
            <h3 className="font-sora font-bold text-[34px] text-black leading-[100%]">
              Support 24/7
            </h3>
            <p className="text-[#0000008A] text-[18px] leading-[24px] max-w-[470px]">
              At Lets Outsource, we know reliable support keeps your business
              running smoothly. That’s why our team is available 24/7 to resolve
              issues, minimize downtime, and provide quick, effective solutions
              — giving you peace of mind and keeping operations at peak
              efficiency.
            </p>
          </div>
        </div>
        <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-[50%] rounded-xl overflow-hidden border border-[#00000014] h-[280px] md:h-[430px] shadow-md z-20">
          <Image
            src="/availableman.png"
            alt="Customer Support Team"
            fill
            className="object-inherit"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row-reverse items-center md:items-stretch md:justify-start gap-10 md:gap-0">
        <div className="relative w-full md:w-[65%] rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] h-[430px] flex items-center justify-end mr-10">
          <Image
            src="/orangebg.png"
            alt="Robust Help"
            fill
            className="object-cover absolute inset-0 -z-10"
          />
          <div className="relative z-10 flex flex-col justify-center px-8 space-y-4 max-w-[90%] mt-26">
            <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[26px] w-14 h-14 rounded-full flex items-center justify-center font-sora font-semibold text-black">
              02
            </div>
            <h3 className="font-sora font-bold text-[34px] text-black leading-[100%]">
              Robust Help
            </h3>
            <p className="text-[#0000008A] text-[18px] leading-[24px] max-w-[470px]">
              At Lets Outsource, we go beyond basic support by offering
              tailored, long-term solutions for your business. From
              troubleshooting issues to optimizing operations, our expert team
              provides proactive guidance to keep you ahead of challenges and
              drive sustained growth.
            </p>
          </div>
        </div>
        <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-[50%] rounded-xl overflow-hidden border border-[#00000014] h-[280px] md:h-[430px] shadow-md z-20">
          <Image
            src="/hero2.png"
            alt="Robust Help"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
