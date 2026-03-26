import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { Process } from "./components/Process";
// COMMENTED OUT: Testimonials section removed as feedback looked too fake
// import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // COMMENTED OUT: Calendly script loading removed (replaced with contact form)
  // useEffect(() => {
  //   if (document.querySelector('script[src*="calendly"]')) return;
  //   const script = document.createElement("script");
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
    >
      {/* SEO Meta (injected via head) */}
      <title>iluba.</title>

      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        {/* COMMENTED OUT: Testimonials removed - section felt inauthentic */}
        {/* <Testimonials /> */}
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
