export default function Timetable() {
  return (
    <div id="timetable" className="p-6">
      <h2 className="text-center text-red-500 text-3xl mb-4 font-bold">Time Table</h2>

      <div className="border p-4 space-y-4">
        <div className="flex justify-center">
          <img src="/Sipyana.jpg" alt="Teacher" className="w-20 h-20 rounded-full" />
        </div>
        <div className="flex justify-between">
          <span>Grade 10</span>
          <span>Wednesday 4.30 - 7.00pm</span>
        </div>

        <div className="flex justify-between">
          <span>Grade 11</span>
          <span>Friday 4.30 - 7.00pm</span>
        </div>
      </div>
    </div>
  );
}