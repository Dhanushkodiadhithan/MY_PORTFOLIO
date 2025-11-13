"use client";
import { useState } from "react";
import TargetCursor from "./Animations/TargetCursor";

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 py-2 bg-(--primary) flex justify-between items-center px-8 shadow-[0_4px_10px_rgba(128,128,128,0.4)]
"
      onMouseEnter={() => {
        document.body.style.cursor = "none";   // hide pointer
        setHovered(true);
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "auto";   // restore pointer
        setHovered(false);
      }}
    >

      <div className="text-2xl font-bold p-2 cursor-target">
        <span className="text-(--tertiary)">MY_</span>
        <span className="text-(--secondary)">PORTFOLIO</span>
      </div>

      {/* Custom Cursor visibility */}
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
      <div className="text-white flex space-x-8 text-lg font-bold cursor-pointer font-sans ">
        <span className="cursor-target px-3">About</span>
        <span className="cursor-target px-3">Home</span>
        <span className="cursor-target px-3">Projects</span>
        <span className="cursor-target px-3">Contact</span>
      </div>
    </div>
  );
}
