import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" }
  ];
  
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];
  
  return (
    <footer className="relative border-t border-border/50 py-12 px-6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <a
              href="mailto:contact@agentxcel.ai"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              contact@agentxcel.ai
            </a>
          </div>
          
          {/* Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-gradient-to-br hover:from-primary hover:to-secondary flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgentXcel AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
