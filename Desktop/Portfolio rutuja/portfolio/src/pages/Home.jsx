import React, { useState } from "react";
import About from "../pages/About";
import HeroSection from "../components/HeroSection";
import ColorPalette from "../components/ColorPalette";

export default function Home() {
  const [themeColor, setThemeColor] = useState("#6BCB77");

  // Generate gradient dynamically based on selected color
  const gradientBg = `linear-gradient(135deg, ${themeColor}30 0%, #ffffff 100%)`; // 30 = light opacity version

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-all duration-700 ease-in-out"
      style={{ background: gradientBg, color: "black" }}
    >
      {/* Decorative Gradient Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-[120px] opacity-50"
        style={{ backgroundColor: themeColor }}
      ></div>
      <div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full blur-[150px] opacity-40"
        style={{ backgroundColor: themeColor }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10 px-4 md:px-12 lg:px-20">
        <section className="py-10 md:py-16">
          <HeroSection />
        </section>

        <section className="pb-16">
          <About />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm pb-6 opacity-70">
          © {new Date().getFullYear()} Rutuja Kulkarni
        </footer>
      </div>

      {/* Floating Color Palette */}
      <ColorPalette onColorSelect={(color) => setThemeColor(color)} />
    </div>
  );
}
