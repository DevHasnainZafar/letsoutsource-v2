"use client";
import React from "react";
import Image from "next/image";

const WhyToChoose = () => {
  const cards = [
    {
      id: 1,
      title: "Customer Care & Support",
      description:
        "Exceptional customer care to boost satisfaction and enhance long-term customer loyalty for your business growth.",
      img: "/coworking.avif",
    },
    {
      id: 2,
      title: "Taxi Service Outsourcing",
      description:
        "Our skilled operators manage dispatch systems to ensure every ride is booked and assigned smoothly, accurately, and on time.",
      img: "/callingagent.avif",
    },
    {
      id: 3,
      title: "24/7 Availability Support",
      description:
        "Round-the-clock support to ensure your business operates efficiently and is always up and running safely.",
      img: "/availableman.avif",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto py-8 sm:py-10 md:py-12 px-2 sm:px-0 text-center">
      <p className="text-[#000000B8] font-medium text-[13px] sm:text-[14px] leading-6 font-sora">
        WHY TO CHOOSE US
      </p>

      <h2 className="text-[#000] font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[100%] mt-2 font-sora">
        Reliable Ally in
        <br />
        Customer Care
      </h2>

      <p className="text-[#0000008A] mt-2 text-[13px] sm:text-[14px] leading-6 max-w-[90%] sm:max-w-[80%] md:max-w-[800px] mx-auto font-sora font-normal">
        Our skilled operators specialize in managing industry-leading systems
        like iCabbi, Autocab, and CabTreasure. With their expertise, we ensure
        every ride is dispatched smoothly, accurately, and on time—providing
        both drivers and passengers with a reliable experience.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-1">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative h-[500px] sm:h-[550px] md:h-[600px] flex flex-col items-center justify-end text-white overflow-hidden 
              ${index === 0 ? "md:border-r-2 border-white" : ""}
              ${index === 1 ? "md:border-r-2 border-white" : ""}
              ${index === 2 ? "md:border-l-2 border-white" : ""}
            `}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="absolute inset-0 -z-10 object-cover object-center sm:object-top "
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]" />
            <div className="absolute top-4 sm:top-5 md:top-6 left-1/2 -translate-x-1/2 bg-[#FFFFFF29] w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full flex items-center justify-center">
              <span className="text-white text-[24px] sm:text-[26px] md:text-[28px] font-semibold font-sora">
                {card.id}
              </span>
            </div>

            <div className="p-4 sm:p-5 md:p-6 z-10">
              <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight mb-1 sm:mb-2 font-sora">
                {card.title}
              </h3>
              <p className="text-[#FFFFFF8A] text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-sora">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyToChoose;
