import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const links = ['Services', 'Work', 'Reviews', 'About'];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-black/40 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-syne font-800 text-sm tracking-[0.3em] uppercase text-white mix-blend-difference select-none"
          style={{ fontWeight: 800 }}
        >
          Andalasia<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:hello@andalasiacreative.co"
          className="hidden md:block font-syne text-xs tracking-[0.15em] uppercase border border-white/20 text-white/70 px-5 py-2.5 hover:border-white/80 hover:text-white transition-all duration-300"
          style={{ letterSpacing: '0.15em' }}
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-4 h-px bg-white"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="block w-6 h-px bg-white"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="font-syne text-5xl font-extrabold text-white uppercase tracking-tight hover:text-gray-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="mailto:hello@andalasiacreative.co"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 font-syne text-xs tracking-[0.2em] uppercase border border-white/30 text-white/60 px-6 py-3"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
