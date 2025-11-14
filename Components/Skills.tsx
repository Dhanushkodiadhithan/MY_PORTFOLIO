import { IconCloud } from "./Animations/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "tailwindcss",
  "redux",
  "mongodb",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <>
      <div className="p-10 pb-20 ">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-(--secondary)">My </span>
          <span className="text-(--tertiary)">Skills</span>
        </h1>

        {/* TWO COLUMN LAYOUT */}
        <div className="flex gap-10 mt-18">
          {/* LEFT SIDE */}
          <div className="w-1/2 cursor-pointer">
            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 cursor-pointer">
            <div className="w-full text-white space-y-8">
              {/* Frontend */}
              <div
                className="p-5 rounded-2xl bg-[#1b1b1b] shadow-lg border border-white/10
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-(--tertiary)/40 hover:border-(--tertiary)"
              >
                <h2 className="text-2xl font-semibold mb-4 text-(--secondary)">
                  Frontend
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Redux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 
                     backdrop-blur-md transition-all duration-300
                     hover:bg-white/20 hover:border-(--secondary) hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div
                className="p-5 rounded-2xl bg-[#1b1b1b] shadow-lg border border-white/10
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-(--secondary)/40 hover:border-(--tertiary)"
              >
                <h2 className="text-2xl font-semibold mb-4 text-(--secondary)">
                  Backend
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express.js", "Prisma"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 
                     backdrop-blur-md transition-all duration-300
                     hover:bg-white/20 hover:border-(--secondary) hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div
                className="p-5 rounded-2xl bg-[#1b1b1b] shadow-lg border border-white/10
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-(--secondary)/40 hover:border-(--tertiary)"
              >
                <h2 className="text-2xl font-semibold mb-4 text-(--secondary)">
                  Databases
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["MongoDB", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 
                     backdrop-blur-md transition-all duration-300
                     hover:bg-white/20 hover:border-(--secondary) hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div
                className="p-5 rounded-2xl bg-[#1b1b1b] shadow-lg border border-white/10
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-(--secondary)/40 hover:border-(--tertiary)"
              >
                <h2 className="text-2xl font-semibold mb-4 text-(--secondary)">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Visual Studio Code", "Figma"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 
                     backdrop-blur-md transition-all duration-300
                     hover:bg-white/20 hover:border-(--secondary) hover:scale-105"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
