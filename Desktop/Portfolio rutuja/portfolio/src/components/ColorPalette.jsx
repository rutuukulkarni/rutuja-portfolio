import React from "react";

const colors = [
  "#FF6B6B", // coral
  "#FFD93D", // yellow
  "#6BCB77", // mint
  "#4D96FF", // sky blue
  "#A66BFF", // violet
  "#FF8FAB", // pink
  "#FF9F40", // orange
  "#40E0D0", // turquoise
  "#5DE2E7", // aqua
  "#FC5185", // punchy magenta
];

export default function ColorPalette({ onColorSelect }) {
  return (
    <div className="fixed bottom-6 right-6 bg-white/40 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/50 flex items-center justify-center gap-3 z-50">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className="w-8 h-8 rounded-full border border-white shadow-md hover:scale-125 transition-transform duration-300"
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>
  );
}
