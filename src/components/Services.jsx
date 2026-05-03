import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Clapperboard, Users, Mic2, Camera, Film, Sparkles, Globe } from 'lucide-react';

const services = [
  {
    index: '01',
    category: 'Event Management',
    tagline: 'Moments that transcend the ordinary.',
    description:
      'We orchestrate unforgettable experiences through meticulous planning and innovative design, connecting brands with their audiences in meaningful ways.',
    items: [
      { icon: CalendarDays, label: 'Corporate Events' },
      { icon: Mic2, label: 'Concerts & Live Shows' },
      { icon: Users, label: 'Brand Activations' },
      { icon: Globe, label: 'International Experiences' },
    ],
  },
  {
    index: '02',
    category: 'Content Production',
    tagline: 'Visuals that compel and endure.',
    description:
      'We craft compelling visual narratives that resonate. From concept to post-production, we deliver cinematic quality that elevates your brand.',
    items: [
      { icon: Clapperboard, label: 'Commercial Film' },
      { icon: Camera, label: 'Photography' },
      { icon: Film, label: 'Post-Production' },
      { icon: Sparkles, label: 'Motion Graphics' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`px-8 md:px-16 py-16 md:py-24 flex flex-col bg-brand-bg2 ${index === 1 ? 'border md:border-0 md:border-l border-white/8' : 'md:border-0 border-white/8 border'
        }`}
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Index number */}
      <motion.span
        variants={itemVariants}
        className="font-syne font-extrabold text-[7rem] md:text-[10rem] leading-none text-white/20 select-none mb-4"
        style={{ lineHeight: 0.85 }}
      >
        {service.index}
      </motion.span>

      {/* Category label */}
      <motion.div variants={itemVariants} className="mb-8">
        <span className="font-inter text-xs tracking-[0.3em] uppercase text-gray-400">
          {service.category}
        </span>
        <div className="h-px bg-white/10 mt-3 w-12" />
      </motion.div>

      {/* Tagline */}
      <motion.h3
        variants={itemVariants}
        className="font-syne font-bold text-white text-2xl md:text-3xl leading-tight mb-6"
        style={{ letterSpacing: '-0.01em' }}
      >
        {service.tagline}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="font-inter text-sm text-gray-400 leading-relaxed max-w-sm mb-12"
      >
        {service.description}
      </motion.p>

      {/* Service items */}
      <motion.div variants={containerVariants} className="grid grid-cols-2 gap-y-5 gap-x-8">
        {service.items.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={itemVariants}
            className="flex items-center gap-3 group"
          >
            <Icon
              size={14}
              className="text-gray-500 group-hover:text-white transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span className="font-inter text-sm tracking-wide text-gray-500 group-hover:text-white transition-colors duration-300">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="services" className="bg-brand-bg2">
      {/* Section header */}
      <div className="px-8 md:px-16 pt-24 pb-0 border-b border-white/8" style={{ borderBottomColor: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-end justify-between pb-8">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="font-inter text-sm font-medium text-zinc-400 tracking-widest uppercase block mb-4">
              What We Do
            </span>
            <h2
              className="font-syne font-extrabold text-white text-5xl md:text-7xl"
              style={{ letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              Our
              <br />
              Services
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="hidden md:block font-inter text-sm text-gray-500 max-w-[160px] text-right leading-relaxed"
          >
            Two disciplines,<br />one unified vision.
          </motion.p>
        </div>
      </div>

      {/* 2-column grid */}
      <div
        className="grid md:grid-cols-2 border-b border-white/8"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.index} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
