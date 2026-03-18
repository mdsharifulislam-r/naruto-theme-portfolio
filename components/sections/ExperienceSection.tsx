'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCE } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

const TYPE_COLORS: Record<string, string> = {
  'Full-time':  'text-ninja-orange border-ninja-orange/40 bg-ninja-orange/8',
  'Contract':   'text-ninja-blue   border-ninja-blue/40   bg-ninja-blue/8',
  'Internship': 'text-[#A5D6FF]    border-[#A5D6FF]/40    bg-[#A5D6FF]/8',
  'Academic':   'text-[#7EE787]    border-[#7EE787]/40    bg-[#7EE787]/8',
}

export default function ExperienceSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' })
  const [active, setActive] = useState<string | null>(null)

  /* GSAP: animate the vertical timeline line drawing down */
  useEffect(() => {
    if (!inView || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1.8,
        ease: 'power3.inOut',
      })
      /* Stagger each card in */
      gsap.from('.exp-card', {
        scrollTrigger: { trigger: '.exp-timeline', start: 'top 75%' },
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        duration: 0.75,
        stagger: 0.18,
        ease: 'power3.out',
      })
      /* Dot pulse in sequence */
      gsap.from('.exp-dot', {
        scale: 0,
        opacity: 0,
        stagger: 0.18,
        delay: 0.2,
        duration: 0.4,
        ease: 'back.out(2)',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [inView])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Subtle orange haze */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-ninja-orange/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-ninja-blue/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="section-tag mb-4">02 · CHRONICLES</div>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl mb-4">
            Field <span className="text-ninja-orange">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-ninja-orange to-transparent shadow-[0_0_10px_rgba(255,110,26,0.5)] mb-5" />
          <p className="text-ninja-muted text-base leading-relaxed max-w-xl">
            The missions that forged my skills — from first internship to production systems serving thousands.
            Every role left a mark on my architecture thinking.
          </p>
        </motion.div>

        {/* ── TIMELINE ── */}
        <div className="exp-timeline relative">

          {/* Vertical spine line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px
                       bg-gradient-to-b from-ninja-orange/60 via-ninja-blue/40 to-transparent
                       hidden md:block"
            style={{ boxShadow: '0 0 8px rgba(255,110,26,0.3)' }}
          />

          {/* Mobile left rail */}
          <div className="absolute left-4 top-0 bottom-0 w-px
                         bg-gradient-to-b from-ninja-orange/60 via-ninja-blue/40 to-transparent
                         md:hidden"
            style={{ boxShadow: '0 0 8px rgba(255,110,26,0.3)' }}
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {EXPERIENCE.map((exp, idx) => {
              const isLeft  = idx % 2 === 0
              const isOrange = exp.color === 'orange'
              const accentColor = isOrange ? '#FF6E1A' : '#58A6FF'
              const isActive = active === exp.id

              return (
                <div
                  key={exp.id}
                  className={`exp-card relative flex items-start gap-0
                    md:grid md:grid-cols-2 md:gap-8`}
                >
                  {/* ── TIMELINE DOT (desktop center) ── */}
                  <div className="exp-dot absolute left-1/2 -translate-x-1/2 top-8 z-10 hidden md:flex
                                  items-center justify-center w-5 h-5 rounded-full border-2
                                  bg-ninja-bg"
                    style={{ borderColor: accentColor, boxShadow: `0 0 12px ${accentColor}60` }}
                  >
                    <span className="w-2 h-2 rounded-full animate-pulse-glow"
                      style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }} />
                  </div>

                  {/* ── MOBILE dot ── */}
                  <div className="exp-dot flex-shrink-0 relative z-10 ml-4 mr-5 mt-8 md:hidden
                                  flex items-center justify-center w-4 h-4 rounded-full border-2 bg-ninja-bg"
                    style={{ borderColor: accentColor, boxShadow: `0 0 10px ${accentColor}60` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full"
                      style={{ background: accentColor }} />
                  </div>

                  {/* ── LEFT SLOT (even) / right slot (odd) on desktop ── */}
                  {isLeft ? (
                    <>
                      {/* Card on left */}
                      <div className={`md:pr-12 col-start-1 ${!isLeft ? 'col-start-2' : ''}`}>
                        <ExpCard exp={exp} accentColor={accentColor} isOrange={isOrange}
                          isActive={isActive} onToggle={() => setActive(isActive ? null : exp.id)} />
                      </div>
                      {/* Year label on right */}
                      <div className="hidden md:flex items-start pt-9 pl-12">
                        <YearBadge exp={exp} accentColor={accentColor} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Year label on left */}
                      <div className="hidden md:flex items-start justify-end pt-9 pr-12">
                        <YearBadge exp={exp} accentColor={accentColor} />
                      </div>
                      {/* Card on right */}
                      <div className="md:pl-12 col-start-2">
                        <ExpCard exp={exp} accentColor={accentColor} isOrange={isOrange}
                          isActive={isActive} onToggle={() => setActive(isActive ? null : exp.id)} />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          {/* End cap */}
          <div className="relative flex justify-center mt-8">
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-ninja-muted/40 bg-ninja-bg" />
              <div className="font-mono text-[10px] text-ninja-muted/40 tracking-[3px]">ORIGIN</div>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { num: '2+',  label: 'Years Experience',   icon: '⚔️' },
            { num: '3',   label: 'Companies',          icon: '🏯' },
            { num: '10+', label: 'Production Projects', icon: '🔥' },
            { num: '∞',   label: 'Lines of Code',      icon: '⚡' },
          ].map((stat) => (
            <div
              key={stat.label}
              data-hover
              className="group relative bg-ninja-card border border-ninja-border clip-angled p-5 text-center overflow-hidden hover:border-ninja-orange/40 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-cinzel font-black text-3xl text-ninja-orange text-glow-orange mb-1">
                {stat.num}
              </div>
              <div className="font-mono text-[10px] text-ninja-muted tracking-[2px] uppercase">
                {stat.label}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-ninja-orange/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ninja-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Sub-components ─────────────────────────────────────────── */

function YearBadge({ exp, accentColor }: { exp: (typeof EXPERIENCE)[0]; accentColor: string }) {
  return (
    <div className="flex flex-col items-end gap-1.5">
      <div
        className="font-mono text-xs tracking-[2px] px-3 py-1 border clip-angled-sm"
        style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}10` }}
      >
        {exp.duration}
      </div>
      <div className="font-mono text-[10px] text-ninja-muted tracking-[2px]">{exp.period}</div>
      {exp.current && (
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-ninja-orange tracking-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-ninja-orange animate-pulse-glow" />
          ACTIVE
        </div>
      )}
    </div>
  )
}

function ExpCard({
  exp,
  accentColor,
  isOrange,
  isActive,
  onToggle,
}: {
  exp: (typeof EXPERIENCE)[0]
  accentColor: string
  isOrange: boolean
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      data-hover
      onClick={onToggle}
      className={`group relative bg-ninja-card border clip-angled-lg p-6 overflow-hidden transition-all duration-400 cursor-none
        ${isActive
          ? 'border-ninja-orange/50 shadow-[0_4px_40px_rgba(255,110,26,0.12)]'
          : 'border-ninja-border hover:border-ninja-orange/30 hover:shadow-[0_4px_30px_rgba(255,110,26,0.08)]'
        }`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-500 origin-left"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, transparent)`,
          boxShadow: `0 0 6px ${accentColor}80`,
          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
      {/* Corner triangle */}
      <div
        className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-r-[18px] border-r-transparent"
        style={{ borderTopColor: `${accentColor}60` }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`font-mono text-[10px] tracking-[2px] uppercase px-2.5 py-1 border clip-angled-sm ${TYPE_COLORS[exp.type] ?? 'text-ninja-muted border-ninja-border'}`}
            >
              {exp.type}
            </span>
            {exp.current && (
              <span className="flex items-center gap-1 font-mono text-[10px] text-ninja-orange tracking-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-ninja-orange animate-pulse-glow" />
                NOW
              </span>
            )}
          </div>
          <h3 className="font-cinzel font-bold text-lg text-ninja-text leading-tight">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-xs tracking-[1px]" style={{ color: accentColor }}>
              {exp.company}
            </span>
            <span className="text-ninja-muted/30">·</span>
            <span className="font-mono text-[10px] text-ninja-muted tracking-[1px]">
              {exp.location}
            </span>
          </div>
        </div>
        {/* Expand toggle */}
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-7 h-7 flex items-center justify-center border border-ninja-border text-ninja-muted/60 shrink-0 mt-1 clip-angled-sm group-hover:border-ninja-orange/40 group-hover:text-ninja-orange transition-all duration-300"
          style={{ fontSize: '1rem' }}
        >
          +
        </motion.div>
      </div>

      {/* Mobile period */}
      <div className="md:hidden font-mono text-[10px] text-ninja-muted tracking-[2px] mb-3">
        {exp.period} · {exp.duration}
      </div>

      {/* Description */}
      <p className="text-ninja-muted text-sm leading-relaxed mb-4">{exp.description}</p>

      {/* Stack tags — always visible */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {exp.stack.map((s) => (
          <span
            key={s}
            className="px-2 py-1 text-[11px] font-mono clip-angled-sm border"
            style={{
              color: accentColor,
              borderColor: `${accentColor}25`,
              background: `${accentColor}08`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Expandable highlights */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="mt-4 pt-4 border-t space-y-2.5"
              style={{ borderColor: `${accentColor}20` }}
            >
              <div
                className="font-mono text-[10px] tracking-[3px] uppercase mb-3"
                style={{ color: accentColor }}
              >
                ⚔ KEY ACHIEVEMENTS
              </div>
              {exp.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3 text-sm text-ninja-muted leading-relaxed"
                >
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: accentColor, boxShadow: `0 0 5px ${accentColor}80` }}
                  />
                  {h}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click hint when collapsed */}
      {!isActive && (
        <div className="font-mono text-[9px] text-ninja-muted/35 tracking-[2px] mt-1">
          CLICK TO EXPAND
        </div>
      )}

      {/* Radial glow */}
      <div
        className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${accentColor}08, transparent 70%)` }}
      />
    </motion.div>
  )
}
