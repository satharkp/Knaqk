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
    }, 4800);

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
              opacity: stage === 'flicker' ? [0, 0.05, 0, 0.1, 0.02] : stage === 'expand' ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* The Glowing Q Centered */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: stage === 'expand' ? 50 : 1,
              opacity: stage === 'expand' ? 0 : 1
            }}
            transition={{
              duration: stage === 'expand' ? 0.8 : 2,
              ease: "easeIn"
            }}
            className="relative z-10"
          >
            <GlowingQ className="w-32 h-32 md:w-64 md:h-64" />
          </motion.div>

          {/* Text Reveal aimed to happen just before expand */}
          <motion.div
            className="absolute bottom-20 text-white font-brand text-xl tracking-[0.5em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'flicker' ? [0, 1, 0.5, 1] : 0 }}
            transition={{ duration: 2 }}
          >
            Turning on the light...
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSequence;
