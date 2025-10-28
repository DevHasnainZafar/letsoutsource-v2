"use client";
import React from "react";
import Image from "next/image";

const AboutFeatures = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center py-8 sm:py-16 md:py-10 px-4 sm:px-0">
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <h3 className="text-[#000000B8] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
          Features
        </h3>
        <h2 className="font-sora font-semibold text-[26px] sm:text-[36px] md:text-[42px] leading-[110%] text-black mt-2">
          Discover Features That <br /> Drive Reliability and Growth
        </h2>
        <p className="text-[#0000008A] font-normal text-[16px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[27px] mt-3 max-w-[100%] sm:max-w-[80%] md:max-w-[600px] mx-auto">
          Explore the key elements that make our outsourcing services stand
          out—reliable operations, skilled professionals, and innovative
          strategies designed to drive efficiency, reduce costs, and help your
          business scale seamlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
        <div className="flex flex-col justify-start">
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm mb-4 sm:mb-5 md:mb-6">
            <h3 className="font-sora font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-black mb-6 sm:mb-8 md:mb-10">
              Our Promise
            </h3>
            <p className="text-[#0000008A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]">
              We aim to feel “in-house” from day one: easy to reach and easy to
              scale. Whether it’s taxi dispatch at 3am, handling complaints with
              empathy, or keeping clinic diaries full.
            </p>
          </div>
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[240px] sm:h-[280px] md:h-[310px]">
            <Image
              src="/hero2.avif"
              alt="Our Mission"
              fill
              className="w-full h-full object-cover object-center sm:object-top"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[360px] sm:h-[460px] md:h-[540px]">
          <Image
            src="/coworking.avif"
            alt="Core Feature"
            fill
            className="object-cover object-center sm:object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.592)] via-[rgba(0,0,0,0.444)] to-[rgba(0,0,0,0.592)] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between">
            <h3 className="font-sora font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-white">
              Our Vision
            </h3>
            <p className="text-[#FFFFFF8A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]">
              Our vision is to empower businesses by providing reliable,
              innovative, and tailored outsourcing solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[240px] sm:h-[280px] md:h-[310px] mb-4 sm:mb-5 md:mb-6">
            <Image
              src="/smilingwoman.avif"
              alt="Our Value"
              fill
              unoptimized
              priority
              className="w-full h-full object-cover object-center sm:object-[center_25%]"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
            <p className="text-[#0000008A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]">
              We value consistency, care, and commitment. Every feature we
              develop aims to create a seamless experience that enhances your
              peace of mind and supports your well-being.
            </p>
            <h3 className="font-sora font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-black mt-6 sm:mt-8 md:mt-10">
              Our Value
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
