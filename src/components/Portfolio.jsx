import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aurora Gala',
    category: 'Event Management',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    id: 2,
    title: 'Noir Campaign',
    category: 'Content Production',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=800&q=80',
  },
  {
    id: 3,
    title: 'Pulse Festival',
    category: 'Event Management',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
  },
  {
    id: 4,
    title: 'Obsidian Film',
    category: 'Content Production',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  },
  {
    id: 5,
    title: 'Zenith Summit',
    category: 'Event Management',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 6,
    title: 'Velvet Studio',
    category: 'Content Production',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  },
];

// Extended gallery — 12 projects for the modal
const galleryProjects = [
  ...projects,
  {
    id: 7,
    title: 'Solstice Retreat',
    category: 'Event Management',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
  },
  {
    id: 8,
    title: 'Monochrome Edit',
    category: 'Content Production',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
  },
  {
    id: 9,
    title: 'Ember Conference',
    category: 'Event Management',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
  {
    id: 10,
    title: 'Prism Lookbook',
    category: 'Content Production',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
  },
  {
    id: 11,
    title: 'Apex Launch',
    category: 'Event Management',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
  },
  {
    id: 12,
    title: 'Dusk Reel',
    category: 'Content Production',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
  },
];

const FILTERS = ['All', 'Event Management', 'Content Production'];

// ─── Gallery Modal ─────────────────────────────────────────────────────────────
function GalleryModal({ onClose }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === activeFilter);

  // Lock body scroll & Escape key
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-md overflow-y-auto"
    >
      {/* ── Header bar ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b"
        style={{
          background: 'rgba(9,9,11,0.92)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Title + count */}
        <div className="flex items-baseline gap-4">
          <span className="font-syne font-extrabold text-white text-lg tracking-tight">
            Full Gallery
          </span>
          <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-zinc-500">
            {filtered.length} Projects
          </span>
        </div>

        {/* Filter pills */}
        <div className="hidden md:flex items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-inter text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${activeFilter === f
                ? 'border-white/60 text-white bg-white/8'
                : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                }`}
              style={{ background: activeFilter === f ? 'rgba(255,255,255,0.06)' : 'transparent' }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="group flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
        >
          <span className="hidden sm:inline">Close</span>
          <span className="flex items-center justify-center w-8 h-8 border border-white/10 group-hover:border-white/50 transition-colors duration-300">
            <X size={14} strokeWidth={1.5} />
          </span>
        </button>
      </div>

      {/* ── Mobile filter pills ── */}
      <div className="flex md:hidden gap-2 px-6 pt-5 pb-1 overflow-x-auto">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex-shrink-0 font-inter text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border transition-all duration-300 ${activeFilter === f
              ? 'border-white/60 text-white'
              : 'border-white/10 text-zinc-500'
              }`}
            style={{ background: activeFilter === f ? 'rgba(255,255,255,0.06)' : 'transparent' }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="px-4 md:px-12 py-8 md:py-10">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.76, 0, 0.24, 1] }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-600 z-10" />
                  {/* Info */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                    <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="font-inter text-[9px] tracking-[0.25em] uppercase text-white/80 block mb-1.5">
                        {project.category} · {project.year}
                      </span>
                      <h4 className="font-syne font-bold text-white text-xl leading-tight">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div
        className="px-6 md:px-12 py-6 border-t flex items-center justify-between"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-zinc-600">
          Andalasia Creative · Full Portfolio
        </span>
        <button
          onClick={onClose}
          className="font-inter text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors duration-300"
        >
          ← Back to Site
        </button>
      </div>
    </motion.div>
  );
}

// ─── Portfolio Card ────────────────────────────────────────────────────────────
function PortfolioCard({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      className="portfolio-card group relative overflow-hidden"
    >
      <div className="w-full aspect-[4/3] overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10" />
        {/* Project info overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/90 block mb-2">
              {project.category} · {project.year}
            </span>
            <h4 className="font-syne font-bold text-white text-2xl leading-tight">
              {project.title}
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Portfolio Section ─────────────────────────────────────────────────────────
export default function Portfolio() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isGalleryOpen && <GalleryModal onClose={() => setIsGalleryOpen(false)} />}
      </AnimatePresence>

      <section id="work" className="bg-[rgb(17,17,17)]">
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
              <span className="font-inter text-sm font-medium text-zinc-400 tracking-widest uppercase block mb-4">
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
              <span className="font-inter text-sm text-gray-500">
                {projects.length} Projects
              </span>
              <div className="h-px w-8 bg-white/30" />
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div className="p-4 md:p-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <PortfolioCard
                key={project.id}
                project={project}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>

        {/* View All — triggers modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center py-16 border-t border-white/8"
          style={{ borderTopColor: 'rgba(255,255,255,0.08)' }}
        >
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="group flex items-center gap-4 font-syne text-sm tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="h-px w-8 bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
            View All Projects
            <span className="h-px w-8 bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
          </button>
        </motion.div>
      </section>
    </>
  );
}
