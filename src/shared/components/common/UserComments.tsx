import PerfectPartnerBanner from "./PerfectPartnerBanner";
import Image from "next/image";
const comments = [
  {
    name: "Simon Stiff",
    role: "Fleet Owner, Cambridgeshire",
    avatar: "/simon.png",
    text: "We rely on Lets Outsource to manage our taxi-booking support, and they’ve been exceptional. Their staff are well-trained, friendly, and always go the extra mile for our passengers. They now handle our operations 24/7 now.",
  },
  {
    name: "Zia",
    role: "Director, uRido Taxis",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    text: "We moved our taxi booking, dispatch and operation handling to Lets Outsource and haven’t looked back. The team is professional, responsive and available anytime we request for covers and our drivers and passengers notice the difference.",
  },
  {
    name: "Rob",
    role: "Director Saltire Private Hire",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    text: "From iCabbi allocations to after-hours coverage, Lets Outsource delivers reliably every day. Clear communication, fast turnarounds and true 24/7 support. I would highly recommend.",
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
    text: "Their support helped us reduce call waiting times by over 60%. What impressed me most is they treat our customers as their own.",
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
    name: "James Turner",
    role: "Owner, CityLine Cars",
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
    role: "Customer Lead, Manchester",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    text: "The live support team at Letsoutsource has transformed our client communication. Our customers in Manchester love how quickly their issues are resolved — it's top-notch service.",
  },
  {
    name: "Grace Foster",
    role: "Head of Support, UK",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=200&h=200",
    text: "Live chat, email, and call assistance — all handled effortlessly in one place. Our support communication is smoother, and team response times are faster.",
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
    <section className="relative w-full sm:pt-12 pt-10 pb-80 sm:pb-80 bg-white">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-0">
        <p className="font-poppins font-medium text-[16px] leading-[24px] text-center text-[#000000B8] mb-2 uppercase">
          Testimonial
        </p>
        <h2 className="font-sora font-semibold text-[30px] sm:text-[44px] leading-[100%] text-center text-[#000000] mb-3">
          Here's what our users are <br /> chatting about!
        </h2>
        <p className="text-center text-[14px] sm:text-[16px] leading-[27px] text-[#0000008A] max-w-[590px] mx-auto sm:mb-16 mb-10">
          See real experiences and feedback from UK customers and business
          partners as they share how Let’sOutsource supports their daily
          operations and communication.
        </p>
        <div className="lg:hidden flex flex-col gap-6 mt-0 sm:mt-10">
          {comments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="border border-[#E5E7EB99] rounded-xl p-5 flex flex-col gap-4 bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    width={500}
                    height={500}
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
                      <Image
                        width={500}
                        height={500}
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
      <div className="absolute left-0 right-0 sm:-bottom-20 bottom-0">
        <PerfectPartnerBanner />
      </div>
    </section>
  );
};

export default UserComments;
