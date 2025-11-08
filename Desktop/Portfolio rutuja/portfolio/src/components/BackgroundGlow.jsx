import React from "react";

export default function BackgroundGlow({ color = "#6BCB77" }) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div
        className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full blur-[130px] opacity-40 animate-pulse"
        style={{ backgroundColor: color }}
      />
      <div
        className="absolute bottom-[-160px] right-[-160px] w-[450px] h-[450px] rounded-full blur-[160px] opacity-30 animate-float-slow"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
