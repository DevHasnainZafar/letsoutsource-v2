"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service", hasDropdown: true },
    { name: "Home", path: "/" },
  ];
  return (
    <nav className="bg-green-800 border-b-[1.5px] border-[#FFFFFF52 border-red-700 py-4 md:max-w-[1200px] md:px-0 px-2 mx-auto flex justify-between items-center relative">
      <Image
        src="/whitelogo.png"
        alt="letsoutsource"
        height={100}
        width={100}
        className="mt-2"
      />
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col space-y-1.5 z-20"
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </button>
      <div className="hidden md:flex gap-9">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.name}
              className="flex gap-[14px] items-center cursor-pointer"
            >
              <Link
                href={link.path}
                className={`font-sora font-normal text-lg text-white pb-3 translate-y-[16px] border-b-4 ${
                  pathname === link.path ? "border-white" : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
              <Image
                src="/arrowdown.png"
                alt="dropdown"
                height={10}
                width={10}
                className="w-[12px] h-[12px] mt-4"
              />
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.path}
              className={`font-sora font-normal text-lg text-white pb-3 translate-y-[16px] border-b-4 ${
                pathname === link.path ? "border-white" : "border-transparent"
              }`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-900 flex flex-col items-center space-y-6 py-6 md:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-sora text-white text-lg ${
                pathname === link.path ? "border-b-2 border-white" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
