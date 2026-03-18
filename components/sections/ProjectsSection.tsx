'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: { each: 0.12, from: 'start' },
        duration: 0.75,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [inView])

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 max-w-7xl mx-auto px-6 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="section-tag mb-4">03 · MISSIONS</div>
        <h2 className="font-cinzel font-black text-4xl md:text-5xl mb-4">
          Completed <span className="text-ninja-orange">Missions</span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-ninja-orange to-transparent shadow-[0_0_10px_rgba(255,110,26,0.5)] mb-6" />
        <p className="text-ninja-muted text-base leading-relaxed max-w-xl">
          Each project is a battlefield conquered — backend architectures built under real constraints,
          solving real problems at scale.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.num} proj={proj} />
        ))}

        {/* Teaser */}
        <div
          className="project-card relative bg-ninja-card border border-dashed border-ninja-orange/20 clip-angled-lg p-8 flex flex-col items-center justify-center text-center min-h-[300px] group"
          data-hover
        >
          <div className="text-4xl text-ninja-orange/20 mb-4 group-hover:text-ninja-orange/40 transition-colors duration-300">⋯</div>
          <div className="font-cinzel font-bold text-ninja-muted text-base">Next Mission</div>
          <div className="font-mono text-[10px] text-ninja-muted/60 tracking-[3px] mt-2">IN PROGRESS</div>
          <div className="absolute inset-0 bg-gradient-to-br from-ninja-orange/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-sm" />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ proj }: { proj: (typeof PROJECTS)[0] }) {
  const isOrange = proj.color === 'orange'

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="project-card group relative bg-ninja-card border border-ninja-border clip-angled-lg p-6 overflow-hidden"
      data-hover
    >
      {/* Corner cut triangle */}
      <div className={`absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] ${isOrange ? 'border-t-ninja-orange/60' : 'border-t-ninja-blue/60'} border-r-transparent`} />

      {/* Hover glow top line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isOrange ? 'bg-gradient-to-r from-ninja-orange to-transparent shadow-[0_0_6px_rgba(255,110,26,0.6)]' : 'bg-gradient-to-r from-ninja-blue to-transparent shadow-[0_0_6px_rgba(88,166,255,0.6)]'}`} />

      {/* Mission number */}
      <div className="font-mono text-[10px] text-ninja-orange/50 tracking-[3px] mb-4">// {proj.num}</div>

      {/* Title */}
      <h3 className="font-cinzel font-bold text-xl text-ninja-text mb-1 leading-tight">{proj.title}</h3>
      <div className={`font-mono text-xs tracking-[2px] uppercase mb-4 ${isOrange ? 'text-ninja-blue' : 'text-ninja-orange'}`}>
        {proj.subtitle}
      </div>

      {/* Description */}
      <p className="text-ninja-muted text-sm leading-relaxed mb-4">{proj.description}</p>

      {/* Architecture callout */}
      <div className={`border-l-2 pl-3 mb-5 ${isOrange ? 'border-ninja-orange' : 'border-ninja-blue'} bg-ninja-orange/3 py-2`}>
        <span className={`font-mono text-[10px] tracking-[2px] uppercase block mb-1 ${isOrange ? 'text-ninja-orange' : 'text-ninja-blue'}`}>
          ⚙ ARCHITECTURE
        </span>
        <p className="font-mono text-[11px] text-ninja-muted leading-relaxed">{proj.architecture}</p>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {proj.stack.map(s => (
          <span
            key={s}
            className="px-2.5 py-1 text-[11px] font-mono text-ninja-blue bg-ninja-blue/8 border border-ninja-blue/20 clip-angled-sm"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Bottom radial glow */}
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none transition-all duration-500 ${isOrange ? 'bg-ninja-orange/5' : 'bg-ninja-blue/5'} group-hover:scale-150 group-hover:opacity-100 opacity-60`} />
    </motion.div>
  )
}
