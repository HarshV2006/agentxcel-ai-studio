import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    { name: "OpenAI", icon: "🤖" },
    { name: "Make", icon: "⚡" },
    { name: "Zapier", icon: "🔗" },
    { name: "Notion", icon: "📝" },
    { name: "Slack", icon: "💬" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Shopify", icon: "🛒" },
    { name: "Stripe", icon: "💳" },
  ];

  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-widest"
        >
          Trusted Tools & Integrations
        </motion.p>
        
        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling logos */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -50 * logos.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl glass-panel hover:bg-muted/30 transition-all duration-300 group cursor-default min-w-fit"
              >
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                  {logo.icon}
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
