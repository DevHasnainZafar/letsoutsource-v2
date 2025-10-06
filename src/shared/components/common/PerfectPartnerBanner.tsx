import Image from "next/image";
import Link from "next/link";
import React from "react";

const PerfectPartnerBanner = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto w-full h-[320px] md:h-[300px] overflow-hidden flex items-center justify-center">
      <Image
        src="/CTA.png"
        alt="letsoutsource"
        fill
        className="object-cover"
        priority
      />
      <div className="relative text-center text-white z-10 px-4">
        <h2 className="font-sora font-bold text-[36px] md:text-[48px] leading-[46px] md:leading-[56px] tracking-[-1.28px]">
          Perfect Outsourcing
          <br />
          Partner
        </h2>
        <div className="relative inline-block mt-8">
          <Link
            href="/contact"
            className="cursor-pointer border-[1.5px] border-white rounded-[233px] px-5 py-2 flex items-center justify-center gap-2 mx-auto hover:bg-[#d7d7d7f4] hover:text-black transition-all"
          >
            Request a Quote
            <Image
              src="/tiltedarrowright.png"
              alt="arrow"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
          <Image
            src="/arrowbottom.png"
            alt="arrow pointing to button"
            width={80}
            height={80}
            className="absolute right-[-110px] -top-0.5 -translate-y-1/2 rotate-[-10deg] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};
export default PerfectPartnerBanner;
