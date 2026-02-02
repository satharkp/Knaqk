import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founding Director, Apex Dynamics",
    content: "KNAQK didn't just build our website; they defined our digital identity. Their 'knack' for seeing the bigger picture transformed our brand from a startup to an industry leader.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Horizon FinTech",
    content: "The level of technical expertise and creative flair at KNAQK is unmatched. They delivered a custom web platform that is not only beautiful but incredibly efficient.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Marketing, Stellar Retail",
    content: "Working with KNAQK was a game-changer. Their ROI-focused marketing strategies helped us scale our user base by 300% in just six months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "David Park",
    role: "Owner, GreenScape Creative",
    content: "The branding package we got from KNAQK exceeded all expectations. They captured our essence perfectly and gave us the confidence to compete globally.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-primary)] overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)] mb-6">Client Stories</h2>
            <p className="text-[var(--color-text-secondary)] text-xl font-inter">
              We don't just deliver projects; we build partnerships. Here's what some of our favorite clients have to say about the KNAQK experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block p-6 bg-[var(--color-bg-primary)] rounded-full border border-[var(--color-border-primary)] shadow-lg"
          >
            <Quote size={40} className="text-[var(--color-brand-orange)]" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)] hover:border-[var(--color-brand-orange)] transition-all duration-300 group shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-[var(--color-brand-orange)] object-cover"
                />
                <div>
                  <h4 className="text-lg font-brand font-bold text-[var(--color-text-primary)]">{testimonial.name}</h4>
                  <p className="text-sm font-inter text-[var(--color-text-secondary)]">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative flex-grow">
                <p className="text-[var(--color-text-secondary)] font-inter italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
