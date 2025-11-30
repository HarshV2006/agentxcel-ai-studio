import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Particle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,166,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,166,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container relative z-10 px-6 mx-auto">
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
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
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
          
          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="relative mt-16 animate-float max-w-2xl"
          >
            <div className="relative">
              <img
                src={heroVisual}
                alt="AI Brain Visualization"
                className="w-full h-auto rounded-3xl"
                style={{ filter: 'drop-shadow(0 0 60px rgba(77, 166, 255, 0.3))' }}
              />
              {/* Floating orbs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
