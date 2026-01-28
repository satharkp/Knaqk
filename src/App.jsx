import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Hero from './components/Hero';
import Footer from './components/Footer';
import OpeningSequence from './components/OpeningSequence';

const App = () => {
  const [showContent, setShowContent] = useState(false);
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

  return (
    <div className="relative bg-[var(--color-brand-dark)] min-h-screen text-white font-inter selection:bg-[var(--color-brand-orange)] selection:text-black">
      {!showContent && (
        <OpeningSequence onComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Services />

            <section id="work" className="py-16 md:py-20 flex flex-col items-center justify-center bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-primary)]">
              <h2 className="text-3xl xs:text-4xl md:text-6xl font-brand font-bold text-[var(--color-text-primary)] mb-8">Selected Work</h2>
              <div className="h-[30vh] xs:h-[40vh] flex items-center justify-center">
                <h2 className="text-2xl xs:text-4xl font-brand text-gray-500 italic text-center px-4">More Work Coming Soon...</h2>
              </div>
            </section>

            <section id="about" className="py-16 md:py-20 px-6 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)]">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl xs:text-4xl md:text-6xl font-brand font-bold text-[var(--color-text-primary)] mb-8 md:mb-12">About KNAQK</h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 font-inter text-base xs:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <p>
                    KNAQK was born from the belief that creativity and technology shouldn't just coexist—they should ignite each other. We are a collective of designers, developers, and strategists obsessed with light.
                  </p>
                  <p>
                    Our name represents the "knack" for seeing solutions where others see obstacles. We illuminate the path forward for brands that refuse to be ignored.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="py-16 md:py-20 px-6 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-primary)] flex flex-col items-center">
              <h2 className="text-3xl xs:text-5xl md:text-8xl font-brand font-bold text-[var(--color-text-primary)] mb-6 md:mb-8 text-center">Ready to Ignite?</h2>
              <p className="text-[var(--color-text-secondary)] text-lg xs:text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl text-center font-inter px-4">
                Let's turn your idea into something massive. Our team is ready when you are.
              </p>
              <button className="px-8 xs:px-12 py-4 xs:py-5 bg-[var(--color-brand-orange)] text-black font-bold text-xl xs:text-2xl rounded-full hover:bg-white transition-all shadow-xl">
                Get in Touch
              </button>
            </section>

            <Footer />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
