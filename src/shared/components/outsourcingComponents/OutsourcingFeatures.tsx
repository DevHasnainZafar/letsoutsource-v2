"use client";
import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/handsicon.png",
    title: "Dedicated Support",
    description:
      "Our team provides 24/7 support to ensure your operations run smoothly.",
  },
  {
    icon: "/userdetailsicon.png",
    title: "Professional Experts",
    description:
      "Access a global pool of talent to handle specialized tasks for your business.",
  },
  {
    icon: "/spinicon.png",
    title: "Global Reach",
    description:
      "Expand your business with our comprehensive outsourcing solutions, anywhere in the world.",
  },
  {
    icon: "/tickicon.png",
    title: "Quality Assurance",
    description:
      "We ensure top-notch quality with our rigorous checks and balances.",
  },
];
const OutsourcingFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-30">
      <p
        className="font-poppins font-medium text-[16px] leading-[24px] uppercase text-center text-[#000000B8] mb-2"
        aria-hidden
      >
        WHY TO COOZE US
      </p>
      <h2 className="font-sora font-semibold text-[44px] leading-[100%] text-center text-[#000000] mb-3">
        Where Service Meets <br /> Excellence
      </h2>
      <p className="text-center text-[18px] leading-[27px] text-[#0000008A] max-w-[600px] mx-auto mb-12">
        Efficient, reliable, and cost-effective outsourcing solutions for your
        business needs.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x- gap-y-10 items-start justify-items-center mt-20 ">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`w-full max-w-[360px] rounded-2xl shadow-sm py-10 px-8 flex flex-col items-start text-left bg-[#F4F4F4] ${
              i === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="mb-6">
              <Image
                src={f.icon}
                alt={f.title}
                width={65}
                height={65}
                className="object-contain"
              />
            </div>
            <h3 className="font-sora font-semibold text-[22px] text-[#000000] mb-2">
              {f.title}
            </h3>
            <p className="text-[18px] leading-[22px] text-[#0000008A]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutsourcingFeatures;
