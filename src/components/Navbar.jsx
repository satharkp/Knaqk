import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LightSwitch from './LightSwitch';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-bg-primary)]/50 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl font-brand font-bold tracking-wider flex items-center gap-0.5 xs:gap-1 cursor-pointer"
          >
            <span className="text-[var(--color-text-primary)]">KNA</span>
            <span className="relative flex flex-col items-center">
              <span className="text-[var(--color-brand-orange)]">
                Q
              </span>
              <AnimatePresence mode="wait">
                {!scrolled && (
                  <motion.div
                    key="light-switch"
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 0.8, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full -mt-[7px] xs:-mt-[9px]"
                  >
                    <LightSwitch
                      theme={theme}
                      toggleTheme={toggleTheme}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <span className="text-[var(--color-text-primary)]">K</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-orange)] transition-colors font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <div className="text-[var(--color-text-primary)] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              style={{ originY: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:hidden bg-[var(--color-bg-secondary)] backdrop-blur-xl border-t border-[var(--color-border-primary)]"
            >
              <div className="flex flex-col items-center py-8 gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-brand-orange)] font-brand font-bold"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
