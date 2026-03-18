import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Shariful Islam — Shadow Coder',
  description: 'Backend Developer & Computer Science Student. Forging high-performance systems in the dark.',
  openGraph: {
    title: 'MD Shariful Islam — Shadow Coder',
    description: 'Backend Developer crafting scalable APIs, real-time systems & distributed architectures.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Noto+Sans+JP:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ninja-bg text-ninja-text font-rajdhani overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
