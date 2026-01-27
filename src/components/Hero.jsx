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
      // Set initial random position
      gsap.set(spark, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        opacity: gsap.utils.random(0.1, 0.3),
        scale: gsap.utils.random(1, 1.5),
      });

      // Continuous floating animation
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
  const container = useRef();
  const titleRef = useRef();
  const subRef = useRef();
  const descRef = useRef();
  const ctaRef = useRef();
  const statsRef = useRef();
  const qRef = useRef();
  const targetRef = useRef(null);

  // Framer Motion scroll handling (kept for ease of use with scroll values)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(qRef.current, { scale: 0, opacity: 0, duration: 1.5 }, 0.2)
      .from(titleRef.current, { y: 60, opacity: 0, duration: 1 }, "-=0.8")
      .from(subRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.7")
      .from(descRef.current, { opacity: 0, y: 20, duration: 1 }, "-=0.6")
      .from(ctaRef.current, { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(statsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8
      }, "-=0.4");

    // Infinite floating for the Q bulb
    gsap.to(qRef.current, {
      y: "+=15",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500"
    >
      <SparkField />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.05)_0%,var(--color-bg-primary)_70%)] pointer-events-none"></div>

      <motion.div
        ref={container}
        style={{ opacity: scrollOpacity, scale: scrollScale }}
        className="z-10 flex flex-col items-center text-center p-4 max-w-5xl"
      >
        {/* The "Bulb" Q */}
        <div ref={qRef} className="mb-8">
          <GlowingQ className="w-32 h-32 md:w-48 md:h-48" />
        </div>

        {/* Staggered Text Reveal */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-9xl font-brand font-bold text-[var(--color-text-primary)] tracking-tighter mb-4"
        >
          KNAQK
        </h1>

        <p
          ref={subRef}
          className="text-xl md:text-3xl text-[var(--color-text-secondary)] font-inter tracking-[0.2em] uppercase mb-8"
        >
          Illuminating <span className="text-[var(--color-brand-orange)] font-bold">Connections</span>
        </p>

        <div
          ref={descRef}
          className="max-w-2xl text-[var(--color-text-secondary)] font-inter text-lg leading-relaxed mb-12"
        >
          We bridge the gap between complex technology and human experience.
          KNAQK isn't just a studio; it's the spark that turns your vision into a digital empire.
        </div>

        {/* CTA & Features */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <button
            ref={ctaRef}
            className="px-10 py-4 bg-[var(--color-brand-orange)] text-black font-bold text-xl rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(255,159,28,0.5)] transition-all duration-300"
            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Work
          </button>

          <div ref={statsRef} className="flex gap-8 text-[var(--color-text-secondary)] font-brand text-sm tracking-widest uppercase">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-16">
        <div className="w-[1px] h-full bg-gradient-to-b from-[var(--color-brand-orange)] to-transparent opacity-50 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
