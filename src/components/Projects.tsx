"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
   title: "NaheadWeb | Modern E-Commerce Platform for Smart Shopping",
  description:
    "NaheadWeb is a modern, fast, and fully responsive e-commerce website built by Nahead Jokhio. Shop trending products with a smooth user experience, secure checkout, and stylish modern design powered by Next.js and Tailwind CSS.",
    tech: ["Python", "Streamlit", "GitHub"],
    image: "/e-com.png", // 🔹 add your image in public/projects/
    github: "https://github.com/nahead/hackathon-3_day4.git",
    demo: "https://naheadweb.vercel.app",
  },
  {
    title: "Nahead’s Dev Blog — Insights on Full-Stack Development",
    description:
      "Explore in-depth articles on full-stack web development, Next.js, TypeScript, and modern backend techniques by Nahead Jokhio. Learn, code, and grow with practical insights and real-world projects.",
    tech: ["Next.js", "TypeScript", "OpenAI Agents SDK"],
    image: "/blog.png", // 🔹 add your image in public/projects/
    github: "https://github.com/nahead/blog.git",
    demo: "https://blog-five-alpha-89.vercel.app/",
  },
  {
    title: "AI Career Guide — Your Path to AI & Machine Learning Success",
    description:
      "Discover career paths, skills, and opportunities in Artificial Intelligence, Machine Learning, and Data Science. Built by Nahead Jokhio, this AI Career Guide helps you navigate the world of AI with clarity and confidence.",
    tech: ["FastAPI", "Python", "JWT"],
    image: "/Ai-career.png", // 🔹 add your image in public/projects/
    github: "https://github.com/nahead/Ai-career-guide.git",
    demo: "https://ai-career-guide.streamlit.app/",
  },
 
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#101820] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-12 border-b-4 border-[#FEE715] pb-2"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1A1F2C] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FEE715] text-[#101820] p-2 rounded-full hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FEE715] text-[#101820] p-2 rounded-full hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#FEE715] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-[#FEE715]/20 text-[#FEE715] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
