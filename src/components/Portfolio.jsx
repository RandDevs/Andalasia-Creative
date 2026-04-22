import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Aurora Gala',
    category: 'Event Management',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    span: 'row-span-2',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Noir Campaign',
    category: 'Content Production',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=800&q=80',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Pulse Festival',
    category: 'Event Management',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    title: 'Obsidian Film',
    category: 'Content Production',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    span: 'row-span-2',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'Zenith Summit',
    category: 'Event Management',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    title: 'Velvet Studio',
    category: 'Content Production',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    span: '',
    aspect: 'aspect-[4/3]',
  },
];

function PortfolioCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      className={`portfolio-card group relative cursor-none ${project.span}`}
    >
      {/* Image wrapper with clip-path reveal effect */}
      <div className={`portfolio-image-wrapper w-full ${project.aspect} overflow-hidden relative`}>
        {/* Grayscale base layer */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="portfolio-image-bw absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Color overlay layer that reveals from bottom */}
        <div className="portfolio-image-color absolute inset-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{
              transform: 'inherit',
              transition: 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700 z-10" />

        {/* Project info overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 md:p-6">
          <motion.div
            className="overflow-hidden"
          >
            <div
              className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
            >
              <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/70 block mb-1">
                {project.category} · {project.year}
              </span>
              <h4 className="font-syne font-bold text-white text-xl md:text-2xl leading-tight">
                {project.title}
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="work" className="bg-[#050505]">
      {/* Section header */}
      <div
        className="px-8 md:px-16 pt-24 pb-12 border-b border-white/8"
        style={{ borderBottomColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-end justify-between">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-4">
              Selected Work
            </span>
            <h2
              className="font-syne font-extrabold text-white text-5xl md:text-7xl"
              style={{ letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              Portfolio
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex flex-col items-end gap-1"
          >
            <span className="font-inter text-xs text-gray-600">
              {projects.length} Projects
            </span>
            <div className="h-px w-8 bg-white/20" />
          </motion.div>
        </div>
      </div>

      {/* Asymmetric masonry grid */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.id}
              project={project}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center py-16 border-t border-white/8"
        style={{ borderTopColor: 'rgba(255,255,255,0.08)' }}
      >
        <a
          href="#"
          className="group flex items-center gap-4 font-syne text-sm tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="h-px w-8 bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
          View All Projects
          <span className="h-px w-8 bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
        </a>
      </motion.div>
    </section>
  );
}
