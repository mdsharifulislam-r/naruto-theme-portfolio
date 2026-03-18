'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeSection, setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Active section tracker
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach(s => io.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-8 md:px-16 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-ninja-bg/90 backdrop-blur-xl border-b border-ninja-orange/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={e => { e.preventDefault(); handleNav('#hero') }}
        className="font-cinzel font-black text-xl tracking-[4px] text-ninja-orange text-glow-orange"
        data-hover
      >
        忍<span className="text-ninja-blue ml-1">SHARIF</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <button
              onClick={() => handleNav(link.href)}
              data-hover
              className={`nav-link ${activeSection === link.href.slice(1) ? '!text-ninja-orange' : ''}`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Hire CTA */}
      <a
        href="#contact"
        onClick={e => { e.preventDefault(); handleNav('#contact') }}
        data-hover
        className="hidden md:flex items-center gap-2 px-5 py-2 clip-angled-sm border border-ninja-orange/50 text-ninja-orange font-mono text-xs tracking-[2px] uppercase hover:bg-ninja-orange/10 hover:shadow-orange-glow transition-all duration-300"
      >
        <span className="animate-pulse-glow w-1.5 h-1.5 rounded-full bg-ninja-orange inline-block" />
        Available
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        data-hover
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={mobileOpen
              ? i === 0 ? { rotate: 45,  y: 9 }
              : i === 1 ? { opacity: 0 }
              :           { rotate: -45, y: -9 }
              : { rotate: 0, y: 0, opacity: 1 }
            }
            className="block w-6 h-px bg-ninja-orange"
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ninja-bg/95 backdrop-blur-xl border-b border-ninja-border py-6 px-8 flex flex-col gap-4"
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-left py-2 border-b border-ninja-border/30"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
