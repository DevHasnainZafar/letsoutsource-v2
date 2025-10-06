"use client";
import React from "react";
import Image from "next/image";

const WhoToChoose = () => {
  const cards = [
    {
      id: 1,
      title: "Customer Care & Support",
      description:
        "Exceptional customer care to boost satisfaction and enhance long-term customer loyalty for your business growth.",
      img: "/coworking.png",
    },
    {
      id: 2,
      title: "Reliable Technical Support",
      description:
        "Reliable technical support that swiftly resolves issues and keeps your operations running smoothly.",
      img: "/callingagent.png",
    },
    {
      id: 3,
      title: "24/7 Availability Support",
      description:
        "Round-the-clock support to ensure your business operates efficiently and is always up and running safely.",
      img: "/availableman.png",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto py-16 text-center">
      <p className="text-[#000000B8] font-medium text-[14px] leading-6 font-sora">
        WHO TO CHOOSE US
      </p>

      <h2 className="text-[#000] font-semibold text-[40px] leading-[100%] mt-2 font-sora">
        Trusted Partner in
        <br />
        Outsourcing
      </h2>

      <p className="text-[#0000008A] mt-2 text-[14px] leading-6 max-w-[800px] mx-auto font-sora font-normal">
        Our skilled operators specialize in managing industry-leading systems
        like iCabbi, Autocab, and CabTreasure. With their expertise, we ensure
        every ride is dispatched smoothly, accurately, and on time—providing
        both drivers and passengers with a reliable experience.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative h-[600px] flex flex-col items-center justify-end text-white overflow-hidden 
              ${index === 0 ? "border-r-2 border-white" : ""}
              ${index === 1 ? "border-r-2 border-white" : ""}
              ${index === 2 ? "border-l-2 border-white" : ""}
            `}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="absolute inset-0 -z-10 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]" />

            {/* Centered Number Circle */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#FFFFFF29] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-white text-[28px] font-semibold font-sora">
                {card.id}
              </span>
            </div>

            <div className="p-6 z-10">
              <h3 className="font-semibold text-[22px] leading-tight mb-2 font-sora">
                {card.title}
              </h3>
              <p className="text-[#FFFFFF8A] text-[14px] leading-6 font-sora">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoToChoose;
