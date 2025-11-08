import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundGlow from "../components/BackgroundGlow";
import ColorPalette from "../components/ColorPalette";
import experiences from "../data/experiences";
import education from "../data/education";

export default function Experience() {
  const [themeColor, setThemeColor] = useState("#4D96FF");

  // only background changes when selecting from the palette
  const gradientBg = `linear-gradient(135deg, ${themeColor}25 0%, #ffffff 100%)`;

  return (
    <div
      className="relative min-h-screen transition-all duration-700 ease-in-out px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: gradientBg, color: "black" }}
    >
      {/* Smooth background glow */}
      <BackgroundGlow color={themeColor} />

      {/* ===== Title Section ===== */}
      <motion.h2
        className="text-3xl font-bold mb-8 pt-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional Experience
      </motion.h2>

      {/* ===== Experience Section ===== */}
      <motion.div
        className="space-y-10 text-gray-800 leading-relaxed max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {exp.role} ({exp.period})
            </p>
            <ul className="list-disc list-inside space-y-1">
              {exp.details.map((point, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.05 }}
                  className="hover:translate-x-1 transition-transform"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Divider ===== */}
      <motion.div
        className="w-full h-[1px] my-20 bg-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* ===== Education Section ===== */}
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="space-y-10 text-gray-800 leading-relaxed max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {edu.degree} — {edu.period}
            </p>
            <p className="text-sm text-gray-700 mb-1">{edu.grade}</p>
            <p className="text-sm">{edu.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-sm py-10 opacity-70">
        © {new Date().getFullYear()} Rutuja Kulkarni • Experience & Education
      </footer>

      {/* Floating Color Palette */}
      <ColorPalette onColorSelect={(color) => setThemeColor(color)} />
    </div>
  );
}
