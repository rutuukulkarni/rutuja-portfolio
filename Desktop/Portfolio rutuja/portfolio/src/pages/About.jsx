import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="md:col-span-2 container-card"
      >
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-3 text-slate-700">
          I build scalable web apps with a focus on secure authentication flows,
          clean UX and maintainable code. My work includes admin dashboards, OTP
          login systems and modular frontend architectures.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs font-semibold">Frontend</div>
            <div className="text-sm">
              React, Tailwind, Framer Motion, React Router
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold">Backend</div>
            <div className="text-sm">Node, NestJS, MongoDB, JWT</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container-card"
      >
        <h3 className="font-semibold">Contact</h3>
        <div className="mt-3 text-sm text-slate-600">
          Based in India • Open to remote roles
        </div>
        <div className="mt-3 flex gap-2">
          <a
            href="https://github.com/rutuukulkarni"
            className="text-sm underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rutuja-kulkarni-rk17200ab/"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
