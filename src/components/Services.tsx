import { motion } from "framer-motion";
import { Brain, MessageSquare, Phone, Globe, Zap, Link2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Agents",
    description: "Autonomous agents that plan, learn, and execute tasks for your business — from operations to lead handling.",
    delay: 0.1
  },
  {
    icon: MessageSquare,
    title: "Custom Chatbots",
    description: "Smart chatbots trained on your data to answer customers instantly, 24/7.",
    delay: 0.2
  },
  {
    icon: Phone,
    title: "Voice AI Agents",
    description: "Realistic voice callers that handle calls, bookings, reminders, customer support & more.",
    delay: 0.3
  },
  {
    icon: Globe,
    title: "AI Websites",
    description: "Smart websites that talk, automate, and convert — infused with your custom AI.",
    delay: 0.4
  },
  {
    icon: Zap,
    title: "Process Automations",
    description: "Automate workflows, pipelines, CRMs, and business operations end-to-end.",
    delay: 0.5
  },
  {
    icon: Link2,
    title: "Integrations",
    description: "We connect AI to your tools: Zapier, Airtable, Notion, Slack, CRMs, billing tools & more.",
    delay: 0.6
  }
];

const Services = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Build</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl hover-lift group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-[var(--glow-cyan)] transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
