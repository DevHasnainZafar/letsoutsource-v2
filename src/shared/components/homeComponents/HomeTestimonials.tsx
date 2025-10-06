"use client";
import React, { useState, useRef, useEffect } from "react";

const HomeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "Email support has never been smoother. Letsoutsource handles all our email queries efficiently, and our customers in Glasgow have noticed the difference. Highly recommend them.",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=faces",
      name: "Emily Johnson",
      title: "Marketing Director, Glasgow",
    },
    {
      text: "The live support team at Letsoutsource has transformed our client communication. Our customers in Manchester love how quickly their issues are resolved — it's top-notch service.",
      avatar:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&h=200&fit=crop&crop=faces",
      name: "Sophie Evans",
      title: "Customer Experience Lead, Manchester",
    },
    {
      text: "We've been using Letsoutsource for our customer support, and honestly, it's been brilliant. The response time and professionalism from their team are exactly what we needed to scale efficiently.",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces",
      name: "James Walker",
      title: "Operations Manager, London",
    },
    {
      text: "We rely on Letsoutsource for managing our taxi booking support, and they’ve been exceptional. Their staff are trained, friendly, and always go the extra mile for our riders.",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces",
      name: "Daniel Green",
      title: "Fleet Manager, Birmingham",
    },
    {
      text: "We’ve worked with several outsourcing companies before, but Letsoutsource truly stands out. Their UK-based team coordination and 24/7 live support make them a reliable partner.",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces",
      name: "Oliver Smith",
      title: "Managing Director, Bristol",
    },
  ];
  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstElementChild?.clientWidth || 1;
      const index = Math.round(container.scrollLeft / cardWidth);
      setCurrentSlide(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-36 pb-90">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-[50%]">
            <p className="text-[14px] font-medium mb-1 text-[#000000B8]">
              TESTIMONIALS
            </p>
            <h1 className="font-semibold text-[40px] leading-[44px] mb-3 font-sora">
              Smart outsourcing
              <br />
              solutions for your
              <br />
              success.
            </h1>
            <p className="text-[14px] text-[#0000008A] max-w-[400px] leading-[26px]">
              From customer support to taxi booking and email support,
              Letsoutsource helps UK companies deliver exceptional service
              around the clock with trained professionals.
            </p>
          </div>
          <div className="md:w-[50%] relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-10 pb-6"
              style={{ scrollbarWidth: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[270px] bg-white p-7 flex flex-col gap-2 snap-center"
                  style={{ boxShadow: "0px 12px 32px 0px #00000014" }}
                >
                  <p className="text-[14px] leading-6 mb-8">
                    {testimonial.text}
                  </p>
                  <div className="mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mb-4 object-cover"
                    />
                    <p className="font-semibold text-[14px]">
                      {testimonial.name}
                    </p>
                    <p className="text-[12px] text-[#0000008A]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-2 mt-4 ml-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-black" : "bg-[#00000033]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
