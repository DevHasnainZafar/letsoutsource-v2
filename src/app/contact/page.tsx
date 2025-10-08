"use client";
import { useState, useEffect } from "react";
const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/hero1.png", "/hero2.png", "/hero3.png"];
  const slideTexts = [
    { title: "Trusted Partner in\nOutsourcing" },
    { title: "Reliable Support,\nAnytime" },
    { title: "Your Business, Our\nResponsibility" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {images.map((img, index) => (
        <div
          key={index}
          className={`fixed inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative z-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-8 pt-40 pb-20 flex flex-col lg:flex-row justify-between gap-12 min-h-screen">
          <div className="w-full lg:w-1/2 flex flex-col justify-end items-center text-center mb-2">
            <div>
              <h1 className="text-white text-center text-[44px] font-semibold leading-[120%] whitespace-pre-line">
                {slideTexts[currentSlide].title}
              </h1>
              <div className="flex justify-center gap-3 mt-12">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === currentSlide
                        ? "w-16 bg-white"
                        : "w-8 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end items-end">
            <div className="bg-[#FAFAFA] border border-[#E6E6E6] rounded-3xl max-w-[520px] w-full px-8 py-10 shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-[#000000] text-[24px] font-semibold leading-[100%] text-center">
                Ready To Chat
              </h2>
              <div className="mt-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John"
                      className="w-full px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="John@gmail.com"
                      className="w-full px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Your main Object"
                    className="w-full px-2 py-2 border border-[#EBEBEB] rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message here.."
                    className="w-full px-2 py-2 h-[120px] border border-[#EBEBEB] rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white resize-none outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-4 bg-[#FE9C00] text-white text-[16px] rounded-lg cursor-pointer hover:opacity-90 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-8 py-20">
          <div className="flex justify-end">
            <div
              className="max-w-[520px] w-full px-8 py-10 rounded-3xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(60px)",
                border: "1px solid rgba(230, 230, 230, 0.32)",
              }}
            >
              <h2 className="text-white text-[28px] font-semibold leading-[100%] text-center mb-10">
                Contact Us
              </h2>
              <div className="space-y-8">
                <div>
                  <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                    Address
                  </label>
                  <p className="text-white text-[20px] font-semibold leading-[100%]">
                    D739 Arbab Street, Block D, 5th Road Commercial market
                    Rawalpindi
                  </p>
                </div>
                <div>
                  <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                    Email
                  </label>
                  <p className="text-white text-[20px] font-semibold leading-[100%]">
                    jsher@letsoutsource.co.uk
                  </p>
                </div>
                <div>
                  <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                    Phone
                  </label>
                  <p className="text-white text-[20px] font-semibold leading-[100%]">
                    01623 396 943
                  </p>
                </div>
                <div>
                  <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                    Opening Hours
                  </label>
                  <p className="text-white text-[20px] font-semibold leading-[100%] mb-2">
                    Monday - Sunday
                  </p>
                  <p className="text-white text-[20px] font-semibold leading-[100%]">
                    24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
