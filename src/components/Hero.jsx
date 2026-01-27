import { motion } from 'framer-motion';
import GlowingQ from './GlowingQ';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-brand-dark)]"
    >
      {/* Background Texture/Noise could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.05)_0%,rgba(5,5,5,1)_70%)] pointer-events-none"></div>

      <motion.div
        style={{ opacity, scale }}
        className="z-10 flex flex-col items-center text-center p-4"
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
          className="text-5xl md:text-8xl font-brand font-bold text-white tracking-tighter mb-4 mix-blend-screen"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          KNAQK
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-inter tracking-[0.2em] uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Illuminating <span className="text-[var(--color-brand-orange)] font-bold shadow-orange-500 drop-shadow-[0_0_10px_rgba(255,159,28,0.8)]">Ideas</span>
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-12 px-8 py-3 bg-[var(--color-brand-orange)] text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start the Spark
        </motion.button>
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
