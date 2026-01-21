import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import ContactFormDialog from "./ContactFormDialog";

const Hero = () => {
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-ai-revolution.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </div>

      {/* Animated glow effects */}
      <motion.div 
        className="absolute inset-0 opacity-40 pointer-events-none z-[1]"
        style={{ y }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" 
          style={{ animationDelay: '1s' }}
        />
      </motion.div>
      
      {/* Particle grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(77,166,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,166,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] z-[1]"
      />
      
      <motion.div 
        className="container relative z-10 px-6 mx-auto"
        style={{ opacity, scale: useTransform(scrollYProgress, [0, 1], [1, 0.95]) }}
      >
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="AgentXcel AI"
            className="w-20 h-20 mb-8 rounded-2xl hover:scale-110 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="glow-text-cyan">Build Smarter.</span>
            <br />
            <span className="glow-text-purple">Automate Faster.</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scale Effortlessly.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AgentXcel AI builds next-gen AI Agents, chatbots, automations, and intelligent systems tailored for your business — powered by cutting-edge AI.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-8"
              onClick={() => setIsBuildOpen(true)}
            >
              Launch a Project
            </Button>
            <Button 
              size="lg" 
              variant="outline-glow" 
              className="text-lg px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Work
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-muted-foreground text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center bg-background/30 backdrop-blur-sm">
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      <ContactFormDialog
        isOpen={isBuildOpen}
        onClose={() => setIsBuildOpen(false)}
        type="build"
      />
      
      <ContactFormDialog
        isOpen={isStrategyOpen}
        onClose={() => setIsStrategyOpen(false)}
        type="strategy"
      />
    </section>
  );
};

export default Hero;
