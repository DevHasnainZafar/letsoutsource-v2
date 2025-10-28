import Image from "next/image";
import React from "react";

const TaxiServiceSteps = () => {
  return (
    <section className="w-full py-10 sm:py-25 bg-[#F2F2F2] px-4">
      <div className="max-w-[1200px] mx-auto">
        <p
          className="font-poppins font-medium text-[16px] leading-[24px] text-center text-[#000000B8] mb-2"
          aria-hidden
        >
          HOW WE OPERATE
        </p>
        <h2 className="font-sora font-semibold text-[32px] sm:text-[44px] leading-[120%] text-center text-[#000000] mb-3">
          Simplifying Workflows, <br /> Maximizing Impact.
        </h2>
        <p className="text-center text-[16px] sm:text-[18px] leading-[27px] text-[#0000008A] max-w-[550px] mx-auto mb-12 sm:mb-16">
          Discover the core tools designed to improve your breathing, reduce
          stress, and enhance your daily health routine.
        </p>
        <Image
          src="/outsoursingsteps.png"
          alt="Let's Outsource Taxi Service Steps"
          width={1200}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TaxiServiceSteps;
