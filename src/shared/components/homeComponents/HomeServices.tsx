"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeServices = () => {
  const slides = [
    {
      title: (
        <>
          <span style={{ color: "#FE9C00" }}>Taxi Booking</span>{" "}
          <span className="text-white">Services</span>
        </>
      ),
      text: "We handle platforms like iCabbi, Autocab, and CabTreasure to streamline ride scheduling, dispatching, and fleet management — making taxi operations more efficient and reliable.",
      image: "/hero1.png",
      link: "/taxiService",
    },
    {
      title: (
        <>
          <span style={{ color: "#FE9C00" }}>Outsourcing</span>{" "}
          <span className="text-white">Services</span>
        </>
      ),
      text: "We help businesses delegate complex tasks effortlessly. From administrative support to data processing, our trained remote teams deliver results that improve efficiency and reduce costs.",
      image: "/busywoman.png",
      link: "/outsourcingService",
    },
    {
      title: (
        <>
          <span style={{ color: "#FE9C00" }}>Email Support</span>{" "}
          <span className="text-white">Services</span>
        </>
      ),
      text: "Our professionals handle email queries with speed and precision, ensuring your customers always get timely and accurate responses — enhancing your brand's reputation for reliability.",
      image: "/smilingwoman.png",
      link: "/emailSupport",
    },
    {
      title: (
        <>
          <span style={{ color: "#FE9C00" }}>Customer</span>{" "}
          <span className="text-white">Support</span>
        </>
      ),
      text: "We provide 24/7 live customer support solutions that keep your clients happy and loyal. Our dedicated agents build trust with every interaction, creating long-term relationships.",
      image: "/hero2.png",
      link: "/customerSupport",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  const currentSlide = slides[currentIndex];
  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Background"
            fill
            priority={index === 0}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>

      <div className="relative z-10 flex items-center min-h-screen max-w-[1200px] mx-auto ">
        <div className="w-full max-w-[600px]">
          <div className="mt-28">
            <p className="text-[14px] font-medium leading-[24px] tracking-normal mb-1 text-[#FFFFFFB8]">
              SERVICES
            </p>
            <h1 className="text-white text-[40px] md:text-[42px] font-bold leading-tight mb-8">
              Smart outsourcing
              <br />
              solutions for your
              <br />
              success.
            </h1>
          </div>
          <div className="mt-45">
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(
                      (currentIndex - 1 + slides.length) % slides.length
                    );
                    setIsTransitioning(false);
                  }, 400);
                }}
                className="w-[48px] h-[48px] rounded-full cursor-pointer border border-white flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Previous"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex((currentIndex + 1) % slides.length);
                    setIsTransitioning(false);
                  }, 400);
                }}
                className="w-[48px] h-[48px] rounded-full bg-white border border-white/30 flex items-center justify-center hover:bg-white/80 cursor-pointer transition-all"
                aria-label="Next"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Slide content */}
            <div
              className={`transition-all duration-500 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-x-[-80px]"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <h2 className="text-[32px] font-semibold leading-[100%] tracking-normal mb-4 font-sora">
                {currentSlide.title}
              </h2>

              <p className="text-[14px] max-w-[400px] font-normal leading-[28px] tracking-normal mb-6 text-[#FFFFFF8A]">
                {currentSlide.text}
              </p>

              <div className="border-b-[1.5px] border-[#FFFFFF52] w-fit pb-1 hover:border-white cursor-pointer">
                <Link
                  href={currentSlide.link}
                  className="font-sora text-white text-[18px] font-normal leading-[100%] tracking-normal hover:opacity-80 transition-opacity"
                >
                  Learn more.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
