import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly are AI Agents?",
    answer: "AI Agents are autonomous systems that can plan, learn, and execute tasks independently. They can handle complex workflows, make decisions, and interact with various tools and platforms to achieve specific goals for your business."
  },
  {
    question: "How long does it take to build a custom AI solution?",
    answer: "Most projects are delivered within 1-3 weeks, depending on complexity. Simple chatbots can be ready in days, while complex multi-agent systems may take longer. We prioritize rapid delivery without compromising quality."
  },
  {
    question: "Do I need technical knowledge to use your AI systems?",
    answer: "Not at all! We build user-friendly solutions that anyone on your team can use. We provide full training and documentation, and our systems are designed to work seamlessly with your existing tools."
  },
  {
    question: "What AI models do you use?",
    answer: "We work with the latest cutting-edge models including GPT-4.1, Claude 3.7, Llama 3.1, and custom fine-tuned models. We select the best technology based on your specific needs and requirements."
  },
  {
    question: "Can you integrate with our existing tools?",
    answer: "Yes! We specialize in integrations with popular platforms like Zapier, Airtable, Notion, Slack, various CRMs, billing systems, and custom APIs. If you use it, we can likely connect to it."
  },
  {
    question: "How much does a custom AI solution cost?",
    answer: "Pricing varies based on project scope and complexity. We offer transparent pricing with no hidden fees. Book a free strategy call to discuss your needs and get a detailed quote."
  }
];

const FAQ = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-panel rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
