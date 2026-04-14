import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Plan from "./assets/components/Plan";
import WhyUs from "./assets/components/WhyUs";
import Timetable from "./assets/components/Timetable";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Plan />
      <WhyUs />
      <Timetable />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;