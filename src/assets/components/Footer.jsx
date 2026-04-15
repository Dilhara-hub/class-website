export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img src="/image1.jpg" alt="logo" className="w-30 h-14 rounded-md object-cover" />
          <div>
            <h3 className="text-xl font-bold text-red-500">Dilhara Samaranayake</h3>
            <p className="text-sm text-gray-300">Developed by Dilhara Samaranayake</p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white font-semibold">Contact</p>
          <a href="mailto:dilharasamaranayake74@gmail.com" className="text-red-500 hover:underline block">dilharasamaranayake74@gmail.com</a>
          <div className="flex items-center justify-center md:justify-end gap-4 mt-3">
            <a href="https://wa.me/94715369775" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.jpg" alt="WhatsApp" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com/@dilharaSamaranayake" target="_blank" rel="noopener noreferrer">
              <img src="/Youtube.jpg" alt="YouTube" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/share/1DkuzNX1tt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.jpg" alt="Facebook" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dilhara Samaranayake. All rights reserved.
        </div>
      </div>
    </footer>
  );
}