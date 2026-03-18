'use client'
import { useEffect, useRef } from 'react'
import { KANJI_CHARS } from '@/lib/data'

export default function KanjiRain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current!
    let interval: ReturnType<typeof setInterval>

    const spawn = () => {
      const el       = document.createElement('span')
      el.textContent = KANJI_CHARS[Math.floor(Math.random() * KANJI_CHARS.length)]

      const dur  = 14 + Math.random() * 18
      const size = 4 + Math.random() * 5

      Object.assign(el.style, {
        position:        'absolute',
        left:            Math.random() * 100 + 'vw',
        bottom:          '-10rem',
        fontFamily:      '"Noto Sans JP", sans-serif',
        fontSize:        size + 'rem',
        fontWeight:      '700',
        color:           'rgba(255,110,26,0.045)',
        animationName:   'kanjiFloat',
        animationDuration: dur + 's',
        animationTimingFunction: 'linear',
        animationFillMode: 'forwards',
        pointerEvents:   'none',
        userSelect:      'none',
      })

      container.appendChild(el)
      setTimeout(() => el.remove(), (dur + 1) * 1000)
    }

    // Initial burst
    for (let i = 0; i < 4; i++) spawn()
    interval = setInterval(spawn, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1] overflow-hidden pointer-events-none"
    />
  )
}
