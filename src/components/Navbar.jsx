import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LightSwitch from './LightSwitch';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-bg-primary)]/50 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl font-brand font-bold tracking-wider flex items-center gap-0.5 xs:gap-1"
          >
            <div className="flex items-center gap-0.5 xs:gap-1">
              <Link to="/" className="text-[var(--color-text-primary)]">KNA</Link>
              <div className="relative flex flex-col items-center">
                <Link to="/" className="text-[var(--color-brand-orange)]">Q</Link>
                <AnimatePresence mode="wait">
                  {!scrolled && location.pathname === '/' && (
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
              </div>
              <Link to="/" className="text-[var(--color-text-primary)]">K</Link>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-orange)] transition-colors font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-brand-orange)] font-brand font-bold"
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    {link.name}
                  </Link>
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
