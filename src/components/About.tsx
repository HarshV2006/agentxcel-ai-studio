import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto">
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
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full opacity-30 blur-2xl animate-pulse"></div>
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-40 animate-float"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
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
