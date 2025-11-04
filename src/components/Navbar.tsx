"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#101820]/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#FEE715] font-bold text-xl"
        >
          Nahead Jokhio
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-semibold">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`transition-colors duration-300 hover:text-[#FEE715] ${
                  active === section
                    ? "text-[#FEE715] border-b-2 border-[#FEE715]"
                    : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FEE715] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#101820] border-t border-[#FEE715]/30"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 font-semibold">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block transition-colors duration-300 hover:text-[#FEE715] ${
                      active === section
                        ? "text-[#FEE715] border-b-2 border-[#FEE715]"
                        : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
