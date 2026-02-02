import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = ({ plans }) => {
  return (
    <section className="py-20 border-t border-[var(--color-border-primary)]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-brand font-bold text-[var(--color-text-primary)] mb-4">Pricing Plans</h2>
        <p className="text-[var(--color-text-secondary)] font-inter text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your business needs. Transparent pricing with no hidden costs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border ${plan.popular
                ? 'bg-[var(--color-bg-secondary)] border-[var(--color-brand-orange)] shadow-[0_0_30px_rgba(255,159,28,0.1)]'
                : 'bg-[var(--color-bg-secondary)] border-[var(--color-border-primary)]'
              } relative overflow-hidden group`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-[var(--color-brand-orange)] text-black font-brand font-bold px-4 py-1 rounded-bl-xl text-sm">
                POPULAR
              </div>
            )}

            <h3 className="text-2xl font-brand font-bold text-[var(--color-text-primary)] mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-brand font-bold text-[var(--color-brand-orange)]">{plan.price}</span>
              <span className="text-[var(--color-text-secondary)] font-inter">{plan.period}</span>
            </div>

            <p className="text-[var(--color-text-secondary)] font-inter mb-8 min-h-[3rem]">
              {plan.description}
            </p>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex gap-3 text-[var(--color-text-secondary)] font-inter">
                  <Check size={20} className="text-[var(--color-brand-orange)] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-full font-brand font-bold transition-all ${plan.popular
                ? 'bg-[var(--color-brand-orange)] text-black hover:bg-white'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
              }`}>
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
