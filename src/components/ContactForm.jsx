import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', project: 'Web Development', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl px-6 py-12 md:py-16 bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] rounded-[2rem] backdrop-blur-md relative overflow-hidden shadow-2xl">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-orange)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-orange)]/5 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <div className="w-20 h-20 bg-[var(--color-brand-orange)] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,159,28,0.4)]">
              <CheckCircle size={40} className="text-black" />
            </div>
            <h3 className="text-3xl font-brand font-bold text-[var(--color-text-primary)] mb-4">Message Ignited!</h3>
            <p className="text-[var(--color-text-secondary)] font-inter text-lg">
              Our team has received your signal. We'll be in touch before the fuse runs out.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-widest flex items-center gap-2">
                  <User size={14} /> Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-[var(--color-border-primary)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-1 focus:ring-[var(--color-brand-orange)] transition-all placeholder:text-gray-600"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} /> Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-[var(--color-border-primary)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-1 focus:ring-[var(--color-brand-orange)] transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="text-sm font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-widest flex items-center gap-2">
                <Briefcase size={14} /> Project Type
              </label>
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-white/5 border border-[var(--color-border-primary)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-orange)] transition-all appearance-none cursor-pointer"
              >
                <option value="Web Development" className="bg-[#111]">Web Development</option>
                <option value="Marketing" className="bg-[#111]">Marketing</option>
                <option value="Advertising" className="bg-[#111]">Advertising</option>
                <option value="Branding" className="bg-[#111]">Branding</option>
                <option value="Other" className="bg-[#111]">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={14} /> How can we help?
              </label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your mission..."
                className="w-full bg-white/5 border border-[var(--color-border-primary)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-1 focus:ring-[var(--color-brand-orange)] transition-all resize-none placeholder:text-gray-600"
              />
            </div>

            <button
              disabled={status === 'sending'}
              type="submit"
              className={`w-full py-4 mt-4 rounded-xl font-brand font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300
                ${status === 'sending'
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-[var(--color-brand-orange)] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] active:scale-95'}`}
            >
              {status === 'sending' ? (
                <>Igniting...</>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
