import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Projects } from "./components/ui/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* <Sponsors /> */}
      {/* <About /> */}
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Team />
      {/* <Cta /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
}

export default App;
