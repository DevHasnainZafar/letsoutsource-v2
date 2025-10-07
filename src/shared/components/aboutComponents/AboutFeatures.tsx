"use client";
import React from "react";
import Image from "next/image";

const AboutFeatures = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-14">
        <h3 className="text-[#000000B8] font-medium text-[16px] leading-[24px]">
          Features
        </h3>
        <h2 className="font-sora font-semibold text-[42px] leading-[100%] text-black mt-2">
          Discover Features That <br /> Breathe Life Into You
        </h2>
        <p className="text-[#0000008A] font-normal text-[16px] leading-[27px] mt-3 max-w-[600px] mx-auto">
          Discover the core tools designed to improve your breathing, reduce
          stress, and enhance your daily health routine.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 w-full">
        <div className="flex flex-col justify-start">
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="font-sora font-semibold text-[22px] text-black mb-10">
              Our Mission
            </h3>
            <p className="text-[#0000008A] text-[14px] leading-[21px]">
              Our operators manage systems like iCabbi, Autocab, and
              CabTreasure, ensuring rides are dispatched smoothly, accurately,
              and on time for a reliable experience.
            </p>
          </div>
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[310px]">
            <Image
              src="/hero2.png"
              alt="Our Mission"
              width={400}
              height={380}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[540px]">
          <Image
            src="/coworking.png"
            alt="Core Feature"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.592)] via-[rgba(0,0,0,0.444)] to-[rgba(0,0,0,0.592)] rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="font-sora font-semibold text-[22px] text-white">
              Our Vision
            </h3>
            <p className="text-[#FFFFFF8A] text-[14px] leading-[21px]">
              Our vision is to empower businesses by providing reliable,
              innovative, and tailored outsourcing solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[310px] mb-6">
            <Image
              src="/callingagent.png"
              alt="Our Value"
              width={400}
              height={380}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-6 shadow-sm">
            <p className="text-[#0000008A] text-[14px] leading-[21px]">
              We value consistency, care, and commitment. Every feature we
              develop aims to create a seamless experience that enhances your
              peace of mind and supports your well-being.
            </p>
            <h3 className="font-sora font-semibold text-[22px] text-black mt-10">
              Our Value
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
