"use client";
import { useState } from "react";
import TargetCursor from "./Animations/TargetCursor";

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="py-2 bg-black flex justify-between items-center px-8 relative shadow-[0_4px_10px_rgba(128,128,128,0.4)]
"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left side — Brand */}
      <div className="text-2xl font-bold p-2 cursor-target">
        <span className="text-sky-300">MY_</span>
        <span className="text-yellow-300">PORTFOLIO</span>
      </div>

      {/* Right side — Links */}
      <div className="text-white flex space-x-8 text-lg font-medium cursor-pointer">
        <span className="cursor-target px-3">About</span>
        <span className="cursor-target px-3">Home</span>
        <span className="cursor-target px-3">Projects</span>
        <span className="cursor-target px-3">Contact</span>
      </div>

      {/* TargetCursor — only visible and active when hovering over nav */}
      {hovered && (
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      )}
    </div>
  );
}
