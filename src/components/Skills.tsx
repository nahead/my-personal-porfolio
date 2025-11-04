"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Brain,
  Globe,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Globe },
  { name: "Backend Development", icon: Database },
  { name: "Full Stack Development", icon: Code },
  { name: "Node.js", icon: Terminal },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Python", icon: Brain },
  { name: "FastAPI", icon: Cpu },
  { name: "OpenAI Agents SDK", icon: Brain },
  { name: "Artificial Intelligence", icon: Cpu },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full bg-[#101820] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-10 border-b-4 border-[#FEE715] pb-2"
      >
        Skills
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 mt-6 max-w-6xl">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center justify-center bg-[#1A1F2C] hover:bg-[#FEE715] hover:text-[#101820] transition-all duration-300 rounded-2xl p-6 shadow-lg cursor-pointer group"
            >
              <Icon
                size={36}
                className="text-[#FEE715] group-hover:text-[#101820] transition-colors duration-300"
              />
              <p className="mt-3 font-semibold text-center text-sm md:text-base">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
