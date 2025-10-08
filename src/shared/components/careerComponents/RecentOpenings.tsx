import React from "react";

const RecentOpenings = () => {
  const jobs = [
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
      title: "ICabbi Operator",
      description:
        "Handle client inquiries efficiently and provide top-quality support for our customers.",
      positions: "1 Position",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto text-center py-20">
      <p className="text-[#000000B8] font-medium text-[16px] leading-[24px] uppercase">
        Jobs Position
      </p>
      <h2 className="text-black font-sora font-semibold text-[44px] leading-[110%] mt-2 mb-4">
        Recent Job Openings
      </h2>
      <p className="text-[#0000008A] font-normal text-[18px] leading-[27px] max-w-[620px] mx-auto">
        Our specialized email support delivers fast, accurate, and professional
        responses, helping you build stronger customer relationships and
        maintain clear communication.
      </p>
      <div className="mt-16 flex w-[820px] gap-8 justify-center">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#FAFAFA] border border-[#E6E6E6] rounded-lg text-left flex flex-col"
          >
            {" "}
            <div className="flex justify-between items-center px-6 pt-5">
              <p className="text-[#000000B8] font-normal text-[16px] leading-[24px]">
                {job.timeAgo}
              </p>
              <p className="text-[#000000B8] font-normal text-[16px] leading-[24px]">
                {job.location}
              </p>
            </div>
            <div className="px-6 pt-6 pb-9">
              <h3 className="text-black font-sora font-semibold text-[28px] leading-[100%] mb-3">
                {job.title}
              </h3>
              <p className="text-[#0000008A] font-normal text-[14px] leading-[120%] max-w-[380px]">
                {job.description}
              </p>
            </div>
            <div className="bg-[#F0F0F0] flex justify-between items-center px-6 py-4 rounded-b-lg ">
              <div className="bg-[#FE9C0029] border border-[#FE9C0070] text-[#000000] rounded-[32px] px-4 py-2 text-sm font-medium">
                {job.positions}
              </div>
              <button className="bg-[#FE9C00] text-black text-sm font-medium rounded-[8px] px-4 py-2 hover:opacity-90 transition">
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
