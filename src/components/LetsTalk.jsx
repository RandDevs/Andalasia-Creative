import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function LetsTalk() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about">
      {/* About blurb */}
      <div
        className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-8 md:gap-16 border-b border-white/15 bg-brand-bg2"
        style={{ borderBottomColor: 'rgba(255,255,255,0.08)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="font-inter text-sm font-medium text-zinc-400 tracking-widest uppercase block mb-6">
            About Us
          </span>
          <h2
            className="font-syne font-bold text-white text-3xl md:text-5xl leading-[1.2] tracking-wide"
          >
            We turn visions into<br className='hidden md:block' /> living experiences.
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
                <span className="font-inter text-xs text-gray-400 block tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LET'S TALK */}
      <div
        ref={ref}
        className="relative px-8 md:px-16 py-16 md:py-28 overflow-hidden flex flex-col items-start w-full bg-brand-bg1"
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
          <span className="font-inter text-sm font-medium text-zinc-400 tracking-widest uppercase block mb-6">
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
            href="mailto:pdamaraputra@andalasiacreative.com"
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-2 md:gap-4 w-fit max-w-full border border-gray-700 rounded-sm px-5 py-4 sm:px-8 sm:py-4 md:px-12 md:py-5 font-inter text-[10px] sm:text-xs md:text-base font-semibold tracking-wider sm:tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 mt-4 mb-12 md:mb-20"
          >
            <span className="break-all text-center leading-relaxed uppercase ">pdamaraputra@andalasiacreative.com</span>
            <ExternalLink size={16} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" />
          </motion.a>


        </motion.div>
      </div>

      {/* Fat Footer */}
      <footer className="relative px-8 md:px-16 w-full font-inter bg-brand-bg2">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 pt-20">
          {/* Column 1: Brand & Address */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold tracking-widest text-white mb-6 uppercase">
              ANDALASIA CREATIVE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jl Swakarya Blok C No. 15, Pd Labu, Cilandak, Jakarta Selatan.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm w-fit">Services</a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm w-fit">Work</a>
              <a href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm w-fit">Reviews</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm w-fit">About</a>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pdamaraputra@andalasiacreative.com" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 text-sm">
                <span>Email</span>
                <span className="text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </a>
              <a href="https://wa.me/6281317977663" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 text-sm">
                <span>WhatsApp</span>
                <span className="text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </a>
              <a href="https://instagram.com/andalasia.creative" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 text-sm">
                <span>Instagram</span>
                <span className="text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </a>
              <a href="https://www.tiktok.com/@andalasia.creative?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 text-sm">
                <span>TikTok</span>
                <span className="text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 pb-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Andalasia Creative. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
