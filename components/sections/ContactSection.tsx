'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const LINKS = [
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: 'https://github.com/mdsharifulislam-r',
    href: 'https://github.com/mdsharifulislam-r',
  },
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'linkedin.com/in/shariful',
    href: 'https://www.linkedin.com/in/md-shariful-islam-160311229/',
  },
  {
    icon: '✉',
    label: 'eng.mdshariful.islam.7@gmail.com',
    href: 'mailto:eng.mdshariful.islam.7@gmail.com',
  },
]



export default function ContactSection() {
  const ref       = useRef<HTMLElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
const [state,setState] = useState(0);

useEffect(() => {
setState(1)
}, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-t from-ninja-orange/4 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-start">
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag mb-4">04 · CONTACT</div>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl mb-4">
            Send a <span className="text-ninja-orange">Message</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-ninja-orange to-transparent shadow-[0_0_10px_rgba(255,110,26,0.5)] mb-8" />

          <p className="text-ninja-muted text-base leading-relaxed mb-8">
            Whether it's a collaboration, a mission brief, or just a technical conversation — I'm listening.
            Leave a message or find me across the shadows.
          </p>

          {/* Big kanji decoration */}
          <div className="font-noto font-black text-8xl text-transparent mb-6 select-none"
            style={{ WebkitTextStroke: '1px rgba(255,110,26,0.12)' }}>
            忍
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 px-5 py-3.5 bg-ninja-card border border-ninja-border clip-angled-sm font-mono text-sm text-ninja-text hover:border-ninja-orange hover:text-ninja-orange hover:bg-ninja-orange/5 hover:shadow-orange-glow transition-all duration-300"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-ninja-orange/10 border border-ninja-orange/30 shrink-0">
                  {link.icon}
                </span>
                {link.label}
                <span className="ml-auto text-ninja-muted/50">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── FORM ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
         {state === 1 && <ContactForm handFunc={handleSubmit} loading={loading} sent={sent} />}
        </motion.div>
      </div>
    </section>
  )
}
