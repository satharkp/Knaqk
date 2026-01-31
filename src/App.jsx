import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningSequence from './components/OpeningSequence';
import Home from './pages/Home';
import Marketing from './pages/Marketing';
import Advertising from './pages/Advertising';
import Branding from './pages/Branding';
import WebDevelopment from './pages/WebDevelopment';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll to top or to hash on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/branding" element={<Branding />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;
