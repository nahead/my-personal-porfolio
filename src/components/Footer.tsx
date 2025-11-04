"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#101820] text-white py-10 px-6 md:px-16 border-t border-[#FEE715]/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#FEE715]">Nahead Jokhio</h2>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | AI & Backend Specialist
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm items-center">
          <a
            href="mailto:naheadj@gmail.com"
            className="flex items-center gap-2 hover:text-[#FEE715] transition-colors"
          >
            <Mail size={18} /> naheadj@gmail.com
          </a>

          <a
            href="https://wa.me/923122955972"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FEE715] transition-colors"
          >
            <Phone size={18} /> +92 312 2955972
          </a>

          <a
            href="https://www.linkedin.com/in/nahead-jokhio-08220133a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FEE715] transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 text-sm mt-8 border-t border-[#FEE715]/10 pt-4"
      >
        © {new Date().getFullYear()} Nahead Jokhio — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
