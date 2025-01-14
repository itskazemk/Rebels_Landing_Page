import "./App.css";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      <Features />
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
