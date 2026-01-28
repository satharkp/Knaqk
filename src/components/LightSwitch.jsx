import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const LightSwitch = ({ toggleTheme, theme, className }) => {
  const controls = useAnimation();
  const [isPulling, setIsPulling] = useState(false);

  const handleDragEnd = (event, info) => {
    setIsPulling(false);
    if (info.offset.y > 60) {
      // Trigger the "click" sound/vibration feel
      toggleTheme();
      // Snap back animation
      controls.start({ y: 0, transition: { type: "spring", stiffness: 220, damping: 22 } });
    } else {
      controls.start({ y: 0, transition: { type: "spring", stiffness: 220, damping: 22 } });
    }
  };

  return (
    <div className={`z-[60] flex flex-col items-center pointer-events-none ${className}`}>
      {/* The Stick/Base at the top */}
      <div className="w-1 h-3 bg-[var(--color-text-secondary)] rounded-b-full opacity-40" />


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
        <div className="w-[1px] h-32 md:h-44 bg-gradient-to-b from-[var(--color-text-secondary)] to-[var(--color-brand-orange)] opacity-60" />

        {/* Handle Body */}
        <div
          className={`w-3.5 h-10 rounded-full border border-[var(--color-brand-orange)] transition-all duration-300 flex items-center justify-center
          ${isPulling ? 'bg-[var(--color-brand-orange)] scale-105 shadow-[0_0_16px_var(--color-brand-orange)]' : 'bg-transparent'}`}
        >
          <div className={`w-1 h-4 rounded-full transition-colors duration-300
            ${isPulling ? 'bg-black' : 'bg-[var(--color-brand-orange)]'}`}
          />
        </div>

        {/* Status indicator (optional subtle glow below) */}
        <div
          className={`mt-2 w-1 h-1 rounded-full transition-all duration-700
          ${theme === 'light'
              ? 'bg-[var(--color-brand-orange)] shadow-[0_0_6px_var(--color-brand-orange)] opacity-80'
              : 'bg-transparent'}`}
        />
      </motion.div>
    </div>
  );
};

export default LightSwitch;
