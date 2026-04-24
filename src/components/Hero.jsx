import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HEADLINE_WORDS = ['WE', 'CRAFT', 'VISUAL', 'IMPACT.'];

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.12,
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

const marqueeItems = [
  'Event Management',
  '✦',
  'Content Production',
  '✦',
  'Visual Storytelling',
  '✦',
  'Creative Direction',
  '✦',
  'Brand Activation',
  '✦',
  'Film & Photography',
  '✦',
];

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };
    el.addEventListener('mousemove', handleMouse);
    return () => el.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-x-hidden bg-[#050505]"
    >
      {/* Cursor-tracked radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 70%)`,
        }}
      />

      {/* Top-right label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute top-28 right-8 md:right-16 text-right"
      >
        <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-gray-500">
          Creative Production House
        </p>
        <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-600 mt-1">
          Est. 2026
        </p>
      </motion.div>

      {/* Bottom-left descriptor */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="absolute bottom-36 left-8 md:left-16 max-w-xs"
      >
        <p className="font-inter text-xs text-gray-500 leading-relaxed tracking-wide">
          Creating immersive events and high-quality<br />visual storytelling that leaves a lasting impression.
        </p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-36 right-8 md:right-16 flex flex-col items-end gap-2"
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 px-8 md:px-16 pb-12 md:pb-16">
        <div className="overflow-hidden mb-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-6 block"
          >
            ― 001
          </motion.span>
        </div>

        <div className="flex flex-col">
          {HEADLINE_WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden pb-4 -mb-4">
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="block font-syne font-extrabold text-white select-none"
                style={{
                  fontSize: 'clamp(2.5rem, 11vw, 11rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.92,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="relative z-10 border-t border-white/8 py-4 overflow-hidden bg-[#050505]"
        style={{ borderTopColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="marquee-container">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-inter text-xs tracking-[0.25em] uppercase text-gray-500 px-6"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
