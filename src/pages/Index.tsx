import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
