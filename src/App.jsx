import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningSequence from './components/OpeningSequence';
import ScrollProgress from './components/ScrollProgress';
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
      <ScrollProgress />

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
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/marketing" element={<PageWrapper><Marketing /></PageWrapper>} />
                <Route path="/advertising" element={<PageWrapper><Advertising /></PageWrapper>} />
                <Route path="/branding" element={<PageWrapper><Branding /></PageWrapper>} />
                <Route path="/web-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default App;
