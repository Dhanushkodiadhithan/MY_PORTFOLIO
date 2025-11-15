"use client";
import ProfileCard from "./ProfileCard";

export default function AboutMe() {
  return (
    <>
      <div className="p-10 shadow-[0_4px_10px_rgba(128,128,128,0.4)]">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-(--tertiary)">About </span>
          <span className="text-(--secondary)">Me</span>
        </h1>

        {/* TWO COLUMN LAYOUT */}
        <div className="flex justify-center gap-10 mt-18 pb-8">
          {/* LEFT SIDE */}
          <div className="w-1/2 text-white text-lg leading-relaxed text-justify">
            {/* Paragraph 1 */}
            <p
              className="indent-10 "
              style={{
                opacity: 0,
                animation: "fadeBlurUp 0.8s ease-out forwards",
                animationDelay: "0.1s",
              }}
            >
              I completed my Bachelor’s degree in Computer Science and
              Engineering, where I developed a solid foundation in programming,
              algorithms, and problem-solving. My undergraduate journey helped
              me explore various technologies and understand the core principles
              that shape modern computing.
            </p>

            <br />

            {/* Paragraph 2 */}
            <p
              className="indent-10"
              style={{
                opacity: 0,
                animation: "fadeBlurUp 0.8s ease-out forwards",
                animationDelay: "0.35s",
              }}
            >
              Currently, I am pursuing my Master of Engineering in Computer
              Science and Engineering (1st Year). This phase of my academic
              journey allows me to dive deeper into advanced concepts, emerging
              technologies, and specialized areas within the field. I’m
              consistently working to expand my technical knowledge and
              strengthen my expertise.
            </p>

            <br />

            {/* Paragraph 3 */}
            <p
              className="indent-10"
              style={{
                opacity: 0,
                animation: "fadeBlurUp 0.8s ease-out forwards",
                animationDelay: "0.6s",
              }}
            >
              I have a strong interest in full-stack development and enjoy
              working across both the frontend and backend. I’ve been building
              projects that combine clean and responsive UI design with solid
              backend functionality. As I continue learning new tools and
              frameworks, I’m focused on becoming a well-rounded full-stack
              developer capable of creating complete, scalable, and
              user-friendly applications.
            </p>
          </div>

          {/* RIGHT SIDE – Only Profile Card */}
          <div className="w-1/2 flex justify-center align-center">
            <ProfileCard
              name="Dhanushkodi Adhithan. M"
              title="Full Stack Developer"
              handle="@dhanu"
              status="Available"
              avatarUrl="/My_Pic.jpg"
              contactText="WhatsApp Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => {
                const phone = "916374993897";
                const message =
                  "Hello! I visited your portfolio and would like to connect.";
                window.open(
                  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
