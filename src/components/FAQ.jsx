import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does KNAQK do?",
    answer: "We are a full-service creative engine. We handle everything from building complex web applications and brand identities to running data-driven marketing and advertising campaigns. Think of us as your external innovation and creative department."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. A branding package typically takes 2-4 weeks, while a full-scale custom web application might take 8-12 weeks. We move fast but never sacrifice quality for speed."
  },
  {
    question: "Do you only work with tech startups?",
    answer: "Not at all. While we love the energy of start-ups, we've helped established businesses in retail, healthcare, and finance modernize their digital presence and reach new audiences."
  },
  {
    question: "What's the 'knack' in KNAQK?",
    answer: "It's our ability to see solutions where others see walls. It's the intuition that comes from years of experience combined with a relentless drive to innovate. It's that spark that makes your brand stand out."
  },
  {
    question: "Can I customize a plan to fit my specific budget?",
    answer: "Absolutely. Our listed plans are common starting points, but we're happy to tailor a proposal that aligns perfectly with your specific goals and resources. Let's talk!"
  }
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-border-primary)] last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group gap-4"
      >
        <span className="text-xl md:text-2xl font-brand font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-orange)] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-[var(--color-brand-orange)] shrink-0"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="pb-8 pr-12 text-lg text-[var(--color-text-secondary)] font-inter leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)] mb-6">Common Questions</h2>
          <p className="text-[var(--color-text-secondary)] text-xl font-inter max-w-2xl mx-auto">
            Everything you need to know about working with us. If you have any other questions, feel free to reach out.
          </p>
        </motion.div>

        <div className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 md:p-12 border border-[var(--color-border-primary)] shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
