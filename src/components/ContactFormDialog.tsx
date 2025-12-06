import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: "build" | "strategy" | "contact";
}

const ContactFormDialog = ({ isOpen, onClose, type }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New ${type === "build" ? "Project" : type === "strategy" ? "Strategy Call" : "Contact"} Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919257918623?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp...",
      description: "We'll get back to you shortly!",
    });
    
    // Reset form and close
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  const getTitle = () => {
    switch (type) {
      case "build":
        return "Build My AI Now";
      case "strategy":
        return "Free Strategy Call";
      default:
        return "Contact Us";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "build":
        return "Let's discuss your AI project and build something amazing together.";
      case "strategy":
        return "Book a free 30-minute strategy call to explore how AI can transform your business.";
      default:
        return "Get in touch with us and we'll respond as soon as possible.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] glass-panel border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {getTitle()}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {getDescription()}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/50 border-border/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50 border-border/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50 border-border/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or what you'd like to discuss..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-background/50 border-border/50"
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Send via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
