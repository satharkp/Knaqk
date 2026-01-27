import { motion, AnimatePresence } from 'framer-motion';
import GlowingQ from './GlowingQ';
import { useState, useEffect } from 'react';

const OpeningSequence = ({ onComplete }) => {
  const [stage, setStage] = useState('initial'); // initial, flicker, expand, done

  useEffect(() => {
    // Sequence timing
    const flickerTimer = setTimeout(() => setStage('flicker'), 500);
    const expandTimer = setTimeout(() => setStage('expand'), 4000); // Wait for flicker to play out
    const doneTimer = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 5000); // 4000ms (start) + 800ms (duration) + buffer

    return () => {
      clearTimeout(flickerTimer);
      clearTimeout(expandTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Ambient Glow */}
          <motion.div
            className="absolute inset-0 bg-[var(--color-brand-orange)]"
            initial={{ opacity: 0 }}
            animate={{
              // Softer flicker: min 0.1, max 0.4. Avoids complete blackouts for "warm up" feel.
              opacity: stage === 'flicker' ? [0, 0.3, 0.1, 0.4, 0.2] : stage === 'expand' ? 1 : 0
            }}
            transition={{
              duration: stage === 'flicker' ? 2 : 0.8, // Faster fill for "expand"
              repeat: stage === 'flicker' ? Infinity : 0,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* The Glowing Q Centered */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: stage === 'expand' ? 50 : 1,
              opacity: stage === 'expand' ? 0 : 1
            }}
            transition={{
              duration: stage === 'expand' ? 0.8 : 2, // Faster expansion
              ease: "easeIn" // Sharp acceleration for "pop" feel
            }}
            className="relative z-10"
          >
            <GlowingQ className="w-32 h-32 md:w-64 md:h-64" />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSequence;
