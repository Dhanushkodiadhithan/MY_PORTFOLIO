"use client";

import { useEffect, useState } from "react";
import TargetCursor from "./Animations/TargetCursor";

export default function Nav() {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // This runs only in the browser → safe
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 py-2 bg-(--primary) flex justify-between items-center px-8 shadow-[0_4px_10px_rgba(128,128,128,0.4)]"
      onMouseEnter={() => {
        if (isDesktop) document.body.style.cursor = "none";
        setHovered(true);
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "auto";
        setHovered(false);
      }}
    >
      {/* Left Logo */}
      <div className="md:text-2xl text-lg font-bold p-2 cursor-target">
        <a href="#home">
          <span className="text-(--tertiary)">MY_</span>
          <span className="text-(--secondary)">PORTFOLIO</span>
        </a>
      </div>

      {/* Custom Cursor - ONLY RENDERS IF DESKTOP & CLIENT */}
      {isDesktop && (
        <div
          className={`transition-opacity duration-200 pointer-events-none ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={false}
            parallaxOn={true}
          />
        </div>
      )}

      {/* Right Menu */}
      <div className="text-white space-x-8 text-lg font-bold cursor-pointer font-sans hidden md:flex">
        <span className="cursor-target px-3"><a href="#home">HOME</a></span>
        <span className="cursor-target px-3"><a href="#about">ABOUT</a></span>
        <span className="cursor-target px-3"><a href="#skills">SKILLS</a></span>
        <span className="cursor-target px-3"><a href="#projects">PROJECTS</a></span>
        <span className="cursor-target px-3"><a href="#certificates">CERTIFICATES</a></span>
        <span className="cursor-target px-3"><a href="#contact">CONTACT</a></span>
      </div>
    </div>
  );
}
