import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-600 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between" aria-label="Main Navigation">
        <div className="flex items-center gap-3">
          <img src="/teacher.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
          <div className="leading-tight">
            <a href="#hero" className="text-white font-bold text-base md:text-2xl hover:opacity-90">
              <span className="md:hidden">Dilhara samaranayake</span>
              <span className="hidden md:inline">Dilhara Samaranayake</span>
            </a>
            <div className="hidden md:block text-sm text-gray-100">ICT Instructor</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#whyus" className="hover:underline">Why ICT</a>
          <a href="#timetable" className="hover:underline">TimeTable</a>
          <a href="#contact" className="hover:underline">Join</a>
        </div>

        {/* Right area: phone (desktop) + mobile menu button */}
        <div className="flex items-center gap-3">
          <a href="tel:+94715369775" className="hidden md:inline-block text-white bg-black/20 px-3 py-1 rounded-md text-sm hover:bg-black/30">071 53 69 775</a>

          {/* small square button on mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-black/20"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-red-600 border-t border-red-500">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#hero" className="block text-white py-2 px-2 rounded hover:bg-black/10" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" className="block text-white py-2 px-2 rounded hover:bg-black/10" onClick={() => setOpen(false)}>About</a>
            <a href="#whyus" className="block text-white py-2 px-2 rounded hover:bg-black/10" onClick={() => setOpen(false)}>Why ICT</a>
            <a href="#timetable" className="block text-white py-2 px-2 rounded hover:bg-black/10" onClick={() => setOpen(false)}>TimeTable</a>
            <a href="#contact" className="block text-white py-2 px-2 rounded hover:bg-black/10" onClick={() => setOpen(false)}>Join</a>
            <a href="tel:+94715369775" className="block text-white py-2 px-2 rounded hover:bg-black/10">Call: 071 53 69 775</a>
            <a href="mailto:dilharasamaranayake74@gmail.com" className="block text-white py-2 px-2 rounded hover:bg-black/10">Email: dilharasamaranayake74@gmail.com</a>
          </div>
        </div>
      )}
    </header>
  );
}