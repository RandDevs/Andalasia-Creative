import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    id: 1,
    quote:
      'The lighting rig alone is worth every penny. We walked in and everything was pre-rigged, calibrated, and ready. Our shoot ran four hours ahead of schedule.',
    author: 'Reika Mori',
    role: 'Commercial Director',
    index: '01',
  },
  {
    id: 2,
    quote:
      'The dressing rooms are immaculate — full-length mirrors, vanity lighting, ample hanging space. Our talent felt genuinely looked after, and that energy translated on camera.',
    author: 'Marcus Webb',
    role: 'Fashion Photographer',
    index: '02',
  },
  {
    id: 3,
    quote:
      'What sets this studio apart is the crew. They anticipated every need before we asked. Professionalism at a level I rarely encounter. We book nowhere else now.',
    author: 'Senna Oliveira',
    role: 'Creative Producer',
    index: '03',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="reviews"
      className="relative bg-brand-bg2 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Faint vertical rule decoration */}
      <div
        className="absolute left-1/2 top-0 w-px h-20 -translate-x-1/2"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />

      {/* Section header */}
      <div className="px-8 md:px-16 pt-24 pb-16">
        <div className="flex items-end justify-between">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 28 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="font-inter text-sm font-medium text-zinc-400 tracking-widest uppercase block mb-4">
              Client Voices
            </span>
            <h2
              className="font-syne font-extrabold text-white text-4xl md:text-7xl"
              style={{ letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              What They<br />Say.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden md:flex flex-col items-end gap-1"
          >
            <span className="font-inter text-sm text-gray-500">
              {reviews.length} Reviews
            </span>
            <div className="h-px w-8 bg-white/30" />
          </motion.div>
        </div>
      </div>

      {/* Cards grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="px-8 md:px-16 pb-24 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-px"
        style={{ background: 'var(--bg-primary)' }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            className="group relative flex flex-col justify-between bg-brand-bg2 p-8 md:p-10 transition-colors duration-300 border border-brand-bg2 hover:bg-brand-bg1 hover:border-gray-400/15 "
          >
            {/* Ghost index number */}
            <span
              className="font-syne font-extrabold text-white/[0.2] select-none absolute top-6 right-8 leading-none"
              style={{ fontSize: '5rem' }}
            >
              {review.index}
            </span>

            {/* Opening mark */}
            <div className="mb-8">
              <span
                className="font-syne text-white/20 select-none leading-none"
                style={{ fontSize: '3.5rem', lineHeight: 1 }}
              >
                "
              </span>
            </div>

            {/* Quote text */}
            <p className="font-inter text-sm text-gray-400 leading-loose mb-12 flex-grow relative z-10">
              {review.quote}
            </p>

            {/* Author */}
            <div className="relative z-10 border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <span className="font-syne font-bold text-white text-base block mb-1 group-hover:text-white transition-colors duration-300">
                {review.author}
              </span>
              <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-gray-500">
                {review.role}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
