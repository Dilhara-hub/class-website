import { useEffect, useState, useRef, useCallback } from "react";

export default function Hero() {
  // Use the images that exist in the public folder
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Slide transition duration (seconds)
  const transitionDuration = 0.5; // 0.5s as requested
  const autoAdvanceMs = 3000; // auto-advance interval

  const startAuto = useCallback(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setIndex((s) => (s + 1) % images.length);
    }, autoAdvanceMs);
  }, [images.length]);

  const stopAuto = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const goTo = (i) => {
    setIndex(i % images.length);
    // restart auto-advance so users have time to view
    stopAuto();
    startAuto();
  };

  const prev = () => {
    setIndex((s) => (s - 1 + images.length) % images.length);
    stopAuto();
    startAuto();
  };

  const next = () => {
    setIndex((s) => (s + 1) % images.length);
    stopAuto();
    startAuto();
  };

  return (
    <section id="hero" className="py-10">
      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        {/* sliding track */}
        <div
          className="flex"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(100 / images.length) * index}%)`,
            transition: `transform ${transitionDuration}s cubic-bezier(.22,.9,.36,1)`,
          }}
        >
          {images.map((src, i) => {
            const isActive = i === index;
            return (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-center"
                style={{
                  // each slide is full width; we add per-slide transitions for creative motion
                  transition: `opacity ${transitionDuration}s ease, transform ${transitionDuration}s ease`,
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? "scale(1.03)" : "scale(0.98)",
                }}
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="w-full h-64 md:h-96 object-cover block"
                />
              </div>
            );
          })}
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}