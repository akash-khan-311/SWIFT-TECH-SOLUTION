"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#project", label: "Project" },
    { href: "/#blog", label: "Blog" },
  ];

  const scrollHandler = () => {
    if (window.scrollY > 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      id={"home"}
      className={`${
        header ? " w-full backdrop-blur-2xl bg-black/70 border-b " : ""
      }transition-all durration-500 z-[999] block w-full py-2 mx-auto text-white fixed top-0  `}
    >
      <div className="container mx-auto flex items-center justify-between mt-7">
        <Link href="/" className="text-2xl font-medium">
          <span className="text-[#66FCF1]">SWIFT </span>
          <span className="text-white">TECH SOLUTION</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.scroll ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-gray-100 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-100 hover:text-[#66FCF1] uppercase transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Button
            variant="outline"
            className="ml-4 border-[#66FCF1] text-[#000] hover:bg-[#66FCF1]"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) =>
                link.scroll ? (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-lg text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button
                variant="outline"
                className="mt-4 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("contact");
                }}
              >
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
