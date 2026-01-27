import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Megaphone, Target, Lightbulb } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Forging digital empires with code. We build lightning-fast, responsive, and stunning websites.",
    icon: <Code size={40} />,
    color: "#FF9F1C"
  },
  {
    title: "Marketing",
    description: "Data-driven strategies that illuminate your brand in a crowded marketplace.",
    icon: <Target size={40} />,
    color: "#FFD700"
  },
  {
    title: "Advertising",
    description: "Creative campaigns that spark conversations and ignite consumer interest.",
    icon: <Megaphone size={40} />,
    color: "#FFA500"
  },
  {
    title: "Branding",
    description: "Crafting identities that shine. From logos to complete visual systems.",
    icon: <Lightbulb size={40} />,
    color: "#FFC300"
  }
];

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[var(--color-bg-primary)] transition-colors duration-500">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Section Title */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
          <h2 className="text-4xl md:text-6xl font-brand font-bold text-[var(--color-text-primary)] mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-[var(--color-brand-orange)]"></div>
        </div>

        <motion.div style={{ x }} className="relative flex gap-6 md:gap-10 px-6 md:px-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative w-[85vw] md:w-[600px] h-[50vh] md:h-[60vh] bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] rounded-3xl overflow-hidden backdrop-blur-sm hover:border-[var(--color-brand-orange)] transition-all duration-500 flex flex-col justify-center items-center p-6 md:p-8 text-center"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-radial-gradient from-[var(--color-brand-orange)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div>

              <motion.div
                className="mb-8 p-6 rounded-full bg-white/5 text-[var(--color-brand-orange)] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,159,28,0.2)]"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                {service.title}
              </h3>

              <p className="text-[var(--color-text-secondary)] font-inter text-lg leading-relaxed max-w-md">
                {service.description}
              </p>

              <button className="mt-8 px-6 py-2 border border-white/20 rounded-full text-sm font-syne hover:bg-[var(--color-brand-orange)] hover:border-transparent hover:text-black transition-all">
                Learn More
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
