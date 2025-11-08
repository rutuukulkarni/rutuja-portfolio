import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p, onOpen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div
        className="relative w-full h-48 overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => onOpen && onOpen(p)}
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          onLoad={(e) => e.target.classList.add("opacity-100")}
          className="w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{p.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{p.short}</p>

        {/* Tech Stack */}
        <div className="flex gap-2 flex-wrap mb-4">
          {p.tech?.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-slate-100 rounded-lg text-slate-700 border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons (fully clickable now) */}
        <div className="flex gap-3 mt-auto z-10">
          {p.live && p.live !== "#" && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto text-sm px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md"
            >
              Live Demo
            </motion.a>
          )}

          {p.repo && (
            <motion.a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className={`pointer-events-auto text-sm px-4 py-1.5 rounded-lg transition-all duration-200 shadow-md ${
                p.live && p.live !== "#"
                  ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              {p.live && p.live !== "#" ? "Code" : "View on GitHub"}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
