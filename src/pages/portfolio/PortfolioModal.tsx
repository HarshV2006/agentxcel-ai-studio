import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import type { PortfolioItem } from "./portfolio-data";

export function PortfolioModal({
  item,
  onClose,
}: {
  item: PortfolioItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} preview`}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="glass-panel rounded-2xl max-w-3xl w-full overflow-hidden ring-1 ring-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {item.isVideo && item.video ? (
                <video
                  src={item.video}
                  className="w-full max-h-[70vh] object-contain bg-background"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[70vh] object-contain bg-background"
                  loading="eager"
                />
              )}

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
