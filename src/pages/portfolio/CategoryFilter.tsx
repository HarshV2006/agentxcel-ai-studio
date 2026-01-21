import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Globe, Image, Megaphone, Video } from "lucide-react";

import type { CategoryId } from "./portfolio-data";
import { categories } from "./portfolio-data";

const categoryIcons: Record<Exclude<CategoryId, "all">, LucideIcon> = {
  graphics: Image,
  "ai-videos": Video,
  websites: Globe,
  "digital-marketing": Megaphone,
};

export function CategoryFilter({
  activeCategory,
  onChange,
}: {
  activeCategory: CategoryId;
  onChange: (id: CategoryId) => void;
}) {
  return (
    <section className="pb-8 px-6 sticky top-20 z-40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const Icon =
              category.id === "all" ? null : categoryIcons[category.id];

            return (
              <motion.button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
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
  );
}
