import React from "react";

export default function Hero() {
  // Static three-box layout per user's request
  // Left: image2.jpg, Center: image1.jpg (fills its box), Right: image2.jpg
  const leftSrc = "/image2.jpg";
  const centerSrc = "/ICT.png";
  const rightSrc = "/image2.jpg";

  return (
    <section id="hero" className="py-10">
      <div
        className="w-full max-w-5xl mx-auto flex items-center justify-center gap-4"
        style={{ height: "40vh" }}
      >
        <div style={{ width: "25%", height: "100%" }}>
          <a href="#" aria-label="Left image link" className="block relative group">
            <img
              src={leftSrc}
              alt="left"
              className="w-full h-full object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.35)" }}
            />
          </a>
        </div>

        <div style={{ width: "50%", height: "100%" }}>
          <a href="#" aria-label="Center image link" className="block relative group">
            <img
              src={centerSrc}
              alt="center"
              className="w-full h-full object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-2 relative z-20"
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.5)" }}
            />
          </a>
        </div>

        <div style={{ width: "25%", height: "100%" }}>
          <a href="#" aria-label="Right image link" className="block relative group">
            <img
              src={rightSrc}
              alt="right"
              className="w-full h-full object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
              style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.35)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}