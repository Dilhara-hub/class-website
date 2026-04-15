export default function Contact() {
  return (
    <div id="contact" className="p-6">
      <h2 className="text-center text-red-600 text-3xl mb-4 font-bold">
        JOIN WITH US
      </h2>

      <div className="space-y-3">
        <div className="bg-green-500 text-black p-2 text-xl font-bold">
          <a href="https://wa.me/94715369775" target="_blank" rel="noopener noreferrer">
            <img src="whatsapp.jpg" alt="WhatsApp" className="w-14 h-14 inline mr-2 align-middle cursor-pointer" />
          </a><br />
          <span className="align-middle">071 53 69 775</span>
        </div>

        <div className="bg-white text-black p-2">
          <a href="https://www.youtube.com/@dilharaSamaranayake" target="_blank" rel="noopener noreferrer">
            <img src="Youtube.jpg" alt="YouTube" className="w-14 h-14 inline mr-2 align-middle cursor-pointer" />
          </a>
        <h2 className="text-black text-xl font-bold ">Dilhara Samaranayake</h2>
        </div>

        <div className="bg-blue-200 text-black p-2">
          <a href="https://www.facebook.com/share/1DkuzNX1tt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="facebook.jpg" alt="Facebook" className="w-14 h-14 inline mr-2 align-middle cursor-pointer" />
          </a>
          <h2 className="text-black text-xl font-bold ">Dilhara Samaranayake - ICT</h2>
          
        </div>
      </div>
    </div>
  );
}