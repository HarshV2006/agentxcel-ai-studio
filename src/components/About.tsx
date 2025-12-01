import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: "linear-gradient(rgba(77,166,255,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(77,166,255,0.5) 2px, transparent 2px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Who We <span className="glow-text-cyan">Are</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                AgentXcel AI is a modern AI engineering studio building powerful automated systems for founders, teams, and businesses who want to scale without limits.
              </p>
              
              <p>
                We blend creativity + AI engineering to craft custom agents, workflows, and digital experiences that transform how you work.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Abstract 3D shape representation */}
              <div className="absolute inset-0 glass-panel rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="relative w-64 h-64">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full opacity-30 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-40"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full opacity-30"
                    animate={{
                      y: [0, 20, 0],
                      x: [0, -20, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
