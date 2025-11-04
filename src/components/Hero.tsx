"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#101820] text-white relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101820] via-[#101820] to-black opacity-80 z-0"></div>

      {/* Welcome Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#FEE715] text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest mb-3 z-10"
      >
        👋 Welcome to my portfolio
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 z-10"
      >
        Hi, I’m <span className="text-[#FEE715]">Nahead Jokhio</span>
      </motion.h1>

      {/* Subtitle (Hiring Focus) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-300 max-w-2xl text-base sm:text-lg md:text-xl mb-6 z-10"
      >
        Full Stack Developer & AI Engineer specializing in building scalable,
        intelligent web applications using <span className="text-[#FEE715] font-medium">Next.js</span>,{" "}
        <span className="text-[#FEE715] font-medium">Node.js</span>,{" "}
        and <span className="text-[#FEE715] font-medium">OpenAI Agents SDK</span>.
      </motion.p>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium z-10"
      >
        <TypeAnimation
          sequence={[
            "Front-End Developer 💻",
            2000,
            "Backend Developer ⚙️",
            2000,
            "Full Stack Developer 🚀",
            2000,
            "AI & OpenAI Agents SDK Expert 🤖",
            2000,
            "Python & FastAPI Specialist 🐍",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-8 z-10"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-[#FEE715] text-[#101820] font-semibold rounded-full hover:bg-[#f8e039] transition-all duration-300 shadow-lg"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-[#FEE715] text-[#FEE715] font-semibold rounded-full hover:bg-[#FEE715] hover:text-[#101820] transition-all duration-300 shadow-lg"
        >
          Contact Me
        </a>
        <a
          href="/NaheadJokhio_Resume.pdf"
          download
          className="px-6 py-3 bg-transparent border-2 border-[#FEE715] text-[#FEE715] font-semibold rounded-full hover:bg-[#FEE715] hover:text-[#101820] transition-all duration-300 shadow-lg"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Glowing Background Orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "mirror" }}
        className="absolute w-[300px] h-[300px] bg-[#FEE715] rounded-full blur-3xl top-1/3 left-1/2 -translate-x-1/2 z-0"
      ></motion.div>
    </section>
  );
};

export default Hero;
