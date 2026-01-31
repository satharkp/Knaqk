import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowingQ from '../components/GlowingQ';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 flex justify-center"
        >
          <GlowingQ className="w-32 h-32 md:w-48 md:h-48 opacity-50" />
        </motion.div>

        <h1 className="text-8xl md:text-[12rem] font-brand font-bold text-[var(--color-brand-orange)] leading-none mb-4 select-none">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-brand font-bold text-[var(--color-text-primary)] mb-6">
          Lost in the Shadows?
        </h2>

        <p className="text-[var(--color-text-secondary)] font-inter text-lg md:text-xl max-w-md mx-auto mb-12">
          The page you're looking for has flickered out. Let's get you back to the light.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-orange)] text-black font-brand font-bold text-xl rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(255,159,28,0.3)] hover:scale-105 active:scale-95"
          >
            <Home size={24} />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-8 py-4 border border-[var(--color-border-primary)] text-[var(--color-text-primary)] font-brand font-bold text-xl rounded-full hover:bg-white/5 transition-all"
          >
            <ArrowLeft size={24} />
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Scattered Sparks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-[var(--color-brand-orange)] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default NotFound;
