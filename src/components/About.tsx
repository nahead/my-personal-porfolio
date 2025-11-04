"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#101820] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-8 border-b-4 border-[#FEE715] pb-2"
      >
        About Me
      </motion.h2>

      {/* About content */}
      <div className="max-w-4xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300"
        >
          Hello! My name is{" "}
          <span className="text-[#FEE715] font-semibold">Nahead Jokhio</span>.  
          I am a passionate student at{" "}
          <span className="text-[#FEE715] font-semibold">GIAIC</span>, where I’m learning to build
          intelligent and modern digital solutions. My focus lies in creating scalable,
          elegant, and AI-driven applications that merge creativity with powerful backend logic.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300"
        >
          I’m a <span className="text-[#FEE715] font-semibold">Full Stack Developer</span> with
          expertise in <span className="text-[#FEE715]">Node.js</span>,{" "}
          <span className="text-[#FEE715]">Next.js</span>,{" "}
          <span className="text-[#FEE715]">FastAPI</span>, and{" "}
          <span className="text-[#FEE715]">TypeScript</span>.  
          I also specialize in{" "}
          <span className="text-[#FEE715]">OpenAI Agents SDK</span>,{" "}
          <span className="text-[#FEE715]">Python</span>, and{" "}
          <span className="text-[#FEE715]">AI-driven app development</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300"
        >
          My goal is to continue improving as a developer and contribute to innovative
          projects that make technology smarter, faster, and more accessible.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
