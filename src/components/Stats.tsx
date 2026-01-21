import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Clock, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Briefcase, value: 50, suffix: "+", label: "Projects Delivered", color: "from-primary to-secondary" },
    { icon: Users, value: 100, suffix: "+", label: "Happy Clients", color: "from-accent to-primary" },
    { icon: TrendingUp, value: 95, suffix: "%", label: "Client Satisfaction", color: "from-secondary to-accent" },
    { icon: Clock, value: 40, suffix: "+", label: "Hours Saved Weekly", color: "from-primary to-accent" },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
    color: string;
  };
  delay: number;
}

const StatCard = ({ stat, delay }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-panel rounded-2xl p-6 md:p-8 text-center relative group overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon */}
      <motion.div
        className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3 flex items-center justify-center`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <stat.icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Counter */}
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {count}{stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
};

export default Stats;
