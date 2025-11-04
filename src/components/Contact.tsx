"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#101820] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-10 border-b-4 border-[#FEE715] pb-2"
      >
        Contact Me
      </motion.h2>

      {/* Contact Info */}
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Email */}
        <motion.a
          href="mailto:naheadj@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#1A1F2C] hover:bg-[#FEE715] hover:text-[#101820] text-gray-300 transition-all duration-300 px-6 py-4 rounded-2xl w-full md:w-auto justify-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="text-[#FEE715]" />
          <span className="font-semibold">naheadj@gmail.com</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/923122955972"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#1A1F2C] hover:bg-[#FEE715] hover:text-[#101820] text-gray-300 transition-all duration-300 px-6 py-4 rounded-2xl w-full md:w-auto justify-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Phone className="text-[#FEE715]" />
          <span className="font-semibold">+92 312 2955972</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/nahead-jokhio-08220133a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#1A1F2C] hover:bg-[#FEE715] hover:text-[#101820] text-gray-300 transition-all duration-300 px-6 py-4 rounded-2xl w-full md:w-auto justify-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Linkedin className="text-[#FEE715]" />
          <span className="font-semibold">Nahead Jokhio</span>
        </motion.a>
      </div>

    
    </section>
  );
};

export default Contact;
