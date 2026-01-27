import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlowingQ from './GlowingQ';

const OpeningSequence = ({ onComplete }) => {
  const container = useRef();
  const bgRef = useRef();
  const qRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // 1. Initial delay
    tl.set(bgRef.current, { opacity: 0 });
    tl.set(qRef.current, { scale: 0.5, opacity: 0 });

    // 2. Flicker Stage (4 seconds total range)
    tl.to(qRef.current, { opacity: 1, duration: 0.5 }, 0.5);

    // Create organic flicker
    const flickerValues = [0.3, 0.1, 0.4, 0.05, 0.35, 0.1, 0.4, 0.2];
    flickerValues.forEach((val, i) => {
      tl.to(bgRef.current, {
        opacity: val,
        duration: 0.15,
        ease: "none"
      }, 0.5 + (i * 0.4));
    });

    // 3. Expand Stage (Starts at 4s)
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 1.8,
      ease: "power3.inOut"
    }, 4);

    tl.to(qRef.current, {
      scale: 100,
      opacity: 1,
      duration: 1.8,
      ease: "power3.inOut"
    }, 4);

    // 4. Buffer for unmount
    tl.to({}, { duration: 0.2 });

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
        <GlowingQ className="w-32 h-32 md:w-64 md:h-64" />
      </div>
    </div>
  );
};

export default OpeningSequence;
