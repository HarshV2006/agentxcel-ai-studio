import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "./ContactFormDialog";

const CTA = () => {
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow with animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
      </motion.div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-primary/50 rounded-full blur-sm"
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-4 h-4 bg-secondary/50 rounded-full blur-sm"
        animate={{
          y: [0, 100, 0],
          x: [0, -50, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              background: [
                "linear-gradient(0deg, transparent, transparent)",
                "linear-gradient(180deg, hsla(var(--primary) / 0.1), hsla(var(--secondary) / 0.1))",
                "linear-gradient(360deg, transparent, transparent)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Turn your workflow into an{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              autonomous system.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to scale your business with AI that works 24/7? Let's build something incredible together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-10"
              onClick={() => setIsBuildOpen(true)}
            >
              Build My AI Now
            </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline-glow" 
              className="text-lg px-10"
              onClick={() => setIsStrategyOpen(true)}
            >
              Free Strategy Call
            </Button>
            </motion.div>
          </div>
          </div>
        </motion.div>
      </div>

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

export default CTA;
