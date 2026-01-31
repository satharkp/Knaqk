import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, User, Mail, MessageSquare, Briefcase, Loader2 } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_swh957d",
        "template_zwglz5d",
        {
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
        },
        "dT751PEBRuwUk_kMC"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            project: "Web Development",
            message: "",
          });
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
          setStatus("idle");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = (field) => `
    w-full bg-white/5 border rounded-xl px-4 py-3 text-[var(--color-text-primary)] 
    focus:outline-none transition-all duration-300 placeholder:text-gray-600
    ${focusedField === field
      ? 'border-[var(--color-brand-orange)] shadow-[0_0_15px_rgba(255,159,28,0.2)] bg-white/10'
      : 'border-[var(--color-border-primary)]'
    }
  `;

  return (
    <div className="w-full max-w-2xl px-6 py-12 md:py-16 bg-[var(--color-bg-secondary)]/80 border border-[var(--color-border-primary)] rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Dynamic Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-brand-orange)]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--color-brand-orange)]/5 rounded-full blur-[120px] pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="w-24 h-24 bg-[var(--color-brand-orange)] rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,159,28,0.5)]"
            >
              <CheckCircle size={48} className="text-black" />
            </motion.div>
            <h3 className="text-4xl font-brand font-bold text-[var(--color-text-primary)] mb-4">Message Ignited!</h3>
            <p className="text-[var(--color-text-secondary)] font-inter text-xl max-w-sm">
              Our team has received your signal. We'll be in touch before the fuse runs out.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="text-xs font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
                  <User size={14} /> Name
                </label>
                <div className="relative group">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Name"
                    className={inputClasses('name')}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="text-xs font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
                  <Mail size={14} /> Email
                </label>
                <div className="relative group">
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="hello@example.com"
                    className={inputClasses('email')}
                  />
                </div>
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
                <Briefcase size={14} /> Project Type
              </label>
              <div className="relative group">
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('project')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses('project')} cursor-pointer appearance-none`}
                >
                  <option value="Web Development" className="bg-[#0a0a0a]">Web Development</option>
                  <option value="Marketing" className="bg-[#0a0a0a]">Marketing</option>
                  <option value="Advertising" className="bg-[#0a0a0a]">Advertising</option>
                  <option value="Branding" className="bg-[#0a0a0a]">Branding</option>
                  <option value="Other" className="bg-[#0a0a0a]">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-t-4 border-l-4 border-r-4 border-transparent border-t-[var(--color-brand-orange)] w-0 h-0" />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label className="text-xs font-brand font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] flex items-center gap-2 ml-1">
                <MessageSquare size={14} /> How can we help?
              </label>
              <div className="relative group">
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="5"
                  placeholder="Tell us about your mission..."
                  className={`${inputClasses('message')} resize-none`}
                />
              </div>
            </div>

            <motion.button
              disabled={status === 'sending'}
              type="submit"
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              className={`w-full py-5 rounded-2xl font-brand font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group
                ${status === 'sending'
                  ? 'bg-white/10 text-gray-500 cursor-not-allowed'
                  : 'bg-[var(--color-brand-orange)] text-black shadow-[0_10px_30px_rgba(255,159,28,0.3)] hover:shadow-[0_15px_40px_rgba(255,159,28,0.5)]'}`}
            >
              <AnimatePresence mode="wait">
                {status === 'sending' ? (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Loader2 size={24} className="animate-spin" />
                    <span>Igniting...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
