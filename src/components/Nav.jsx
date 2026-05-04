import React from 'react'

const LINKS = [
  { href: '#finder', label: 'Finder' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#trivia', label: 'Trivia' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-serif italic text-gold-300 text-xl leading-none">
            365
          </span>
          <span className="hidden sm:inline label-mono group-hover:text-ivory-50 transition-colors">
            Moment Finder
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono hover:text-gold-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#finder" className="btn-gold !px-4 !py-2 text-[11px]">
          Find My Day
        </a>
      </div>
    </header>
  )
}
