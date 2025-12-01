import { motion } from "framer-motion";
import { Rocket, Target, Network, Cpu } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Ship full AI systems in days, not months.",
    color: "from-primary to-accent"
  },
  {
    icon: Target,
    title: "Tailored for Your Workflow",
    description: "Every build is custom — no generic templates.",
    color: "from-accent to-secondary"
  },
  {
    icon: Network,
    title: "Integrated Everywhere",
    description: "Works with your apps, APIs, cloud and stack.",
    color: "from-secondary to-primary"
  },
  {
    icon: Cpu,
    title: "Powered by Modern AI",
    description: "GPT-4.1, Claude 3.7, Llama 3.1, R1, custom finetunes.",
    color: "from-primary via-secondary to-accent"
  }
];

const Features = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration with animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/2 left-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Designed to <span className="glow-text-cyan">Scale.</span> Built for <span className="glow-text-purple">Results.</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-panel p-8 rounded-2xl h-full hover-lift">
                <motion.div 
                  className={`mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
