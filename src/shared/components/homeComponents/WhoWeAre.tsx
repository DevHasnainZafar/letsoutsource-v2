import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-[#F5F5F5] pt-30 pb-46 px-6">
      <div className="text-center mb-16">
        <p className="text-[14px] font-medium leading-[24px] text-[#000000B8]">
          Who We Are
        </p>
        <h2 className="font-sora font-semibold text-[40px] leading-[100%] text-[#000000] mt-2">
          Trusted Partner in <br /> Outsourcing
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-14 py-8">
        <div className="md:w-[50%] relative flex justify-center items-center">
          <Image
            width={250}
            height={200}
            src="/taxi.png"
            alt="Team collaboration"
            className="absolute top-18 left-0 object-cover w-[400px] h-[260px] opacity-90"
          />
          <Image
            width={250}
            height={200}
            src="/busywoman.png"
            alt="Work together"
            className="absolute -top-6 left-22 w-[390px] h-[300px] object-cover opacity-90"
          />
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[460px] h-[320px] object-cover absolute top-17 left-35 "
          />
        </div>

        <div className="md:w-[42%] mt-8 text-[#000000B8] text-[16px] leading-[24px] space-y-4">
          <p>
            Our skilled operators specialize in managing industry-leading
            systems like iCabbi, Autocab, and CabTreasure. With their expertise,
            we ensure every ride is dispatched smoothly, accurately, and on
            time—providing both drivers and passengers with a reliable
            experience.
          </p>
          <p>
            We provide affordable remote staffing solutions that cut overhead
            and boost efficiency. Our trained professionals integrate smoothly
            into your workflow, so you can focus on growth.
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
