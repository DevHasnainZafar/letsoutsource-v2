"use client";
import Image from "next/image";
import React from "react";
const features = [
  {
    icon: "/handsicon.png",
    title: "Always-On Call Handling",
    description:
      "Your phones are answered by real people, in real time — no voicemails. We greet customers in your name and take action straight away.",
  },
  {
    icon: "/userdetailsicon.png",
    title: "Booking & Job Management",
    description:
      "We accurately take bookings, confirm times, note special requirements, and pass jobs into your system — no guesswork, no double-booked slots.",
  },
  {
    icon: "/spinicon.png",
    title: "Live Coordination",
    description:
      "We monitor jobs live, assign the right driver, and handle delays — so clients aren’t left waiting and drivers stay informed.",
  },
  {
    icon: "/tickicon.png",
    title: "Issue Resolution & Updates",
    description:
      "‘Where’s my driver?’ ‘I left something in the car.’ We handle these calmly and professionally — escalating to you only when truly needed.",
  },
];

const OutsourcingFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-10 sm:py-12 px-2 sm:px-0">
      <p
        className="font-poppins font-medium text-[16px] leading-[24px] uppercase text-center text-[#000000B8] mb-2"
        aria-hidden
      >
        WHY TO COOZE US
      </p>
      <h2 className="font-sora font-semibold text-[32px] sm:text-[44px] leading-[100%] text-center text-[#000000] mb-3">
        Where Service <br className="hidden sm:block"/> Meets Excellence
      </h2>
      <p className="text-center text-[16px] sm:text-[18px] leading-[27px] text-[#0000008A] max-w-[600px] mx-auto mb-12">
        We stop revenue leaks, extend your service hours, and ensure your
        customers feel looked after — without you needing to hire, train, or
        manage extra staff.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 items-start justify-items-center mt-10 lg:mt-10">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`w-full max-w-[390px] rounded-2xl shadow-sm py-10 px-8 flex flex-col items-start text-left bg-[#F4F4F4] ${
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
            <h3 className="font-sora font-semibold text-[20px] sm:text-[22px] text-[#000000] mb-2">
              {f.title}
            </h3>
            <p className="text-[16px] sm:text-[18px] leading-[22px] text-[#0000008A]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutsourcingFeatures;
