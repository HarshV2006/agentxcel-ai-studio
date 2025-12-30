import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Image, Video, Globe, Megaphone, ExternalLink, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const categories = [
  { id: "all", label: "All Work", icon: null },
  { id: "graphics", label: "Graphics", icon: Image },
  { id: "ai-videos", label: "AI Videos", icon: Video },
  { id: "websites", label: "Websites", icon: Globe },
  { id: "digital-marketing", label: "Digital Marketing", icon: Megaphone },
];

// Sample portfolio items - replace with your actual work
const portfolioItems = [
  {
    id: 1,
    category: "graphics",
    title: "Brand Identity Design",
    description: "Complete visual branding package including logo, color palette, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    tags: ["Logo Design", "Branding"],
  },
  {
    id: 2,
    category: "graphics",
    title: "Social Media Graphics",
    description: "Eye-catching social media posts and stories designed for maximum engagement.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Social Media", "Design"],
  },
  {
    id: 3,
    category: "ai-videos",
    title: "AI Product Demo",
    description: "AI-generated product demonstration video with realistic avatars and animations.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
    tags: ["AI Video", "Demo"],
    isVideo: true,
  },
  {
    id: 4,
    category: "ai-videos",
    title: "AI Explainer Video",
    description: "Complex concepts simplified through AI-powered animated explainer videos.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    tags: ["Explainer", "Animation"],
    isVideo: true,
  },
  {
    id: 5,
    category: "websites",
    title: "E-commerce Platform",
    description: "Full-featured online store with AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["E-commerce", "React"],
  },
  {
    id: 6,
    category: "websites",
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Dashboard", "SaaS"],
  },
  {
    id: 7,
    category: "digital-marketing",
    title: "Meta Ads Campaign",
    description: "High-converting Facebook & Instagram ad campaigns with 3x ROAS.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Meta Ads", "PPC"],
  },
  {
    id: 8,
    category: "digital-marketing",
    title: "SEO Optimization",
    description: "Comprehensive SEO strategy resulting in 200% organic traffic increase.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    tags: ["SEO", "Analytics"],
  },
  {
    id: 9,
    category: "graphics",
    title: "UI/UX Design System",
    description: "Complete design system with components, tokens, and documentation.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["UI/UX", "Design System"],
  },
  {
    id: 10,
    category: "websites",
    title: "AI Coaching Platform",
    description: "Interactive coaching platform with AI-powered personalization.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["AI", "Platform"],
  },
  {
    id: 11,
    category: "ai-videos",
    title: "AI Training Videos",
    description: "Series of AI-generated training content for corporate clients.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    tags: ["Training", "Corporate"],
    isVideo: true,
  },
  {
    id: 12,
    category: "digital-marketing",
    title: "Email Marketing Funnel",
    description: "Automated email sequences with 45% open rate and high conversions.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    tags: ["Email", "Automation"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-panel py-4"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <img src={logo} alt="AgentXcel AI" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold">AgentXcel AI</span>
              </motion.div>
            </Link>
            
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore my creative work across graphics, AI videos, websites, and digital marketing campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-6 sticky top-20 z-40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                      : "glass-panel hover:bg-primary/10"
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedItem(item)}
                  className="glass-panel rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center"
                        >
                          <Play size={28} className="text-primary-foreground ml-1" />
                        </motion.div>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink size={18} className="text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal for viewing item details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel rounded-2xl max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3">{selectedItem.title}</h2>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgentXcel AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
