"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#101820] text-[#FEE715] py-3 shadow-md flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-[#FEE715]/20 via-transparent to-[#FEE715]/20 blur-2xl"
      />

      {/* Content */}
      <motion.div
        className="flex items-center gap-2 z-10 text-sm md:text-base font-semibold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Sparkles className="text-[#FEE715]" size={18} />
        <p>
          Crafting Intelligent Web Experiences with{" "}
          <span className="text-white">AI & Full-Stack Development</span>
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
