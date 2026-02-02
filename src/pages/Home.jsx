import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
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

        <Testimonials />
        <FAQ />

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
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center text-[var(--color-brand-orange)] font-bold border-b border-[var(--color-brand-orange)] hover:text-white hover:border-white transition-all">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 px-6 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-primary)] flex flex-col items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl xs:text-5xl md:text-8xl font-brand font-bold text-[var(--color-text-primary)] mb-6">Ready to Ignite?</h2>
            <p className="text-[var(--color-text-secondary)] text-lg xs:text-xl md:text-2xl max-w-2xl mx-auto font-inter px-4">
              Let's turn your idea into something massive. Our team is ready when you are.
            </p>
          </motion.div>

          <ContactForm />
        </section>
      </motion.div>
    </>
  );
};

export default Home;
