import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlowingQ from './GlowingQ';
import { useScroll, useTransform, motion } from 'framer-motion';

const SparkField = () => {
  const fieldRef = useRef();

  useGSAP(() => {
    const sparks = fieldRef.current.querySelectorAll('.gsap-spark');

    sparks.forEach((spark) => {
      gsap.set(spark, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        opacity: gsap.utils.random(0.1, 0.3),
        scale: gsap.utils.random(1, 1.5),
      });

      gsap.to(spark, {
        y: "-=150",
        x: `+=${gsap.utils.random(-50, 50)}`,
        opacity: 0.8,
        scale: 2,
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 10),
      });
    });
  }, { scope: fieldRef });

  return (
    <div ref={fieldRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="gsap-spark absolute rounded-full bg-[var(--color-brand-orange)] blur-[1px] shadow-[0_0_10px_var(--color-brand-orange)]"
          style={{ width: gsap.utils.random(2, 5), height: gsap.utils.random(2, 5) }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500"
    >
      <SparkField />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.05)_0%,var(--color-bg-primary)_70%)] pointer-events-none"></div>

      <motion.div
        style={{ opacity: scrollOpacity, scale: scrollScale }}
        className="z-10 flex flex-col items-center text-center p-4 max-w-5xl relative"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <GlowingQ className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-9xl font-brand font-bold text-[var(--color-text-primary)] tracking-tighter mb-4"
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
          className="max-w-2xl text-[var(--color-text-secondary)] font-inter text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          We bridge the gap between complex technology and human experience.
          KNAQK isn't just a studio; it's the spark that turns your vision into a digital empire.
        </motion.div>

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
            <div className="flex flex-col items-center border-l border-[var(--color-border-primary)] pl-8">
              <span className="text-[var(--color-brand-orange)] text-2xl font-bold">15+</span>
              <span>Experts</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-16">
        <div className="w-[1px] h-full bg-gradient-to-b from-[var(--color-brand-orange)] to-transparent opacity-50 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
