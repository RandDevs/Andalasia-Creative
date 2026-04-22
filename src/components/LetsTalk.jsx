import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function LetsTalk() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-[#0d0d0d]">
      {/* About blurb */}
      <div
        className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-16 border-b border-white/8"
        style={{ borderBottomColor: 'rgba(255,255,255,0.08)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-6">
            About Us
          </span>
          <h2
            className="font-syne font-extrabold text-white text-4xl md:text-5xl leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            We turn visions into<br />living experiences.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col justify-end"
        >
          <p className="font-inter text-sm text-gray-400 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-8">
            {[['12+', 'Years'], ['240+', 'Projects'], ['3', 'Continents']].map(([num, label]) => (
              <div key={label}>
                <span className="font-syne font-extrabold text-white text-2xl">{num}</span>
                <span className="font-inter text-xs text-gray-600 block tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LET'S TALK */}
      <div
        ref={ref}
        className="relative px-8 md:px-16 py-32 md:py-48 overflow-hidden flex flex-col items-start"
      >
        {/* Large background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-syne font-extrabold text-white/[0.02] whitespace-nowrap"
            style={{ fontSize: 'clamp(5rem, 20vw, 18rem)', letterSpacing: '-0.04em' }}
          >
            LET'S TALK
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10"
        >
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-8">
            Start a Project
          </span>
          <h2
            className="font-syne font-extrabold text-white leading-[0.88] mb-10"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            LET'S
            <br />
            <span className="text-white/20">TALK.</span>
          </h2>
          <motion.a
            href="mailto:hello@andalasiacreative.co"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-4 font-syne font-bold text-white text-sm md:text-base tracking-[0.15em] uppercase border border-white/20 px-8 py-5 hover:bg-white hover:text-black transition-all duration-500"
          >
            hello@andalasiacreative.co
            <ExternalLink size={14} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className="px-8 md:px-16 py-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ borderTopColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-2">
          <span className="font-syne font-extrabold text-white text-xs tracking-[0.3em] uppercase">
            Andalasia Creative
          </span>
          <span className="text-gray-700 text-xs">·</span>
          <span className="font-inter text-[10px] text-gray-700 tracking-wide">© 2024 All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-gray-600 hover:text-white transition-colors duration-300"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            instagram
          </a>
          <span className="h-3 w-px bg-white/10" />
          <a
            href="https://behance.net"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-gray-600 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={12} strokeWidth={1.5} />
            behance
          </a>
        </div>

        <span className="font-inter text-[10px] text-gray-700 tracking-[0.2em] uppercase">
          Jakarta, Indonesia
        </span>
      </footer>
    </section>
  );
}
