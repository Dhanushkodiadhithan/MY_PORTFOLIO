"use client";
import { useEffect, useState } from "react";
import Lanyard from "./Animations/Lanyard";
import Particles from "./Animations/Particles";

export default function Main() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // enables particle + lanyard ONLY in the browser
  }, []);

  return (
    <main className="relative w-full h-screen flex shadow-[0_4px_10px_rgba(128,128,128,0.4)] bg-[#00000013]">

      {/* BACKGROUND PARTICLES LAYER (CLIENT ONLY) */}
      {isClient && (
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#87ceeb", "#87ceeb"]}
            particleCount={1000}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="pointer-events-auto"
          />
        </div>
      )}

      {/* LEFT SIDE - CARD (HIDDEN ON MOBILE) */}
      <div className="w-1/2 h-full relative overflow-visible hidden md:block">
        {isClient && (
          <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
        )}
      </div>

      {/* RIGHT SIDE - TEXT (FULL WIDTH ON MOBILE) */}
      <div className="w-full md:w-1/2 h-full flex flex-col text-white p-10 gap-7
                      justify-center font-semibold relative z-10 cursor-default text-xl md:text-2xl">

        <div>Hi There... !</div>

        <div className="flex gap-2 items-center">
          <div>I'm</div>
          <span className="text-(--secondary)">Dhanushkodi Adhithan</span>
          <div>.M</div>
        </div>

        <div>ME - CSE 1st Year</div>

        <div>Krishnasamy College of Engineering and Technology</div>

        <div>
          <a href="/Dhanushkodi_Adhithan_Resume.pdf" download>
            <button
              type="button"
              className="
                text-xl px-6 py-2 text-white bg-black 
                rounded-xl font-bold border-2 border-cyan-400
                shadow-[0_0_12px_2px_rgba(0,255,255,0.6)]
                transition-all duration-300 cursor-pointer
                hover:bg-cyan-400 hover:text-black
              "
            >
              RESUME
            </button>
          </a>
        </div>

        <div>
          <a href="tel:+916374993897">
            <i className="fa-solid fa-phone text-blue-500 hover:text-yellow-300 cursor-pointer mr-6"></i>
          </a>
          <a href="mailto:dhanushkodiadhithanm2003gmail.com">
            <i className="fa-solid fa-envelope text-blue-500 hover:text-yellow-300 cursor-pointer"></i>
          </a>
        </div>

      </div>
    </main>
  );
}
