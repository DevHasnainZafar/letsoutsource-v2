"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const HomeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "We rely on Lets Outsource to manage our taxi-booking support, and they’ve been exceptional. Their staff are well-trained, friendly, and always go the extra mile for our passengers. They now handle our operations 24/7.",
      avatar: "/simon.png",
      name: "Simon Stiff",
      title: "Fleet Owner, Cambridgeshire",
    },
    {
      text: "We’ve worked with several outsourcing firms before, but Lets Outsource truly stands out. Their PK-based team coordinates seamlessly with our UK operations and provides 24/7 booking support. A genuinely reliable partner.",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces",
      name: "Daniel Green",
      title: "Fleet Manager, Birmingham",
    },
    {
      text: "We moved our taxi booking, dispatch and operation handling to Lets Outsource and haven’t looked back. The team is professional, responsive and available anytime we request covers. Our drivers and passengers notice the difference.",
      avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      name: "Zia",
      title: "Director, uRido Taxis",
    },
    {
      text: "From iCabbi allocations to after-hours coverage, Lets Outsource delivers reliably every day. Clear communication, fast turnarounds and true 24/7 support. I would highly recommend them.",
      avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      name: "Rob",
      title: "Director, Saltire Private Hire",
    },
    {
      text: "We’ve worked with several outsourcing companies before, but Lets Outsource truly stands out. Their UK-based team coordination and 24/7 live support make them a reliable partner.",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces",
      name: "Oliver Smith",
      title: "Managing Director, Bristol",
    },
    {
      text: "Lets Outsource has transformed the way we manage customer calls. Their team is consistent, polite, and always professional. We’ve seen a big improvement in response times and passenger satisfaction.",
      avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      name: "Emma Wilson",
      title: "Operations Manager, Manchester",
    },
    {
      text: "Their 24/7 support service has been a game-changer for us. The Lets Outsource team handles after-hours bookings smoothly, and our drivers are very happy with their coordination.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop&crop=faces",
      name: "James Turner",
      title: "Owner, CityLine Cars",
    },
    {
      text: "Excellent communication and great attention to detail. The Lets Outsource staff blend perfectly with our in-house team, making our daily operations much easier to manage.",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces",
      name: "Sarah Mitchell",
      title: "Fleet Coordinator, Glasgow",
    },
    {
      text: "We started with a trial period, and within a few weeks we knew this was the right decision. Lets Outsource handles bookings efficiently, even during peak hours, without missing a beat.",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces",
      name: "David Roberts",
      title: "Director, Elite Cars London",
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
    <div className="bg-[#F5F5F5] min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-8 sm:pt-12 md:pt-16 pb-80 sm:pb-20 md:pb-90 px-2 sm:px-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20">
          <div className="md:w-[50%]">
            <p className="text-[13px] sm:text-[14px] font-medium mb-1 sm:mb-2 text-[#000000B8]">
              TESTIMONIALS
            </p>
            <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[32px] sm:leading-[38px] md:leading-[44px] mb-2 sm:mb-3 font-sora">
              Outsourcing that
              <br />
              Sounds Local.
              <br />
              Results that scale.
            </h1>
            <p className="text-[13px] sm:text-[14px] text-[#0000008A] max-w-[90%] sm:max-w-[80%] md:max-w-[400px] leading-[24px] sm:leading-[26px]">
              From taxi booking & dispatch solutions to customer support, and
              email handling, UK companies trust Lets Outsource to deliver 24/7
              coverage with trained, neutral British-accent operators.
            </p>
          </div>
          <div className="md:w-[50%] relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 sm:gap-8 md:gap-10 pb-4 sm:pb-6"
              style={{ scrollbarWidth: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[240px] sm:min-w-[260px] md:min-w-[270px] bg-white p-5 sm:p-6 md:p-7 flex flex-col gap-2 snap-center"
                  style={{ boxShadow: "0px 12px 32px 0px #00000014" }}
                >
                  <p className="text-[13px] sm:text-[14px] leading-[20px] sm:leading-6 mb-6 sm:mb-8">
                    {testimonial.text}
                  </p>
                  <div className="mt-auto">
                    <Image
                      height={500}
                      width={500}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full mb-3 sm:mb-4 object-cover"
                    />
                    <p className="font-semibold text-[13px] sm:text-[14px]">
                      {testimonial.name}
                    </p>
                    <p className="text-[11px] sm:text-[12px] text-[#0000008A]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-2 mt-3 sm:mt-4 ml-1 sm:ml-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-colors duration-300 ${
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
