'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CODE_LINES = [
  { indent: 0, parts: [{ t: 'k', v: 'const ' }, { t: 'n', v: 'shinobi' }, { t: 'b', v: ' = {' }] },
  { indent: 1, parts: [{ t: 'k', v: 'name'    }, { t: 'b', v: ': ' }, { t: 's', v: '"MD Shariful Islam",' }] },
  { indent: 1, parts: [{ t: 'k', v: 'alias'   }, { t: 'b', v: ': ' }, { t: 's', v: '"Shadow Coder",' }] },
  { indent: 1, parts: [{ t: 'k', v: 'rank'    }, { t: 'b', v: ': ' }, { t: 's', v: '"Backend Developer",' }] },
  { indent: 1, parts: [{ t: 'k', v: 'village' }, { t: 'b', v: ': ' }, { t: 's', v: '"CS Department",' }] },
  { indent: 1, parts: [{ t: 'k', v: 'chakra'  }, { t: 'b', v: ': [' }] },
  { indent: 2, parts: [{ t: 's', v: '"Node.js"' }, { t: 'b', v: ', ' }, { t: 's', v: '"Golang"' }, { t: 'b', v: ',' }] },
  { indent: 2, parts: [{ t: 's', v: '"Python"'  }, { t: 'b', v: ', ' }, { t: 's', v: '"Docker"' }] },
  { indent: 1, parts: [{ t: 'b', v: '],' }] },
  { indent: 1, parts: [{ t: 'k', v: 'mission' }, { t: 'b', v: ': ' }, { t: 's', v: '"Build scalable systems",' }] },
  { indent: 1, parts: [{ t: 'k', v: 'status'  }, { t: 'b', v: ': '  }, { t: 'v', v: 'ACTIVE' }] },
  { indent: 0, parts: [{ t: 'b', v: '}' }] },
]

const colorMap: Record<string, string> = {
  k: 'text-[#FF7B72]',
  n: 'text-ninja-orange',
  s: 'text-[#A5D6FF]',
  v: 'text-ninja-blue',
  b: 'text-ninja-muted/70',
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const codeRef    = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const ctx = gsap.context(() => {
      // Stagger code lines
      gsap.from('.code-line', {
        opacity: 0, x: -24,
        stagger: 0.06,
        duration: 0.5,
        ease: 'power2.out',
      })
      // Text paragraphs
      gsap.from('.about-para', {
        opacity: 0, y: 28,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [inView])

  return (
    <section id="about" ref={sectionRef} className="relative py-28 max-w-7xl mx-auto px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* ── CODE BLOCK ── */}
        <div ref={codeRef}>
          <div
            className="relative bg-[#090909] border border-ninja-border border-l-2 border-l-ninja-orange p-8 font-mono text-sm leading-8 overflow-hidden"
          >
            {/* File tab */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ninja-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-ninja-muted text-xs tracking-[2px]">sharif.config.js</span>
            </div>

            {CODE_LINES.map((line, i) => (
              <div
                key={i}
                className="code-line flex items-baseline shimmer-line px-1 rounded"
                style={{ paddingLeft: `${line.indent * 1.5}rem` }}
              >
                <span className="text-ninja-muted/30 text-xs w-6 shrink-0 select-none mr-3">{i + 1}</span>
                {line.parts.map((p, j) => (
                  <span key={j} className={colorMap[p.t]}>{p.v}</span>
                ))}
              </div>
            ))}

            {/* Right edge glow */}
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-ninja-orange/3 to-transparent pointer-events-none" />
          </div>

          {/* Status badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 border border-ninja-orange/30 bg-ninja-orange/5 clip-angled-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-ninja-orange animate-pulse-glow shadow-[0_0_6px_#FF6E1A]" />
            <span className="font-mono text-xs text-ninja-orange tracking-[2px]">ONLINE · READY FOR MISSIONS</span>
          </div>
        </div>

        {/* ── TEXT ── */}
        <div ref={textRef}>
          <div className="section-tag mb-4">01 · ABOUT</div>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl leading-tight mb-4">
            The Shadow <span className="text-ninja-orange">Behind</span> the{' '}
            <span className="text-ninja-blue">Server</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-ninja-orange to-transparent shadow-[0_0_10px_rgba(255,110,26,0.5)] mb-8" />

          {[
            <>I am <strong className="text-ninja-text">MD Shariful Islam</strong> — a{' '}<span className="text-ninja-orange">Backend Developer</span> and Computer Science student who operates in the quiet, unseen layers of the web. While others build what users see, I forge the engines that make it all run.</>,
            <>My specialty lies in <strong className="text-ninja-text">designing robust, scalable backend systems</strong> — from real-time data pipelines with{' '}<span className="text-ninja-blue">Kafka and RabbitMQ</span>, to RESTful APIs built with{' '}<span className="text-ninja-orange">Node.js, Golang, and FastAPI</span>. Every architecture decision is deliberate, every line purposeful.</>,
            <>Like a true shinobi, I embrace <strong className="text-ninja-text">problem-solving under pressure</strong> — optimizing queries, resolving race conditions, designing fault-tolerant microservices. I've integrated <span className="text-ninja-orange">payment gateways</span>, built <span className="text-ninja-blue">live location tracking</span>, implemented KYC flows, and deployed production workloads with Docker and Nginx.</>,
          ].map((para, i) => (
            <p key={i} className="about-para text-ninja-muted text-base leading-relaxed mb-5">{para}</p>
          ))}

          {/* Trait pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['// Problem Solver', '// Systems Thinker', '// Clean Code', '// Tech Curious', '// Self-taught', '// Night Owl'].map(t => (
              <span
                key={t}
                data-hover
                className="px-3 py-1.5 border border-ninja-border font-mono text-xs text-ninja-muted tracking-[1px] clip-angled-sm hover:border-ninja-orange hover:text-ninja-orange hover:bg-ninja-orange/5 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
