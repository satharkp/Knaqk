import { motion } from 'framer-motion';
import { Code, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center text-[var(--color-brand-orange)] hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)]">
              <Code size={40} />
            </div>
            <h1 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)]">Web Development</h1>
          </div>

          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-inter leading-relaxed mb-12">
            Forging digital empires with code. We build lightning-fast, responsive, and stunning websites that convert visitors into customers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">Modern Tech Stack</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                We leverage the latest technologies like React, Next.js, and Tailwind CSS to build robust and scalable web applications.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">User-Centric Design</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                Every line of code is written with the user in mind, ensuring a seamless and intuitive experience across all devices.
              </p>
            </div>
          </div>

          <section className="py-12 border-t border-[var(--color-border-primary)]">
            <h2 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-8">Our Development Cycle</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Clean, maintainable, and SEO-optimized codebases.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Edge-case testing and performance optimization.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Continuous support and iterative improvements.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 flex justify-center">
            <Link to="/#contact" className="px-10 py-4 bg-[var(--color-brand-orange)] text-black font-brand font-bold text-xl rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,159,28,0.3)]">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
