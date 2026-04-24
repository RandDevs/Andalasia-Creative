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
            className="font-syne font-bold text-white text-4xl md:text-5xl leading-[1.2] tracking-wide"
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
            We partner with visionary brands to create impactful digital and physical experiences. Let's collaborate to bring your next big idea to life with precision and artistic excellence.
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
        className="relative px-8 md:px-16 py-20 md:py-28 overflow-hidden flex flex-col items-start w-full"
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
          className="relative z-10 w-full"
        >
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-6">
            Start a Project
          </span>
          <h2
            className="font-syne font-extrabold text-white leading-[0.88] mb-8"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              letterSpacing: '-0.03em',
            }}
          >
            LET'S
            <br />
            <span className="text-white/20">TALK.</span>
          </h2>

          {/* Minimalist Email CTA */}
          <motion.a
            href="mailto:hello@andalasiacreative.co"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-4 w-fit border border-gray-700 rounded-sm px-8 py-4 md:px-12 md:py-5 font-inter text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 mt-4 mb-20"
          >
            HELLO@ANDALASIACREATIVE.CO
            <ExternalLink size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>


        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className="relative px-8 md:px-16 py-8 border-t border-white/8 w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 font-inter text-xs md:text-sm tracking-widest"
        style={{ borderTopColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Left Group */}
        <div className="w-full md:w-auto uppercase">
          <span className="text-white">© 2026 ANDALASIA CREATIVE.</span>
          <span className="text-gray-500 hidden md:inline">{" "}</span>
          <br className="md:hidden" />
          <span className="text-gray-500">JL SWAKARYA BLOK C NO. 15, JAKARTA SELATAN.</span>
        </div>

        {/* Center Group */}
        <div className="w-full md:w-auto flex flex-col xl:flex-row items-center gap-2 md:gap-6">
          <a href="mailto:pdamaraputra@andalasiacreative.com" className="lowercase text-gray-400 hover:text-white transition-colors duration-300">
            pdamaraputra@andalasiacreative.com
          </a>
          <span className="hidden xl:inline text-gray-600">•</span>
          <a href="tel:081317977663" className="text-gray-400 hover:text-white transition-colors duration-300">
            0813-1797-7663
          </a>
        </div>

        {/* Right Group */}
        <div className="w-full md:w-auto flex justify-center md:justify-end uppercase">
          <a
            href="https://instagram.com/andalasia.creative"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            INSTAGRAM
            <ExternalLink size={14} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </footer>
    </section>
  );
}
