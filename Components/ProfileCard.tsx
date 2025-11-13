"use client";

import Tilt from "react-parallax-tilt";

export default function ProfileCard({
  name = "Your Name",
  title = "Your Title",
  handle = "@username",
  status = "Available",
  avatarUrl = "/avatar.jpg",
  contactText = "Contact Me",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = true,
  onContactClick = () => {
    const phone = "916374993897"; 
    const message = "Hello! I visited your portfolio and want to contact you.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  },
}) {
  const tiltOptions = {
    scale: 1.04,
    transitionSpeed: 1500,
    gyroscope: enableMobileTilt,
  };

  const Content = (
    <div
      className="
        w-[400px] 
        bg-[#1b1b1b] 
        text-white 
        rounded-2xl 
        p-10
        py-16 
        border 
        border-neutral-700 
        cursor-pointer
        shadow-[0_0_20px_4px_rgba(0,255,255,0.4)]    /* 🔥 Neon Glow Added */
        hover:shadow-[0_0_30px_6px_rgba(0,255,255,0.6)]  /* 🔥 Glow on Hover */
        transition-all
        duration-300
      "
    >
      <div className="flex flex-col items-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-35 h-35 rounded-full object-cover border-2 border-neutral-600 shadow-lg"
        />

        {showUserInfo && (
          <>
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <p className="text-neutral-400">{title}</p>
            <p className="text-neutral-500 text-sm mt-1">{handle}</p>
            <span className="text-green-400 text-xs mt-1">{status}</span>
          </>
        )}

        <div
          onClick={onContactClick}
          className="mt-5 curser-pointer bg-blue-600 hover:bg-blue-500 transition px-4 py-2 text-sm rounded-lg font-semibold"
        >
          {contactText}
        </div>
      </div>
    </div>
  );

  return enableTilt ? <Tilt {...tiltOptions}>{Content}</Tilt> : Content;
}
