"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWindows,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiVercel,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiSharp,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "C#", icon: SiSharp, color: "#239120" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "Windows Apps", icon: FaWindows, color: "#0078D6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
];

// دو کپی برای انیمیشن بی‌نهایت
const duplicatedSkills = [...skills, ...skills];

// ردیف دوم - ترتیب متفاوت برای زیبایی
const skillsReversed = [...skills].reverse();
const duplicatedSkillsReversed = [...skillsReversed, ...skillsReversed];

interface SkillItemProps {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

function SkillItem({ name, icon: Icon, color }: SkillItemProps) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 glass px-6 py-4 rounded-2xl min-w-fit hover:scale-105 transition-transform">
      <Icon className="w-6 h-6 transition-colors" style={{ color: color }} />
      <span className="font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-accent font-medium mb-3 tracking-wider uppercase"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold"
        >
          تکنولوژی‌هایی که با آنها{" "}
          <span className="text-gradient">کار می‌کنم</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative space-y-6" dir="ltr">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Left direction */}
        <div className="overflow-hidden">
          <div className="marquee-container animate-marquee-left">
            {duplicatedSkills.map((skill, index) => (
              <SkillItem
                key={`row1-${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right direction */}
        <div className="overflow-hidden">
          <div className="marquee-container animate-marquee-right">
            {duplicatedSkillsReversed.map((skill, index) => (
              <SkillItem
                key={`row2-${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
