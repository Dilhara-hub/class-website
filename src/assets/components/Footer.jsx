export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-red-950 text-white">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-5">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-red-500 to-red-900 shadow-lg shadow-red-600/30">
                <img
                  src="/teacher.png"
                  alt="Dilhara Samaranayake Logo"
                  className="w-28 h-20 rounded-xl object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-red-500">
                  Dilhara Samaranayake
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Information & Communication Technology
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-6">
              Empowering students with ICT knowledge,
              skills and confidence for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-5">
              <span className="text-red-500">✦</span> Explore More
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#home" className="hover:text-red-500 hover:translate-x-1 transition duration-300">
                → Home
              </a>
              <a href="#whyus" className="hover:text-red-500 hover:translate-x-1 transition duration-300">
                → Why Choose ICT?
              </a>
              <a href="#timetable" className="hover:text-red-500 hover:translate-x-1 transition duration-300">
                → Class Time Table
              </a>
              <a href="#contact" className="hover:text-red-500 hover:translate-x-1 transition duration-300">
                → Contact Us
              </a>
            </div>
          </div>

          {/* Contact & Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-5">
              <span className="text-red-500">✦</span> Get In Touch
            </h3>

            <a
              href="mailto:dilharasamaranayake74@gmail.com"
              className="text-gray-300 text-sm break-all hover:text-red-500 transition duration-300"
            >
              ✉ dilharasamaranayake74@gmail.com
            </a>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">

              <a
                href="https://wa.me/94715369775"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-green-600 hover:border-green-500 hover:-translate-y-2 transition duration-300"
              >
                <img src="/whatsapp.jpg" alt="WhatsApp" className="w-7 h-7 rounded-md object-cover" />
              </a>

              <a
                href="https://www.youtube.com/@dilharaSamaranayake"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-500 hover:-translate-y-2 transition duration-300"
              >
                <img src="/Youtube.jpg" alt="YouTube" className="w-7 h-7 rounded-md object-cover" />
              </a>

              <a
                href="https://www.facebook.com/share/1DkuzNX1tt/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >
                <img src="/facebook.jpg" alt="Facebook" className="w-7 h-7 rounded-md object-cover" />
              </a>

            </div>

            <p className="text-xs text-gray-500 mt-5">
              Connect • Learn • Grow
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Dilhara Samaranayake.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-500 text-center">
            Designed & Developed by{" "}
            <span className="text-red-500 font-semibold">
              Dilhara Samaranayake
            </span>
          </p>

          <a
            href="#home"
            className="text-sm text-gray-400 hover:text-red-500 transition duration-300"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}
