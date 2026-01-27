import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const LightSwitch = ({ toggleTheme, theme }) => {
  const controls = useAnimation();
  const [isPulling, setIsPulling] = useState(false);

  const handleDragEnd = (event, info) => {
    setIsPulling(false);
    if (info.offset.y > 60) {
      // Trigger the "click" sound/vibration feel
      toggleTheme();
      // Snap back animation
      controls.start({ y: 0, transition: { type: "spring", stiffness: 300, damping: 15 } });
    } else {
      controls.start({ y: 0, transition: { type: "spring", stiffness: 400, damping: 10 } });
    }
  };

  return (
    <div className="fixed top-0 right-10 md:right-20 z-[60] flex flex-col items-center pointer-events-none">
      {/* The Stick/Base at the top */}
      <div className="w-1.5 h-4 bg-[var(--color-text-secondary)] rounded-b-full opacity-50" />

      {/* The Wire & Handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        dragElastic={0.1}
        animate={controls}
        onDragStart={() => setIsPulling(true)}
        onDragEnd={handleDragEnd}
        className="flex flex-col items-center cursor-grab active:cursor-grabbing pointer-events-auto"
      >
        {/* Wire */}
        <div className="w-0.5 h-32 md:h-48 bg-gradient-to-b from-[var(--color-text-secondary)] to-[var(--color-brand-orange)] opacity-80" />

        {/* Handle Body */}
        <div className={`w-4 h-10 rounded-full border-2 border-[var(--color-brand-orange)] transition-all duration-300 flex flex-col items-center justify-between py-1 ${isPulling ? 'bg-[var(--color-brand-orange)] scale-110 shadow-[0_0_20px_var(--color-brand-orange)]' : 'bg-transparent'}`}>
          <div className={`w-1 h-1 rounded-full ${isPulling ? 'bg-black' : 'bg-[var(--color-brand-orange)]'}`} />
          <div className={`w-1.5 h-1.5 rounded-full ${isPulling ? 'bg-black' : 'bg-[var(--color-brand-orange)]'}`} />
          <div className={`w-1 h-1 rounded-full ${isPulling ? 'bg-black' : 'bg-[var(--color-brand-orange)]'}`} />
        </div>

        {/* Status indicator (optional subtle glow below) */}
        <div className={`mt-2 w-1.5 h-1.5 rounded-full transition-all duration-500 ${theme === 'light' ? 'bg-[var(--color-brand-orange)] shadow-[0_0_10px_var(--color-brand-orange)]' : 'bg-transparent'}`} />
      </motion.div>
    </div>
  );
};

export default LightSwitch;
