import { useMemo, useState } from "react";

import type { CategoryId, PortfolioItem } from "./portfolio/portfolio-data";
import { portfolioItems } from "./portfolio/portfolio-data";
import { CategoryFilter } from "./portfolio/CategoryFilter";
import { PortfolioGrid } from "./portfolio/PortfolioGrid";
import { PortfolioHero } from "./portfolio/PortfolioHero";
import { PortfolioModal } from "./portfolio/PortfolioModal";
import { PortfolioTopBar } from "./portfolio/PortfolioTopBar";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    return activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <PortfolioTopBar />
      <PortfolioHero />
      <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      <PortfolioGrid items={filteredItems} onSelect={setSelectedItem} />
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />

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
