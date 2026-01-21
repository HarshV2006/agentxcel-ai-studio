import { motion } from "framer-motion";

export function PortfolioHero() {
  return (
    <section className="pt-32 pb-14 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore my creative work across graphics, AI videos, websites, and
            digital marketing campaigns.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
