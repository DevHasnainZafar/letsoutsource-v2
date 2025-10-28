"use client";
import React from "react";
import Image from "next/image";
import PerfectPartnerBanner from "../common/PerfectPartnerBanner";

const PartnerPage = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center pt-20 sm:pt-25 pb-80 sm:pb-80 px-2 sm:px-0">
      <div className="text-center mb-10 sm:mb-14">
        <h3 className="text-[#000000B8] font-medium text-[14px] sm:text-[16px] leading-[24px]">
          PARTNER
        </h3>
        <h2 className="font-sora font-semibold text-[28px] sm:text-[38px] leading-[100%] text-black mt-2">
          Why Partner with Let's <br /> Outsource?
        </h2>
        <p className="text-[#0000008A] font-normal text-[14px] sm:text-[16px] leading-[25px] sm:leading-[27px] mt-3 max-w-[550px] mx-auto">
          We provide reliable, cost-effective outsourcing solutions that help
          your business stay efficient, connected, and future-ready.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 w-full">
        <div className="flex flex-col justify-start">
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="font-sora font-semibold text-[20px] sm:text-[22px] text-black mb-8 sm:mb-10">
              Data-Driven Insights
            </h3>
            <p className="text-[#0000008A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px] max-w-[300px]">
              We analyze every interaction to provide actionable insights that
              help you understand your customers better
            </p>
          </div>
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[280px] sm:h-[310px]">
            <Image
              src="/busywoman.avif"
              alt="Our Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[460px] sm:h-[520px]">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.592)] via-[rgba(0,0,0,0.444)] to-[rgba(0,0,0,0.592)] rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="font-sora font-semibold text-[20px] sm:text-[22px] text-white">
              Scalable Solutions
            </h3>
            <p className="text-[#FFFFFF8A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]">
              Whether you’re a startup or a global enterprise, our support
              scales with your business needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="relative border border-[#00000014] rounded-xl overflow-hidden h-[280px] sm:h-[310px] mb-6">
            <Image
              src="/trendingImage.jpg"
              alt="Our Value"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0000005C]" />
          </div>
          <div className="bg-gradient-to-b from-[#FCFCFC] to-[#F5F5F5] border border-[#F0F0F0] rounded-2xl p-6 shadow-sm">
            <p className="text-[#0000008A] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]">
              We bring the latest tech innovations to your customer support,
              ensuring your business stays ahead of the curve.
            </p>
            <h3 className="font-sora font-semibold text-[20px] sm:text-[22px] text-black mt-8 sm:mt-10">
              Innovation at the Core
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-0 sm:-bottom-20">
        <PerfectPartnerBanner />
      </div>
    </div>
  );
};

export default PartnerPage;
