import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import ContactFormDialog from "./ContactFormDialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img
                src={logo}
                alt="AgentXcel AI"
                className="w-10 h-10 rounded-lg hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold">AgentXcel AI</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
            </nav>

            {/* Contact Button */}
            <Button
              variant="hero"
              className="px-6"
              onClick={() => setIsContactOpen(true)}
            >
              Contact
            </Button>
          </div>
        </div>
      </header>

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        type="contact"
      />
    </>
  );
};

export default Header;
