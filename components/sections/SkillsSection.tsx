'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '@/lib/data'

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const tagVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.4, delay: i * 0.06, ease: 'backOut' },
  }),
}

export default function SkillsSection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ninja-orange/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">02 · ARSENAL</div>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl">
            The <span className="text-ninja-orange">Jutsu</span> Scroll
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-4 bg-gradient-to-r from-transparent via-ninja-orange to-transparent shadow-[0_0_10px_rgba(255,110,26,0.5)]" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              custom={catIdx}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-ninja-card border border-ninja-border clip-angled-lg p-6 overflow-hidden"
              data-hover
            >
              {/* Top border line reveal */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ninja-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_6px_rgba(255,110,26,0.6)]" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-ninja-orange/60 border-r-transparent" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center bg-ninja-orange/10 border border-ninja-orange/30 text-base shrink-0">
                  {cat.icon}
                </div>
                <div className="font-mono text-xs text-ninja-orange tracking-[3px] uppercase">{cat.title}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, tagIdx) => (
                  <motion.span
                    key={tag.label}
                    custom={catIdx * 6 + tagIdx}
                    variants={tagVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    data-hover
                    className={`px-3 py-1.5 text-xs font-mono tracking-[0.5px] border transition-all duration-250 clip-angled-sm
                      ${tag.highlight
                        ? 'border-ninja-orange/40 text-ninja-orange bg-ninja-orange/7 hover:bg-ninja-orange/15'
                        : 'border-ninja-border text-ninja-text bg-white/[0.02] hover:border-ninja-blue hover:text-ninja-blue hover:bg-ninja-blue/5'
                      }`}
                  >
                    {tag.label}
                  </motion.span>
                ))}
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ninja-orange/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
