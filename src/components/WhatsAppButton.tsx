import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919257918623', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-2xl flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 right-0 bg-background/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-border/50">
        Chat on WhatsApp
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
