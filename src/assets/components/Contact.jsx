export default function Contact() {
  return (
    <div id="contact" className="p-6 md:p-10 bg-gradient-to-b from-white to-red-50">
      <h2 className="text-center text-red-600 text-3xl md:text-4xl mb-3 font-extrabold">
        JOIN WITH US
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Connect with us and stay updated with the latest ICT lessons!
      </p>

      <div className="max-w-2xl mx-auto space-y-5">

        <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300">
          <a
            href="https://wa.me/94715369775"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img
              src="whatsapp.jpg"
              alt="WhatsApp"
              className="w-16 h-16 rounded-full bg-white p-1 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <p className="text-lg font-semibold">071 53 69 775</p>
              <p className="text-sm text-white/90">Contact us directly</p>
            </div>
            <span className="ml-auto text-2xl">➜</span>
          </a>
        </div>

        <div className="bg-white text-black p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition duration-300">
          <a
            href="https://www.youtube.com/@dilharaSamaranayake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img
              src="Youtube.jpg"
              alt="YouTube"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">YouTube Channel</h3>
              <p className="text-gray-600 font-medium">
                Dilhara Samaranayake
              </p>
              <p className="text-sm text-red-600 font-semibold">
                Watch ICT Lessons →
              </p>
            </div>
            <span className="ml-auto text-2xl text-red-600">▶</span>
          </a>
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
          <a
            href="https://www.facebook.com/share/1DkuzNX1tt/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img
              src="facebook.jpg"
              alt="Facebook"
              className="w-16 h-16 rounded-full bg-white p-1 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">Facebook Page</h3>
              <p className="font-medium">
                Dilhara Samaranayake - ICT
              </p>
              <p className="text-sm text-blue-100">
                Updates, notices and class information
              </p>
            </div>
            <span className="ml-auto text-2xl">➜</span>
          </a>
        </div>

        <div className="text-center pt-4">
          <p className="text-gray-700 font-semibold">
            Your ICT Journey Starts Here!
          </p>
          <p className="text-red-600 font-bold text-lg mt-1">
            Learn • Practice • Achieve
          </p>
        </div>

      </div>
    </div>
  );
}
