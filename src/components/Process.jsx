import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Compass, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    description: "We dive deep into your brand's DNA. We listen, we question, and we uncover the hidden truths that will set you apart.",
    icon: <Search size={32} />,
    color: "#FF9F1C"
  },
  {
    title: "Strategy",
    description: "We map out the terrain. Data-driven insights meet creative intuition to build a roadmap that leads directly to your goals.",
    icon: <Compass size={32} />,
    color: "#FFD700"
  },
  {
    title: "Creation",
    description: "The magic happens here. Our designers and developers work in sync to build digital experiences that are as robust as they are beautiful.",
    icon: <PenTool size={32} />,
    color: "#FFA500"
  },
  {
    title: "Launch",
    description: "We don't just push live; we ignite. We monitor, optimize, and ensure your message reaches the right eyes at the right time.",
    icon: <Rocket size={32} />,
    color: "#FFC300"
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 px-6 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-brand-orange)] font-bold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)] mb-6">The KNAQK Process</h2>
          <p className="text-[var(--color-text-secondary)] text-xl font-inter max-w-2xl mx-auto">
            A proven methodology designed to turn chaos into clarity and ideas into impact.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-border-primary)] -translate-x-1/2 md:translate-x-0" />

          {/* Animated Line Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-1 bg-[var(--color-brand-orange)] -translate-x-1/2 md:translate-x-0 origin-top shadow-[0_0_15px_rgba(255,159,28,0.5)]"
          />

          <div className="space-y-20 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-24 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } pl-12 md:pl-0`}
              >
                {/* Text Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-4">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] font-inter text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-bg-primary)] border-4 border-[var(--color-brand-orange)] shadow-[0_0_20px_rgba(255,159,28,0.3)] z-20">
                  <div className="text-[var(--color-brand-orange)] p-2">
                    {step.icon}
                  </div>
                </div>

                {/* Empty Space for Grid Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
