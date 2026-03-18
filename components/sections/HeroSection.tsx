'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

/* ---------- tiny helpers ---------- */
const stagger = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

export default function HeroSection() {
  const firstRef  = useRef<HTMLSpanElement>(null)
  const lastRef   = useRef<HTMLSpanElement>(null)
  const greetRef  = useRef<HTMLDivElement>(null)

  /* GSAP title reveal */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(greetRef.current, { opacity: 0, y: 20, duration: 0.7, delay: 0.2 })
      gsap.from(firstRef.current, {
        opacity: 0, x: -60, duration: 1, delay: 0.5, ease: 'power3.out',
      })
      gsap.from(lastRef.current, {
        opacity: 0, x: 60,  duration: 1, delay: 0.7, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-chakra-radial pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-radial pointer-events-none opacity-40 blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid pointer-events-none opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* ── LEFT: TEXT ── */}
        <div>
          {/* Greeting */}
          <div className="section-tag mb-6">
            INITIALIZE · SHADOW PROTOCOL
          </div>

          {/* Name */}
          <h1 className="font-cinzel font-black leading-[0.95] mb-4">
            <span  className="block text-ninja-text text-6xl md:text-8xl ">
              MD Shariful
            </span>
            <span
              className="block text-transparent text-6xl md:text-8xl"
              style={{ WebkitTextStroke: '1.5px #FF6E1A' }}
            >
              Islam
            </span>
          </h1>

          {/* Role */}
          <motion.div {...stagger(1)} className="font-mono text-ninja-blue text-sm tracking-[4px] uppercase mb-6">
            Backend Developer &amp; Shadow Coder
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...stagger(1.1)}
            className="text-ninja-muted text-lg leading-relaxed max-w-md mb-10 border-l-2 border-ninja-orange pl-4"
          >
            A <strong className="text-ninja-text">CS student</strong> who forges systems in the darkness —
            {' '}<span className="text-ninja-orange">high-performance APIs</span>, real-time architectures, and
            {' '}<span className="text-ninja-blue">distributed pipelines</span> that scale under pressure.
          </motion.p>

          {/* Buttons */}
          <motion.div {...stagger(1.2)} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-hover
              className="clip-angled bg-ninja-orange text-black font-bold text-sm tracking-[2px] uppercase px-8 py-3 hover:shadow-orange-glow transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">⚡ View Missions</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[200%] transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              data-hover
              className="clip-angled border border-ninja-blue text-ninja-blue font-semibold text-sm tracking-[2px] uppercase px-8 py-3 hover:bg-ninja-blue/10 hover:shadow-blue-glow transition-all duration-300"
            >
              ↗ Contact
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...stagger(1.3)} className="flex gap-8 pt-6 border-t border-ninja-border">
            {[
              { num: '5+', label: 'Live Projects' },
              { num: '8+', label: 'Technologies'  },
              { num: '∞',  label: 'Curiosity'     },
            ].map(s => (
              <div key={s.label}>
                <div className="font-cinzel font-black text-3xl text-ninja-orange text-glow-orange">{s.num}</div>
                <div className="font-mono text-[10px] text-ninja-muted tracking-[2px] uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: AVATAR ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1    }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
            {/* Orbit rings */}
            {[
              { size: 'inset-0',   dur: '20s',  color: 'border-ninja-orange/30', reverse: false },
              { size: 'inset-5',   dur: '14s',  color: 'border-ninja-blue/20',   reverse: true,  dashed: true },
              { size: 'inset-10',  dur: '26s',  color: 'border-ninja-orange/15', reverse: false },
            ].map((ring, i) => (
              <div
                key={i}
                className={`absolute ${ring.size} rounded-full border ${ring.color} ${ring.dashed ? 'border-dashed' : ''}`}
                style={{ animation: `spin ${ring.dur} linear infinite ${ring.reverse ? 'reverse' : ''}` }}
              >
                {/* Tick dots */}
                {i === 0 && (
                  <>
                    <span className="ring-tick top-0 left-1/2 bg-ninja-orange w-2 h-2 shadow-[0_0_8px_#FF6E1A]" />
                    <span className="ring-tick bottom-0 left-1/2 bg-ninja-blue  w-2 h-2 shadow-[0_0_8px_#58A6FF]" />
                  </>
                )}
              </div>
            ))}

            {/* Avatar frame */}
            <div className="absolute inset-16 rounded-full overflow-hidden border-2 border-ninja-orange/40 shadow-[0_0_40px_rgba(255,110,26,0.2),inset_0_0_20px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#2a1a0a] to-ninja-bg">
                <span className="font-noto font-bold text-6xl text-ninja-orange text-glow-orange animate-float select-none">
                  忍
                </span>
                <span className="font-cinzel font-black text-base tracking-[4px] text-ninja-text">
                  MSI
                </span>
              </div>
            </div>

            {/* Chakra label */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            >
              <div className="w-px h-16 bg-gradient-to-b from-ninja-orange/60 to-transparent" />
              <div className="font-mono text-[10px] text-ninja-orange tracking-[2px] writing-vertical select-none whitespace-nowrap rotate-90 mt-2">
                CHAKRA ACTIVE
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-ninja-muted tracking-[3px] uppercase">
        scroll
        <div className="w-px h-14 bg-gradient-to-b from-ninja-orange to-transparent animate-scroll-line shadow-[0_0_6px_rgba(255,110,26,0.4)]" />
      </div>

      {/* Vertical decorative text */}
      <div className="absolute bottom-16 right-8 hidden lg:block font-noto text-sm text-ninja-orange/10 tracking-[6px] select-none"
        style={{ writingMode: 'vertical-rl' }}>
        影のコーダー · シャリフ · 技術
      </div>
    </section>
  )
}
