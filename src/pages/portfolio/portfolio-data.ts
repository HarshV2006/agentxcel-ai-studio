import gariyaGaon from "@/assets/portfolio/gariya-gaon.jpg";
import risingRealEstate from "@/assets/portfolio/rising-real-estate.jpg";
import happyKunj from "@/assets/portfolio/happy-kunj.png";
import specialMojito from "@/assets/portfolio/special-mojito.jpg";
import hamzaPerfume from "@/assets/portfolio/hamza-perfume.png";

export const categories = [
  { id: "all", label: "All Work" },
  { id: "graphics", label: "Graphics" },
  { id: "ai-videos", label: "AI Videos" },
  { id: "websites", label: "Websites" },
  { id: "digital-marketing", label: "Digital Marketing" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type PortfolioItem = {
  id: number;
  category: Exclude<CategoryId, "all">;
  title: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
  tags: string[];
  isVideo?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  // Graphics
  {
    id: 1,
    category: "graphics",
    title: "Gariya Gaon Real Estate",
    description:
      "Premium real estate promotional poster with family-oriented design and detailed property features.",
    image: gariyaGaon,
    tags: ["Real Estate", "Poster Design"],
  },
  {
    id: 2,
    category: "graphics",
    title: "The Rising Real Estate",
    description:
      "Festive New Year campaign design featuring multi-generational family appeal and premium property showcase.",
    image: risingRealEstate,
    tags: ["Real Estate", "Campaign"],
  },
  {
    id: 3,
    category: "graphics",
    title: "Happy Kunj Township",
    description:
      "Modern township launch promotional material with clean layout and compelling price presentation.",
    image: happyKunj,
    tags: ["Real Estate", "Township"],
  },
  {
    id: 4,
    category: "graphics",
    title: "Special Mojito Product",
    description:
      "Dynamic product advertisement with splash effects and vibrant green aesthetics for beverage brand.",
    image: specialMojito,
    tags: ["Product Design", "Beverage"],
  },

  {
    id: 14,
    category: "graphics",
    title: "Hamza Attar & Perfumes",
    description:
      "Luxurious perfume brand poster with golden aesthetics, dramatic lighting and elegant product showcase.",
    image: hamzaPerfume,
    tags: ["Product Design", "Perfume"],
  },

  // AI Videos
  {
    id: 5,
    category: "ai-videos",
    title: "3D Wedding Invitation",
    description:
      "Stunning AI-generated 3D wedding invitation video with elegant animations and beautiful visual effects.",
    video: "/videos/wedding-invitation.mp4",
    poster: "/portfolio-posters/wedding-invitation-poster.jpeg",
    tags: ["AI Video", "Wedding"],
    isVideo: true,
  },
  {
    id: 7,
    category: "ai-videos",
    title: "Perfume Commercial",
    description:
      "Luxurious AI-generated perfume advertisement with sophisticated visual storytelling.",
    video: "/videos/perfume.mp4",
    poster: "/portfolio-posters/perfume-poster.jpeg",
    tags: ["AI Video", "Product"],
    isVideo: true,
  },
  {
    id: 8,
    category: "ai-videos",
    title: "The Rising Real Estate",
    description:
      "Professional AI-powered promotional video for The Rising Real Estate with stunning visual effects.",
    video: "/videos/rising-real-estate.mp4",
    poster: "/placeholder.svg",
    tags: ["AI Video", "Real Estate"],
    isVideo: true,
  },
  {
    id: 15,
    category: "ai-videos",
    title: "Bansal Group AI Influencer",
    description:
      "Cinematic AI influencer commercial for Bansal Group featuring a polished spokesperson and premium township visuals.",
    video: "/videos/bansal-ai-influencer.mp4",
    poster: "/portfolio-posters/bansal-ai-influencer-poster.jpg",
    tags: ["AI Video", "Influencer"],
    isVideo: true,
  },
  {
    id: 16,
    category: "ai-videos",
    title: "Carnival Studio",
    description:
      "Vibrant AI-generated street commercial capturing authentic Indian market vibes with rich color and storytelling.",
    video: "/videos/carnival-studio.mp4",
    poster: "/portfolio-posters/carnival-studio-poster.jpg",
    tags: ["AI Video", "Studio"],
    isVideo: true,
  },
  {
    id: 17,
    category: "ai-videos",
    title: "Government Awareness Campaign",
    description:
      "Stylized 3D animated AI video crafted for a government awareness campaign with relatable family characters.",
    video: "/videos/government-ai.mp4",
    poster: "/portfolio-posters/government-ai-poster.jpg",
    tags: ["AI Video", "Campaign"],
    isVideo: true,
  },
  {
    id: 18,
    category: "ai-videos",
    title: "Lime Product Commercial",
    description:
      "Dynamic AI-powered product commercial set in a bustling street scene to spotlight a refreshing beverage brand.",
    video: "/videos/lime-product.mp4",
    poster: "/portfolio-posters/lime-product-poster.jpg",
    tags: ["AI Video", "Product"],
    isVideo: true,
  },
  {
    id: 19,
    category: "ai-videos",
    title: "Shark Tank Concept",
    description:
      "Imaginative AI-generated concept video blending playful 3D worlds with cinematic storytelling for pitch-style content.",
    video: "/videos/shark-tank.mp4",
    poster: "/portfolio-posters/shark-tank-poster.jpg",
    tags: ["AI Video", "Concept"],
    isVideo: true,
  },

  // Websites
  {
    id: 10,
    category: "websites",
    title: "Divine Junction",
    description:
      "Spiritual consultation website for Vastu Shastra, Astrology & Numerology services with elegant purple-gold design.",
    image: "/portfolio-posters/divine-junction-website.png",
    tags: ["Website", "Spiritual"],
  },
  {
    id: 11,
    category: "websites",
    title: "Klean Fit Iconic",
    description:
      "Premium gym & fitness center website for Jaipur's top-rated fitness destination with bold dark theme.",
    image: "/portfolio-posters/klean-fit-website.png",
    tags: ["Website", "Fitness"],
  },

  // Digital Marketing (placeholders - replace with your actual work)
  {
    id: 12,
    category: "digital-marketing",
    title: "Meta Ads Campaign",
    description:
      "High-converting Facebook & Instagram ad campaigns with excellent ROAS.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Meta Ads", "PPC"],
  },
  {
    id: 13,
    category: "digital-marketing",
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategy resulting in significant organic traffic increase.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    tags: ["SEO", "Analytics"],
  },
];
