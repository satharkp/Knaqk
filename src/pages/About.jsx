import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
          <h1 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)] mb-8">Our Brand Story</h1>

          <div className="space-y-12 text-[var(--color-text-secondary)] font-inter text-lg md:text-xl leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">The Spark</h2>
              <p>
                KNAQK was born in the dark. Not out of necessity, but out of a desire for clarity. We noticed that in the digital age, many brands were shouting into the void, yet failing to be *seen*. They had the noise, but they lacked the light.
              </p>
              <p className="mt-4">
                Our founders, a diverse group of creative rebels and technical architects, came together with a single belief: that technology shouldn't just be functional—it should be illuminating.
              </p>
            </section>

            <section className="bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-border-primary)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-[var(--color-brand-orange)]">
                <Sparkles size={120} />
              </div>
              <h2 className="text-2xl md:text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-4">What is a "KNAQK"?</h2>
              <p className="relative z-10">
                The name is a play on the word "knack"—the innate ability to do something well. For us, it's the knack for seeing solutions where others see dead ends. The "Q" in our name represents the search for quality, the quest for innovation, and the central light source that guides everything we build.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] w-fit">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-brand font-bold text-[var(--color-text-primary)]">The Mission</h3>
                <p>To ignite brands by fusing avant-garde design with cutting-edge technology. We don't just build websites or run ads; we create digital ecosystems that thrive on impact.</p>
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] w-fit">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-brand font-bold text-[var(--color-text-primary)]">The Vision</h3>
                <p>To become the global beacon for creative excellence, where every project we touch becomes a standard-bearer for its industry.</p>
              </div>
            </section>

            <section className="pt-8 border-t border-[var(--color-border-primary)]">
              <h2 className="text-2xl md:text-3xl font-brand font-bold text-[var(--color-brand-orange)] mb-6">Our Philosophy</h2>
              <p className="italic text-xl border-l-4 border-[var(--color-brand-orange)] pl-6 py-2 text-[var(--color-text-primary)]">
                "Light is the most efficient carrier of information. We use it to tell your story."
              </p>
              <p className="mt-8">
                Today, KNAQK is a collective of designers, developers, and strategists obsessed with the details. We work with those who are ready to step out of the shadows and into the spotlight. We work with those who have the KNAQK for greatness.
              </p>
            </section>
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/#contact" className="px-10 py-4 bg-[var(--color-brand-orange)] text-black font-brand font-bold text-xl rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,159,28,0.3)]">
              Start Your Story With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
