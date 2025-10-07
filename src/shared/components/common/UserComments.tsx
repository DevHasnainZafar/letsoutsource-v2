"use client";
import React from "react";
import PerfectPartnerBanner from "./PerfectPartnerBanner";
const comments = [
  {
    name: "James Walker",
    role: "Operations Manager, London",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200",
    text: "Let’sOutsource has completely transformed how our drivers handle bookings.",
  },
  {
    name: "Amelia Green",
    role: "Customer Support Lead, LetsOutsource UK",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
    text: "I’ve recommended Let’sOutsource to several of my clients, and every single one of them has seen a major improvement in customer service efficiency. Their adaptability and understanding of business processes stand out. They don’t just provide support — they truly partner with you to understand your operations and improve them.",
  },
  {
    name: "Oliver Hughes",
    role: "Operations Manager, UKRide",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=faces&fit=crop&w=200&h=200",
    text: "We handle hundreds of rides daily, and managing them used to be stressful.",
  },
  {
    name: "Sophie Turner",
    role: "Founder, TaxiGo London",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
    text: "Let’sOutsource has been a game changer for us. Their support is simply outstanding.",
  },
  {
    name: "Harry Evans",
    role: "Director, CallServe Ltd.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=200&h=200",
    text: "Their  support helped us reduce call waiting times by over 60%. What impressed me most is they treat our customers as their own. ",
  },
  {
    name: "Ella Morgan",
    role: "Business Consultant, UK",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=faces&fit=crop&w=200&h=200",
    text: "Our support agents can now handle customer queries faster and with more confidence.",
  },
  {
    name: "Liam Walker",
    role: "Support Agent, LetsOutsource UK",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=faces&fit=crop&w=200&h=200",
    text: "Handling live calls and chats used to feel overwhelming. Now it’s smooth and well-organized. The system tracks everything we need, and the response time has improved drastically.",
  },
  {
    name: "Charlotte Bennett",
    role: "Taxi Owner, BristolCabs",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=200&h=200",
    text: "We’ve used multiple booking solutions before, but none came close to the reliability and simplicity of Let’sOutsource.",
  },
  {
    name: "George Taylor",
    role: "Customer, Manchester",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&w=200&h=200",
    text: "Booking a cab now takes just a few seconds, and the drivers are always polite and punctual. I’ve been using services that rely on Let’sOutsource for over a year now, and the experience has been flawless. Their focus on quick response times and accurate tracking makes every ride easy and stress-free. It’s not just outsourcing — it’s real partnership.",
  },
  {
    name: "Sophie Evans",
    role: "Customer Experience Lead, Manchester",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    text: "The live support team at Letsoutsource has transformed our client communication. Our customers in Manchester love how quickly their issues are resolved — it's top-notch service.",
  },

  {
    name: "Grace Foster",
    role: "Head of Support,UK",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=200&h=200",
    text: "Live chat, email, and call assistance — all handled effortlessly in one place. Our support communication is smoother, and team response times are faster. ",
  },
  {
    name: "Thomas Davies",
    role: "Fleet Coordinator, London",
    avatar:
      "https://images.unsplash.com/photo-1604079628040-94301bb21b91?crop=faces&fit=crop&w=200&h=200",
    text: "Before Let’sOutsource, our fleet operations were chaotic — drivers missing shifts, delayed communication, constant confusion. Since partnering with them, we’ve seen remarkable improvement. The response rate is fast, and the overall structure they’ve provided makes managing a large fleet feel easy. It’s the kind of reliability we always wanted.",
  },
];

const UserComments = () => {
  const col1 = comments.filter((_, i) => i % 4 === 0);
  const col2 = comments.filter((_, i) => i % 4 === 1);
  const col3 = comments.filter((_, i) => i % 4 === 2);
  const col4 = comments.filter((_, i) => i % 4 === 3);
  const columns = [col1, col2, col3, col4];

  return (
    <section className="relative w-full pt-24 pb-80 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="font-poppins font-medium text-[16px] leading-[24px] text-center text-[#000000B8] mb-2 uppercase">
          Testimonial
        </p>
        <h2 className="font-sora font-semibold text-[44px] leading-[100%] text-center text-[#000000] mb-3">
          Here's what our users are <br /> chatting about!
        </h2>
        <p className="text-center text-[16px] leading-[27px] text-[#0000008A] max-w-[590px] mx-auto mb-16">
          See real experiences and feedback from UK customers and business
          partners as they share how Let’sOutsource supports their daily
          operations and communication.
        </p>
        <div className="hidden lg:grid grid-cols-4 gap-6 items-start mt-20">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`flex flex-col gap-6 ${
                i === 1 ? "mb-10" : i === 2 ? "mb-14" : ""
              }`}
            >
              {col.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB99] rounded-xl p-5 flex flex-col gap-4 bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-sora text-[14px] leading-[21px] text-[#000000]">
                        {item.name}
                      </p>
                      <p className="font-sora text-[13px] leading-[20px] text-[#0000008A]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-sora text-[14px] leading-[22px] text-[#000000A3]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 right-0 -bottom-20">
        <PerfectPartnerBanner />
      </div>
    </section>
  );
};

export default UserComments;
