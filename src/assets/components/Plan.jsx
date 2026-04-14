export default function Plan() {
  return (
    <div className="bg-red-600 p-6">
      <h2 className="text-center text-xl mb-4">OUR Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white text-black p-4">
            OUR Plan
            <p className="text-sm mt-2">
              I could gain trust of many students...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}