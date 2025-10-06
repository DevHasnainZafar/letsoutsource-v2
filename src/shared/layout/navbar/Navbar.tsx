"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service", hasDropdown: true },
    { name: "Home", path: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full max-w-[1200px] mx-auto z-50 border-b-[1.5px] border-[#FFFFFF52] pt-6 pb-4 transition-all duration-300 ${
        isScrolled ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className=" px-2 md:px-0 flex justify-between items-center">
        <Image
          src="/whitelogo.png"
          alt="letsoutsource"
          height={100}
          width={100}
          className="mt-4"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1.5 z-20"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="flex gap-[14px] items-center cursor-pointer"
              >
                <Link
                  href={link.path}
                  className={`font-sora font-normal text-lg text-white pb-3 translate-y-[16px] border-b-4 ${
                    pathname === link.path
                      ? "border-white"
                      : "border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
                <Image
                  src="/arrowdown.png"
                  alt="dropdown"
                  height={10}
                  width={10}
                  className="w-[10px] h-[10px] mt-4"
                />
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.path}
                className={`font-sora font-normal text-lg text-white pb-3 translate-y-[18px] border-b-6 ${
                  pathname === link.path ? "border-white" : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        {menuOpen && (
          <div
            className="absolute top-22 left-0 w-full bg-[#0000003D] backdrop-blur-sm flex flex-col items-center space-y-6 py-6 md:hidden z-10 border border-transparent"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.032) 100%) 1",
              borderWidth: "1.5px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-sora text-white text-lg transition-all duration-300 hover:text-gray-200 hover:scale-105 ${
                  pathname === link.path
                    ? "border-b-2 border-white font-medium"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
