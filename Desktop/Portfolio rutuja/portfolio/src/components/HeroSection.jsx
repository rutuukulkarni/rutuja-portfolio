import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Rutuja Kulkarni
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Full Stack developer — React, Node, NestJS. I build admin dashboards,
          secure auth flows and modern UIs.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="/Rutuja'sFullStackResume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-md border bg-primary text-black border-gray-400"
          >
            Download CV
          </a>
          <a href="/projects" className="px-5 py-2 rounded-md border border-gray-400">
            View projects
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white/60 rounded-lg p-3 shadow-sm">
            <div className="font-semibold">Frontend</div>
            <div className="text-xs text-slate-600">
              React · Tailwind · Framer Motion · JavaScript
            </div>
          </div>
          <div className="bg-white/60 rounded-lg p-3 shadow-sm">
            <div className="font-semibold">Backend</div>
            <div className="text-xs text-slate-600">
              Node · NestJS · MongoDB · NextJs
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md container-card">
          <img
            src="/images/admin.png"
            alt="dashboard"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <div className="mt-3">
            <div className="text-sm text-slate-600">Featured project</div>
            <div className="font-medium">
              Admin Dashboard — Role-based vendors
            </div>
            <div className="mt-2 text-xs text-slate-600">
              JWT cookies, vendor approval, image uploads
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
