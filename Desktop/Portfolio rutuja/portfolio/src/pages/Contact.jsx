import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import BackgroundGlow from "../components/BackgroundGlow";
import ColorPalette from "../components/ColorPalette";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [themeColor, setThemeColor] = useState("#4D96FF");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_u9mk0st", // ✅ Your Service ID
        "template_v9nkiyc", // ✅ Your Template ID
        formRef.current,
        "GE5v5Cp2SVc2DYbHx" // ✅ Your Public Key
      )
      .then(
        () => setStatus("sent"),
        () => setStatus("error")
      );
  };

  const gradientBg = `linear-gradient(135deg, ${themeColor}25 0%, #ffffff 100%)`;

  return (
    <div
      className="relative min-h-screen transition-all duration-700 ease-in-out px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center"
      style={{ background: gradientBg, color: "black" }}
    >
      {/* Glowing Animated Background */}
      <BackgroundGlow color={themeColor} />

      {/* Page Title */}
      <motion.h2
        className="text-3xl font-bold mb-8 mt-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-8 shadow-lg space-y-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.input
          whileFocus={{ scale: 1.02 }}
          name="user_name"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
          placeholder="Your name"
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          name="user_email"
          type="email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
          placeholder="Email"
        />
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          required
          rows="6"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none"
          placeholder="Message"
        ></motion.textarea>

        {/* Animated Submit Button */}
        <motion.button
          type="submit"
          className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-200"
          style={{ backgroundColor: themeColor }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.96 }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "sent" && (
          <motion.span
            className="block text-green-600 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Sent successfully — thank you!
          </motion.span>
        )}
        {status === "error" && (
          <motion.span
            className="block text-red-600 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ❌ Error sending — please try again.
          </motion.span>
        )}
      </motion.form>

      {/* Footer */}
      <footer className="text-center text-sm py-10 opacity-70">
        © {new Date().getFullYear()} Rutuja Kulkarni • Let's build something amazing together
      </footer>

      {/* Color Palette */}
      <ColorPalette onColorSelect={(color) => setThemeColor(color)} />
    </div>
  );
}
