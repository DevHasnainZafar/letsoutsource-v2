"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [flipStates, setFlipStates] = useState<number[]>([]);

  const images = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const stats = [
    {
      value: "06",
      label: "Services",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
    {
      value: "62",
      label: "Clients",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
    {
      value: "24",
      label: "Availability",
      icon: "/circlearrowright.png",
      suffix: "/7",
    },
    {
      value: "130",
      label: "Agents",
      icon: "/circlearrowright.png",
      suffix: "+",
    },
  ];
  useEffect(() => {
    setFlipStates(Array(stats.length).fill(0));
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    const flipRandomStat = () => {
      const index = Math.floor(Math.random() * stats.length);
      if (stats[index].label !== "Availability") {
        setFlipStates((prev) => {
          const updated = [...prev];
          updated[index] += 1;
          return updated;
        });
      }
    };
    const scheduleNextFlip = () => {
      const randomDelay = 800 + Math.random() * 800;
      return setTimeout(() => {
        flipRandomStat();
        timeoutId = scheduleNextFlip();
      }, randomDelay);
    };

    let timeoutId = scheduleNextFlip();
    return () => clearTimeout(timeoutId);
  }, []);

  const getImageAnimation = (index: number) => {
    if (index === 0) return "animate-kenBurnsUp";
    if (index === 1) return "animate-kenBurnsLeftToRight";
    return "animate-kenBurnsRightToLeft";
  };

  return (
    <>
      <style jsx global>{`
        /* Background Animations */
        @keyframes kenBurnsUp {
          0% {
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1.15) translateY(-3%);
          }
        }

        @keyframes kenBurnsLeftToRight {
          0% {
            transform: scale(1.15) translateX(-5%);
          }
          100% {
            transform: scale(1.15) translateX(5%);
          }
        }

        @keyframes kenBurnsRightToLeft {
          0% {
            transform: scale(1.15) translateX(5%);
          }
          100% {
            transform: scale(1.15) translateX(-5%);
          }
        }

        .animate-kenBurnsUp {
          animation: kenBurnsUp 5000ms ease-out forwards;
        }
        .animate-kenBurnsLeftToRight {
          animation: kenBurnsLeftToRight 5000ms ease-out forwards;
        }
        .animate-kenBurnsRightToLeft {
          animation: kenBurnsRightToLeft 5000ms ease-out forwards;
        }

        /* Digit Flip Animation */
        @keyframes digitFlip {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(90deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        .digit {
          display: inline-block;
          perspective: 800px;
          transform-origin: center;
        }

        .flip {
          animation: digitFlip 0.35s ease-in-out;
          display: inline-block;
        }
      `}</style>
      <div className="relative w-full h-[90vh] md:h-[800px] overflow-hidden flex flex-col">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`letsoutsource hero ${index + 1}`}
              fill
              className={`object-cover object-center ${
                index === currentImage ? getImageAnimation(index) : ""
              }`}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/75 -z-10" />
        <div className="flex flex-col justify-between flex-1 text-white text-center">
          <div className="flex flex-col items-center justify-center flex-1 space-y-4 px-4">
            <h1 className="font-sora font-semibold text-[36px] md:text-[46px] leading-[46px] md:leading-[56px] tracking-[-1.28px]">
              Perfect Outsourcing <br />
              Partner
            </h1>
            <p className="max-w-[390px] text-[#FFFFFFA8] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-normal">
              Since 2019, Let's Outsource has been providing tailored
              outsourcing solutions, from taxi booking and remote staff hiring
              to reliable customer support.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer border-[1.5px] border-white rounded-[233px] px-4 py-2 flex items-center justify-center gap-2 mx-auto hover:bg-[#d7d7d7f4] hover:text-black transition-all duration-300"
            >
              Request a Quote
              <Image
                src="/arrowrightorange.png"
                alt="arrow"
                width={30}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex text-white text-center justify-center items-center gap-6 md:gap-16 lg:gap-20 pb-16 px-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <h1 className="font-sora font-semibold text-[28px] md:text-[48px] leading-[38px] md:leading-[52px] tracking-[-1.28px]">
                  {item.value.split("").map((digit, dIndex) => (
                    <span
                      key={`${digit}-${flipStates[index]}-${dIndex}`}
                      className={`digit ${
                        item.label !== "Availability" ? "flip" : ""
                      }`}
                    >
                      {digit}
                    </span>
                  ))}
                  {item.suffix}
                </h1>

                <div className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="object-contain w-4 h-4 md:w-5 md:h-5"
                  />
                  <p className="text-[13px] md:text-[18px]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
