"use client";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="relative bg-white max-w-[1200px] mx-auto  px-4 text-center py-28">
      <p className="text-[#000000B8] font-medium text-[14px] leading-6 font-sora">
        CONTACT US
      </p>
      <div className="">
        <Image
          src="/bgorange.png"
          alt="orange glow background"
          fill
          className="object-contain mt-30"
        />
      </div>
      <p className="text-[#0000008A] text-[14px] leading-7 mt-1 font-sora font-normal max-w-[800px] mx-auto">
        Our skilled operators specialize in managing industry-leading systems
        like iCabbi, Autocab, and <br /> CabTreasure. With their expertise, we
        ensure every ride is dispatched smoothly, accurately, and on
        time—providing both drivers and passengers with a reliable experience.
      </p>
      <div className="relative mt-25 bg-[#FAFAFA] border border-[#E6E6E6] rounded-3xl max-w-[600px] mx-auto px-8 py-10 shadow-md hover:shadow-xl">
        <div className="flex justify-center mb-4 text-center">
          <Image
            src="/blacklogo.png"
            alt="letsoutsource logo"
            width={120}
            height={40}
          />
        </div>
        <h2 className="text-[#000000] text-[24px] font-semibold leading-[100%] font-sora">
          Ready To Chat
        </h2>
        <p className="text-[#0000008A] text-[14px] leading-7 mt-2 font-sora font-normal max-w-sm text-center mx-auto">
          Exceptional customer care to boost satisfaction and enhance long-term
          customer loyalty.
        </p>
        <form className="mt-8 space-y-5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John"
                className="w-full h-10.5 px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="John@gmail.com"
                className="w-full h-10.5 px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block  text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Your main Object"
              className="w-full h-10.5 px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here.."
              className="w-full px-2 py-2 h-[120px] border border-[#EBEBEB] rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white resize-none outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#FE9C00] text-white text-[16px] font-sora rounded-lg cursor-pointer hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
