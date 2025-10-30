"use client";
import React from "react";
const RecentOpenings = () => {
  const jobs = [
    {
      location: "Rawalpindi",
      timeAgo: "3 days ago",
      title: "iCabbi Dispatcher",
      description:
        "Handle client inquiries efficiently and provide top-quality support for our customers.",
      positions: "1 Position",
    },
    {
      location: "Islamabad",
      timeAgo: "2 days ago",
      title: "Taxi Dispatcher",
      description:
        "A Taxi Dispatcher assigns drivers and manages bookings to ensure smooth, timely service.",
      positions: "1 Position",
    },
    {
      location: "Nowshera",
      timeAgo: "4 days ago",
      title: "iCabbi Operator",
      description:
        "Handle client inquiries efficiently and provide top-quality support for our customers.",
      positions: "1 Position",
    },
  ];
  const handleApply = (jobTitle: string, location: string) => {
    const message = `Hello! I'm interested in applying for the ${jobTitle} position in ${location}. Could you please provide more details about the application process?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/441623396943?text=${encodedMessage}`, "_blank");
  };
  return (
    <div className="max-w-[1200px] mx-auto text-center py-2 sm:py-16 md:py-20 px-2 sm:px-0">
      <p className="text-[#000000B8] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] uppercase">
        Jobs Position
      </p>
      <h2 className="text-black font-sora font-semibold text-[32px] sm:text-[36px] md:text-[44px] leading-[110%] mt-2 mb-3 sm:mb-4">
        Recent Job Openings
      </h2>
      <p className="text-[#0000008A] font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[27px] max-w-[90%] sm:max-w-[80%] md:max-w-[620px] mx-auto">
        Our specialized email support delivers fast, accurate, and professional
        responses, helping you build stronger customer relationships and
        maintain clear communication.
      </p>
      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#FAFAFA] border border-[#E6E6E6] rounded-lg text-left flex flex-col w-full sm:w-[380px] md:w-[400px]"
          >
            <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 pt-4 sm:pt-5">
              <p className="text-[#000000B8] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
                {job.timeAgo}
              </p>
              <p className="text-[#000000B8] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
                {job.location}
              </p>
            </div>
            <div className="px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-9">
              <h3 className="text-black font-sora font-semibold text-[24px] sm:text-[26px] md:text-[28px] leading-[100%] mb-2 sm:mb-3">
                {job.title}
              </h3>
              <p className="text-[#0000008A] font-normal text-[13px] sm:text-[14px] leading-[120%] max-w-[95%] sm:max-w-[380px]">
                {job.description}
              </p>
            </div>
            <div className="bg-[#F0F0F0] flex justify-between items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-b-lg">
              <div className="bg-[#FE9C0029] border border-[#FE9C0070] text-[#000000] rounded-[32px] px-3 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-sm font-medium">
                {job.positions}
              </div>
              <button
                onClick={() => handleApply(job.title, job.location)}
                className="bg-[#FE9C00] text-black text-[12px] sm:text-sm font-medium rounded-[8px] px-3 sm:px-4 py-1.5 sm:py-2 hover:opacity-90 transition"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOpenings;
