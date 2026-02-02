import { motion } from 'framer-motion';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';

const Branding = () => {
  const plans = [
    {
      name: "Identity",
      price: "$499",
      period: "/package",
      description: "Essential branding for startups and individuals looking to make a mark.",
      features: [
        "Primary Logo Design",
        "Color Palette",
        "Typography Selection",
        "Social Media Kit",
        "1 Round of Revisions"
      ]
    },
    {
      name: "Standard",
      price: "$1,299",
      period: "/package",
      description: "A complete visual identity system for growing businesses.",
      popular: true,
      features: [
        "Primary & Secondary Logos",
        "Brand Style Guide",
        "Stationery Design",
        "Iconography Set",
        "Brand Voice Definition",
        "3 Rounds of Revisions"
      ]
    },
    {
      name: "Elite",
      price: "$2,999",
      period: "/package",
      description: "Total brand overhaul including market positioning and strategy.",
      features: [
        "Comprehensive Brand Audit",
        "Global Strategy & Positioning",
        "Full Visual Ecosystem",
        "Marketing Collateral",
        "Priority Support",
        "Unlimited Revisions"
      ]
    }
  ];

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
              <Lightbulb size={40} />
            </div>
            <h1 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)]">Branding</h1>
          </div>

          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-inter leading-relaxed mb-12">
            Crafting identities that shine. From iconic logos to complete visual systems, we build brands that people love and trust.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">Visual Identity</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                We design logos, color palettes, and typography that perfectly encapsulate your brand's essence and personality.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">Brand Strategy</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                We help you define your voice, mission, and values to ensure your brand resonates deeply with your target market.
              </p>
            </div>
          </div>

          <section className="py-12 border-t border-[var(--color-border-primary)]">
            <h2 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-8">The KNAQK Identity</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Memorable designs that stand the test of time.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Cohesive brand guidelines for consistent application.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Strategic positioning and market analysis.</p>
              </div>
            </div>
          </section>

          <Pricing plans={plans} />

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

export default Branding;
