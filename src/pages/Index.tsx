import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Projects />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
