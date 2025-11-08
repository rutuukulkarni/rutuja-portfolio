import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import BackgroundGlow from "../components/BackgroundGlow";
import ColorPalette from "../components/ColorPalette";

export default function Projects() {
  const [themeColor, setThemeColor] = useState("#4D96FF");

  const gradientBg = `linear-gradient(135deg, ${themeColor}25 0%, #ffffff 100%)`;

  return (
    <div
      className="relative min-h-screen transition-all duration-700 ease-in-out px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: gradientBg, color: "black" }}
    >
      {/* Animated Background */}
      <BackgroundGlow color={themeColor} />

      {/* Title Section */}
      <motion.h2
          className="text-3xl font-bold mb-8 pt-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        My Projects
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                scale: 1.07,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
            >
              <ProjectCard p={p} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-sm py-10 opacity-70">
        © {new Date().getFullYear()} Rutuja Kulkarni • Interactive Projects
        Showcase
      </footer>

      {/* Floating Color Palette */}
      <ColorPalette onColorSelect={(color) => setThemeColor(color)} />
    </div>
  );
}
