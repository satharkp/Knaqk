import { motion } from 'framer-motion';
import { Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';

const Marketing = () => {
  const plans = [
    {
      name: "Social",
      price: "$799",
      period: "/month",
      description: "Focus on building your social presence and engaging with your audience.",
      features: [
        "3 Platforms Managed",
        "12 Monthly Posts",
        "Community Engagement",
        "Monthly Growth Report",
        "Basic Ad Management"
      ]
    },
    {
      name: "Growth",
      price: "$1,999",
      period: "/month",
      description: "Accelerate your business growth with data-driven strategies and content.",
      popular: true,
      features: [
        "All Platforms Managed",
        "Daily Content Creation",
        "SEO Content Strategy",
        "Email Marketing Campaigns",
        "Advanced Analytics",
        "Bi-weekly Strategy Calls"
      ]
    },
    {
      name: "Dominance",
      price: "$4,499",
      period: "/month",
      description: "A complete marketing partnership for industry leaders.",
      features: [
        "Full Marketing Outsourcing",
        "PPC & Paid Media Strategy",
        "Influencer Outreach",
        "PR & Media Relations",
        "Brand Narrative Strategy",
        "Daily Performance Monitoring"
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
              <Target size={40} />
            </div>
            <h1 className="text-4xl md:text-7xl font-brand font-bold text-[var(--color-text-primary)]">Marketing</h1>
          </div>

          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-inter leading-relaxed mb-12">
            Data-driven strategies that illuminate your brand in a crowded marketplace. We don't just find your audience; we captivate them.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">Strategic Growth</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                We develop comprehensive marketing roadmaps tailored to your business goals, ensuring every move is calculated and impactful.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]">
              <h3 className="text-2xl font-brand font-bold text-[var(--color-brand-orange)] mb-4">Performance Metrics</h3>
              <p className="text-[var(--color-text-secondary)] font-inter">
                Transparency is key. We provide detailed analytics and reporting to show exactly how your campaigns are performing and evolving.
              </p>
            </div>
          </div>

          <section className="py-12 border-t border-[var(--color-border-primary)]">
            <h2 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-8">Why KNAQK Marketing?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Customized campaigns designed for your specific niche.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Expertise across social, search, and email landscapes.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                <p className="text-lg text-[var(--color-text-secondary)]">Focus on ROI and sustainable long-term growth.</p>
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

export default Marketing;
