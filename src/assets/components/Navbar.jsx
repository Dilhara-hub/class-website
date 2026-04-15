export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-red-600 h-16 shadow-md">
      <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-6" aria-label="Main Navigation">
        <img src="/teacher.png" alt="Logo" className="w-14 h-14 rounded-full border-2 border-white" />
        <h2 className="font-bold text-white text-2xl align-left">Dilhara Samaranayake ICT</h2>
        <div className="space-x-6 text-white">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#whyus">Why ICT</a>
          <a href="#timetable">TimeTable</a>
          <a href="#contact">Join with us</a>
        </div>
      </nav>
    </header>
  );
}