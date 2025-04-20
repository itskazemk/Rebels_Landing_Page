import "./App.css";
import { Cta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Samples } from "./components/ui/samples";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Samples />
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Team />
      <Cta />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
