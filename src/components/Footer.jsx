import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-primary)] py-20 border-t border-[var(--color-border-primary)] text-[var(--color-text-primary)] transition-colors duration-500">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div>
          <h2 className="text-4xl font-brand font-bold mb-6">KNAQK</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xs font-inter leading-relaxed">
            Illuminating brands with creative strategies and cutting-edge technology. We solve problems others can't see.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-brand font-bold mb-6 text-[var(--color-brand-orange)]">Contact</h3>
          <ul className="space-y-4 text-[var(--color-text-secondary)] font-inter">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-[var(--color-brand-orange)]" />
              <span>123 Idea St, Creative Hub, NY</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[var(--color-brand-orange)]" />
              <span>+91 8590357616</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[var(--color-brand-orange)]" />
              <a href="mailto:knaqk.co@gmail.com" className="hover:text-[var(--color-text-primary)] transition-colors">knaqk.co@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h3 className="text-xl font-brand font-bold mb-6 text-[var(--color-brand-orange)]">Follow Us</h3>
          <div className="flex gap-4 mb-8">
            <a href="#" className="p-3 bg-[var(--color-bg-secondary)] rounded-full hover:bg-[var(--color-brand-orange)] hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-[var(--color-bg-secondary)] rounded-full hover:bg-[var(--color-brand-orange)] hover:text-black transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-[var(--color-bg-secondary)] rounded-full hover:bg-[var(--color-brand-orange)] hover:text-black transition-all">
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">© 2026 Knaqk Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
