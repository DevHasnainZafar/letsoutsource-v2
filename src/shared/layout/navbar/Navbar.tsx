"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const careerStylePages = ["/career", "/privacypolicy", "/terms&conditions"];
  const isCareerStyle = careerStylePages.includes(pathname);
  const navLinks = [
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service", hasDropdown: true },
    { name: "Home", path: "/" },
  ];
  const dropdownLinks = [
    { name: "Taxi Booking Services", path: "/taxiService" },
    { name: "Outsourcing Services", path: "/outsourcingService" },
    { name: "Customer Support", path: "/customerSupport" },
    { name: "Email Support Services", path: "/emailSupport" },
    { name: "Live Chat Support", path: "/liveSupport" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const textColor = isCareerStyle ? "text-black" : "text-white";
  const borderColor = isCareerStyle ? "border-black" : "border-white";
  const bgColor = isCareerStyle
    ? isScrolled
      ? "bg-white/80 backdrop-blur-md"
      : "bg-transparent"
    : isScrolled
    ? "bg-black/10 backdrop-blur-md"
    : "bg-transparent";

  const logo = isCareerStyle ? "/blacklogo.png" : "/letsoutsourcelogo.png";
  const arrow = isCareerStyle ? "/arrowdownblack.png" : "/arrowdown.png";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full max-w-[1200px] mx-auto z-50 border-b-[1.5px] ${
        isCareerStyle ? "border-[#00000052]" : "border-[#FFFFFF52]"
      } pt-6 pb-4 transition-all duration-300 ${bgColor}`}
    >
      <div className="px-2 md:px-0 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="letsoutsource logo"
            height={100}
            width={100}
            className="mt-4"
          />
        </Link>{" "}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1.5 z-20"
        >
          <span
            className={`w-6 h-[2px] ${isCareerStyle ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`w-6 h-[2px] ${isCareerStyle ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`w-6 h-[2px] ${isCareerStyle ? "bg-black" : "bg-white"}`}
          ></span>
        </button>
        <div className="hidden md:flex gap-12 relative">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex gap-[14px] items-center cursor-pointer"
                >
                  <span
                    className={`font-sora font-normal text-lg ${textColor} pb-3 translate-y-[18px] border-b-4 ${
                      pathname === link.path
                        ? borderColor
                        : "border-transparent"
                    }`}
                  >
                    {link.name}
                  </span>
                  <Image
                    src={arrow}
                    alt="dropdown"
                    height={10}
                    width={10}
                    className={`w-[10px] h-[10px] mt-6 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-9 w-max z-50">
                    <div className="flex justify-center mb-0">
                      <div
                        className={`w-4 h-3 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent ${
                          isCareerStyle ? "border-b-white" : "border-b-white"
                        }`}
                        style={{
                          filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
                        }}
                      ></div>
                    </div>
                    <div
                      className={`rounded-2xl overflow-hidden border backdrop-blur-[40px] ${
                        isCareerStyle
                          ? "border-black/10 bg-white/90 shadow-[0_20px_24px_0_#0000001A]"
                          : "border-white/20 bg-[#0000003D] shadow-[0_20px_24px_0_#0000008C]"
                      }`}
                    >
                      {dropdownLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`block px-8 py-6 font-sora font-normal text-[16px] leading-none transition-colors duration-200 ${
                            isCareerStyle
                              ? "text-black hover:bg-[#FE9C00] hover:text-white"
                              : "text-white hover:bg-[#FE9C00]"
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.path}
                className={`font-sora font-normal text-lg ${textColor} pb-3 translate-y-[18px] border-b-6 ${
                  pathname === link.path ? borderColor : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        {menuOpen && (
          <div
            className={`absolute top-22 left-0 w-full backdrop-blur-sm flex flex-col items-center space-y-6 py-6 md:hidden z-10 border border-transparent ${
              isCareerStyle ? "bg-[#0000000A]" : "bg-[#0000003D]"
            }`}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`font-sora text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                      isCareerStyle ? "text-black" : "text-white"
                    }`}
                  >
                    {link.name}
                    <Image
                      src={arrow}
                      alt="dropdown"
                      height={10}
                      width={10}
                      className={`w-[10px] h-[10px] transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="flex flex-col items-center mt-4 space-y-4">
                      {dropdownLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`font-sora text-[16px] transition-all duration-200 hover:scale-105 ${
                            isCareerStyle ? "text-black" : "text-white"
                          }`}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sora text-lg transition-all duration-300 hover:scale-105 ${
                    isCareerStyle ? "text-black" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
