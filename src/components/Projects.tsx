import { motion } from "framer-motion";
import projectSales from "@/assets/project-sales.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import projectWebsite from "@/assets/project-website.jpg";

const projects = [
  {
    image: projectSales,
    title: "AI Sales Agent",
    stats: [
      "Handles 80% of inbound leads",
      "Books meetings by itself",
      "Saved client 40+ hours/week"
    ],
    delay: 0.1
  },
  {
    image: projectVoice,
    title: "Voice Support Agent",
    stats: [
      "Real-time natural voice",
      "Fully autonomous call handling",
      "Reduced support costs by 62%"
    ],
    delay: 0.2
  },
  {
    image: projectWebsite,
    title: "AI Website for Coaching Brand",
    stats: [
      "Website that talks & guides users",
      "+47% conversions increase",
      "24/7 intelligent assistance"
    ],
    delay: 0.3
  }
];

const Projects = () => {
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
            Recent <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Builds</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: project.delay, duration: 0.6 }}
              className="glass-panel rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <ul className="space-y-2">
                  {project.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <span className="text-accent mr-2">•</span>
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
