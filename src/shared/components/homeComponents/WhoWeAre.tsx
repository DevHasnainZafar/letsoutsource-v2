"use client";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-[#F5F5F5] pt-8 sm:pt-12 md:pt-15 pb-12 sm:pb-20 md:pb-20 px-2 sm:px-0">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <p className="text-[13px] sm:text-[14px] font-medium leading-[22px] sm:leading-[24px] text-[#000000B8]">
          Who We Are
        </p>
        <h2 className="font-sora font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[100%] text-[#000000] mt-2 -mb-5 sm:mt-2 sm:mb-0">
          Trusted Partner in <br /> Outsourcing
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10 md:gap-14 py-0 sm:py-7 md:py-8">
        <div className="md:w-[50%] relative flex justify-center items-center w-full h-[280px] sm:h-[360px]">
          <Image
            width={250}
            height={200}
            src="/taxi.avif"
            alt="Team collaboration"
            unoptimized
            className="hidden md:block absolute top-18 left-0 object-cover w-[400px] h-[260px] opacity-90"
            sizes="(max-width: 768px) 0vw, 400px"
          />
          <Image
            width={250}
            height={200}
            src="/busywoman.avif"
            alt="Work together"
            className="hidden md:block absolute -top-6 left-22 w-[390px] h-[300px] object-cover opacity-90"
            sizes="(max-width: 768px) 0vw, 390px"
          />
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full sm:w-[360px] md:w-[460px] h-[220px] sm:h-[280px] md:h-[320px] object-cover mx-auto md:mx-0 md:absolute md:top-17 md:left-35 shadow-md"
          />
        </div>

        <div className="md:w-[42%] -mt-6 sm:mt-7 md:mt-8 text-[#000000B8] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] space-y-3 sm:space-y-4">
          <p>
            24/7 UK-focused taxi booking, dispatching, and complaints handling
            by neutral-accent operators fluent in English with expertise in
            iCabbi, Autocab, Cordic, CabTreasure & Cab9. Plus appointment
            scheduling, call handling, legal support, medical billing, and
            remote staffing. Trusted by 45+ taxi firms across the UK & USA.
          </p>
          <p>
            Dedicated operators embedded into your workflow, tools, and SLAs.
            Our trained professionals integrate smoothly into your workflow, so
            you can focus on growth.
          </p>
          <p>
            Our support agents provide friendly, professional assistance—
            resolving issues and handling inquiries while strengthening customer
            relationships to boost satisfaction and loyalty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
