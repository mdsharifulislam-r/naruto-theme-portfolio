/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ninja: {
          bg:     '#0D0D0D',
          card:   '#1F1F1F',
          border: '#30363D',
          muted:  '#6E7681',
          text:   '#C9D1D9',
          orange: '#FF6E1A',
          blue:   '#58A6FF',
        },
      },
      fontFamily: {
        cinzel:  ['Cinzel', 'serif'],
        rajdhani:['Rajdhani', 'sans-serif'],
        mono:    ['"Share Tech Mono"', 'monospace'],
        noto:    ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'chakra-radial': 'radial-gradient(ellipse at 50% 50%, rgba(255,110,26,0.12) 0%, transparent 70%)',
        'blue-radial':   'radial-gradient(ellipse at 50% 50%, rgba(88,166,255,0.10) 0%, transparent 70%)',
        'grid-pattern':  'linear-gradient(rgba(255,110,26,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,110,26,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(255,110,26,0.4), 0 0 60px rgba(255,110,26,0.15)',
        'blue-glow':   '0 0 20px rgba(88,166,255,0.4),  0 0 60px rgba(88,166,255,0.15)',
        'card-hover':  '0 8px 40px rgba(255,110,26,0.12)',
        'orange-glow': '0 0 20px rgba(255,110,26,0.45), 0 0 60px rgba(255,110,26,0.15)',
        'blue-glow':   '0 0 20px rgba(88,166,255,0.45), 0 0 60px rgba(88,166,255,0.15)',
      },
      clipPath: {
        'angled-br': 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
      },
      animation: {
        'spin-slow':    'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'pulse-glow':   'pulseGlow 2.5s ease-in-out infinite',
        'scroll-line':  'scrollLine 2.2s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        scrollLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '1' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
