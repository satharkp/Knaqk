import { motion } from 'framer-motion';
import GlowingQ from './GlowingQ';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Spark = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const size = Math.random() * 3 + 1;

  return (
    <motion.div
      className="absolute rounded-full bg-[var(--color-brand-orange)] opacity-20 pointer-events-none blur-[1px]"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const SparkField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <Spark key={i} delay={i * 0.2} />
      ))}
    </div>
  );
};

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // Fade out quicker on scroll
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500"
    >
      <SparkField />
      {/* Background Texture/Noise could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.05)_0%,var(--color-bg-primary)_70%)] pointer-events-none"></div>

      <motion.div
        style={{ opacity, scale }}
        className="z-10 flex flex-col items-center text-center p-4 max-w-5xl"
      >
        {/* The "Bulb" Q */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <GlowingQ className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>

        {/* Staggered Text Reveal */}
        <motion.h1
          className="text-5xl md:text-9xl font-brand font-bold text-[var(--color-text-primary)] tracking-tighter mb-4 mix-blend-difference"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          KNAQK
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-[var(--color-text-secondary)] font-inter tracking-[0.2em] uppercase mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Illuminating <span className="text-[var(--color-brand-orange)] font-bold">Connections</span>
        </motion.p>

        <motion.div
          className="max-w-2xl text-gray-400 font-inter text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          We bridge the gap between complex technology and human experience.
          KNAQK isn't just a studio; it's the spark that turns your vision into a digital empire.
        </motion.div>

        {/* CTA & Features */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <motion.button
            className="px-10 py-4 bg-[var(--color-brand-orange)] text-black font-bold text-xl rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(255,159,28,0.5)] transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Work
          </motion.button>

          <div className="flex gap-8 text-[var(--color-text-secondary)] font-brand text-sm tracking-widest uppercase">
            <div className="flex flex-col items-center">
              <span className="text-[var(--color-brand-orange)] text-2xl font-bold">100+</span>
              <span>Projects</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 pl-8">
              <span className="text-[var(--color-brand-orange)] text-2xl font-bold">15+</span>
              <span>Experts</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-brand-orange)] to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
