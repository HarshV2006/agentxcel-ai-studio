import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { PortfolioItem } from "./portfolio-data";
import { useIsMobile } from "@/hooks/use-mobile";

export function PortfolioGrid({
  items,
  onSelect,
}: {
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
}) {
  const isMobile = useIsMobile();
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mql.matches && !isMobile);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [isMobile]);

  const fallbackPoster = useMemo(() => "/placeholder.svg", []);

  return (
    <section className="pb-24 px-6">
      <div className="container mx-auto">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: index * 0.04, duration: 0.28 }}
                whileHover={{ y: -10 }}
                onClick={() => onSelect(item)}
                className="glass-panel rounded-2xl overflow-hidden cursor-pointer group ring-1 ring-border/40 hover:ring-primary/30 transition-[box-shadow,transform,ring-color]"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  {item.isVideo && item.video ? (
                    <video
                      src={item.video}
                      poster={item.poster ?? fallbackPoster}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      preload={canHover ? "metadata" : "none"}
                      onMouseEnter={(e) => {
                        if (!canHover) return;
                        void e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        if (!canHover) return;
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onFocus={(e) => {
                        if (!canHover) return;
                        void e.currentTarget.play();
                      }}
                      onBlur={(e) => {
                        if (!canHover) return;
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />

                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
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
  );
}
