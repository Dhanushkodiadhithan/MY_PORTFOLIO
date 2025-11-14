"use client";
import LogoLoop from "./Animations/LogoLoop";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  {
  node: <SiCss3 />,
  title: "CSS3",
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
},
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiPrisma />, title: "Prisma ORM", href: "https://www.prisma.io" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
},
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL (SQL)",
    href: "https://www.postgresql.org",
  },

  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
    {
      node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },

  {
    node: <VscVscode />,
    title: "VS Code",
    href: "https://code.visualstudio.com",
  },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
];

export default function IconsLoops() {
  return (
    <>
      <div
         className="relative overflow-hidden pb-10 shadow-[0_4px_10px_rgba(128,128,128,0.4)]"
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}
