import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Hero from './components/Hero';
import Footer from './components/Footer';
import OpeningSequence from './components/OpeningSequence';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showDelayed, setShowDelayed] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (showContent) {
      // Delay mounting heavy below-the-fold components
      const timer = setTimeout(() => {
        setShowDelayed(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  return (
    <div className="bg-[var(--color-brand-dark)] min-h-screen text-white font-inter selection:bg-[var(--color-brand-orange)] selection:text-black">
      {!showContent && (
        <OpeningSequence onComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />

          {showDelayed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Services />

              <section id="work" className="h-[50vh] flex items-center justify-center bg-neutral-900 border-t border-white/5">
                <h2 className="text-4xl font-brand text-gray-500">More Work Coming Soon...</h2>
              </section>
              <Footer />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default App;
