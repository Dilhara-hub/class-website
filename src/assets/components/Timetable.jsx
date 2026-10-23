export default function Timetable() {
  return (
    <div id="timetable" className="p-6">
      <h2 className="text-center text-red-500 text-3xl mb-4 font-bold">
        Time Table
      </h2>

      <div className="border p-4 space-y-4">
        <div className="flex justify-center">
          <img
            src="/nawashalawa.jpg"
            alt="Teacher"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* <div className="flex justify-between">
          <span>2027 A/L Revision</span>
          <span>ඉරිදා 12.30pm - 5.00pm</span>
          <span>Online ඉරිදා 8.30pm - 11.00pm</span>
        </div> */}

        <div className="flex justify-between">
          <span>2029 A/L</span>
          <span>ඉරිදා 8.30 - 12.00 Group A</span>
          <span>ඉරිදා 1.00 - 4.30 Group B</span>
        </div>
      </div>
    </div>
  );
}
