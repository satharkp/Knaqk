import { motion } from 'framer-motion';

const GlowingQ = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* The Glow Effect Background */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-brand-orange)] rounded-full blur-[60px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* The Bulb SVG */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          relative z-10
          drop-shadow-[0_0_20px_rgba(0,0,0,0.25)]
          dark:drop-shadow-[0_0_25px_rgba(255,159,28,0.6)]
        "
      >
        <defs>
          <radialGradient id="bulb-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="glass-shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Glass Body Fill with Volume */}
        <path
          d="M50 15 C 30 15, 15 30, 15 50 C 15 65, 25 78, 38 83 L 38 92 L 62 92 L 62 83 C 75 78, 85 65, 85 50 C 85 30, 70 15, 50 15 Z"
          fill="url(#bulb-glow)"
          stroke="none"
        />

        {/* The Glass Bulb Outline - Premium Stroke */}
        <motion.path
          d="M50 15 C 30 15, 15 30, 15 50 C 15 65, 25 78, 38 83 L 38 92 L 62 92 L 62 83 C 75 78, 85 65, 85 50 C 85 30, 70 15, 50 15 Z"
          stroke="var(--color-brand-orange)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.9"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        {/* Glass Reflection/Highlight for 3D effect */}
        <motion.path
          d="M30 30 Q 40 20 60 25"
          stroke="url(#glass-shine)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        <motion.path
          d="M45 22 C 38 35, 38 55, 45 72"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        />

        {/* Base Details (Threads) */}
        <line x1="40" y1="86" x2="60" y2="86" stroke="var(--color-brand-orange)" strokeWidth="2" opacity="0.5" />
        <line x1="42" y1="89" x2="58" y2="89" stroke="var(--color-brand-orange)" strokeWidth="2" opacity="0.5" />

        {/* The Filament - Detailed Coil Look */}
        {/* Core Hot Wire */}
        <motion.path
          d="M34 52 Q 50 70 66 52"
          stroke="#FFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Outer Glow Wire */}
        <motion.path
          d="M34 52 Q 50 70 66 52"
          stroke="#FF9F1C"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: "blur(3px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />



        {/* Light Rays */}
        {/* {[45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <motion.line
            key={i}
            x1="50" y1="50"
            x2="50" y2="10"
            stroke="var(--color-brand-orange)"
            strokeWidth="2"
            transform={`rotate(${deg} 50 50)`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{
              delay: 2 + (i * 0.1),
              duration: 1.5,
              repeat: Infinity
            }}
          />
        ))} */}
      </svg>
    </div>
  );
};

export default GlowingQ;
