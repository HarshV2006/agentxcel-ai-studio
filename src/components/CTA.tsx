import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto"
        >
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
            <Button size="lg" variant="hero" className="text-lg px-10">
              Build My AI Now
            </Button>
            <Button size="lg" variant="outline-glow" className="text-lg px-10">
              Free Strategy Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
