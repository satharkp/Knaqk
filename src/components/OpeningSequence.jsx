import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlowingQ from './GlowingQ';

const OpeningSequence = ({ onComplete }) => {
  const container = useRef();
  const bgRef = useRef();
  const qRef = useRef();

  useEffect(() => {
    const images = [
      "/hero.jpg",
      "/logo.svg"
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: onComplete
    });

    // Initial state
    tl.set(bgRef.current, {
      opacity: 0,
      willChange: "opacity"
    });

    tl.set(qRef.current, {
      scale: 0.6,
      opacity: 0,
      willChange: "transform, opacity",
      transformOrigin: "50% 50%"
    });

    // Smooth fade-in of Q
    tl.to(qRef.current, {
      opacity: 1,
      duration: 0.6
    }, 0.4);

    // Organic background flicker (soft)
    tl.to(bgRef.current, {
      opacity: 0.25,
      duration: 0.4,
      ease: "sine.inOut"
    }, 0.6);

    tl.to(bgRef.current, {
      opacity: 0.1,
      duration: 0.3,
      ease: "sine.inOut"
    });

    tl.to(bgRef.current, {
      opacity: 0.35,
      duration: 0.45,
      ease: "sine.inOut"
    });

    // Calm before expansion
    tl.to(bgRef.current, {
      opacity: 0.5,
      duration: 0.6
    });

    // Cinematic expansion (NO extreme scaling)
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 1.4,
      ease: "power3.inOut"
    }, "+=0.2");

    tl.to(qRef.current, {
      scale: 35,
      duration: 1.9,
      ease: "power4.in"
    }, "<");

    tl.to(qRef.current, {
      filter: "blur(6px)",
      duration: 0.25,
      ease: "power2.out"
    }, "-=0.25");

    // Immediate exit — no pause

  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden pointer-events-none">
      {/* Background Ambient Glow */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[var(--color-brand-orange)]"
      />

      {/* The Glowing Q Centered */}
      <div ref={qRef} className="relative z-10 flex items-center justify-center">
        <GlowingQ className="w-24 h-24 xs:w-32 xs:h-32 md:w-64 md:h-64" />
      </div>
    </div>
  );
};

export default OpeningSequence;
