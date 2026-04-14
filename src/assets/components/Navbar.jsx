export default function Navbar() {
  return (
    <div className="bg-red-600 flex justify-between items-center p-4">
      <h1 className="font-bold">Dilhara Samaranayake ICT</h1>
      <div className="space-x-4">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#whyus">Why us</a>
        <a href="#timetable">Time Table</a>
        <a href="#contact">Join</a>
      </div>
    </div>
  );
}