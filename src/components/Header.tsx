import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import ContactFormDialog from "./ContactFormDialog";

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio', isPage: true }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string, isPage?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isPage) return; // Navigation handled by Link component
    setTimeout(() => {
      if (!isHomePage) {
        window.location.href = `/#${id}`;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={logo}
                alt="AgentXcel AI"
                className="w-10 h-10 rounded-lg"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-bold">AgentXcel AI</span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link key={item.id} to={`/${item.id}`}>
                    <motion.span
                      className="text-foreground/80 hover:text-foreground transition-colors relative cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground/80 hover:text-foreground transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                )
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                className="px-6"
                onClick={() => setIsContactOpen(true)}
              >
                Contact
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-background/95 backdrop-blur-xl z-50 md:hidden border-l border-primary/20 shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                {/* Nav Items */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    item.isPage ? (
                      <Link key={item.id} to={`/${item.id}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-left py-4 text-xl font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-primary/10 hover:border-primary/30 hover:pl-2"
                        >
                          <span className="text-primary/50 mr-3 text-sm">0{index + 1}</span>
                          {item.label}
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.button
                        key={item.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left py-4 text-xl font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-primary/10 hover:border-primary/30 hover:pl-2"
                      >
                        <span className="text-primary/50 mr-3 text-sm">0{index + 1}</span>
                        {item.label}
                      </motion.button>
                    )
                  ))}
                </nav>

                {/* Contact Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button
                    variant="hero"
                    className="w-full py-6 text-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactOpen(true);
                    }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto pb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={logo} alt="AgentXcel AI" className="w-8 h-8 rounded-lg" />
                    <span className="text-sm text-foreground/60">AgentXcel AI</span>
                  </div>
                  <p className="text-xs text-foreground/40">
                    Build Smarter. Automate Faster. Scale Effortlessly.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactFormDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        type="contact"
      />
    </>
  );
};

export default Header;
