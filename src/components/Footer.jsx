import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-gold-300 text-lg leading-none">
            365
          </span>
          <span className="label-mono">Moment Finder</span>
        </div>
        <p className="label-mono text-center max-w-xl text-ivory-100/50">
          This is a fan-built community tool and is not an official 365 website.
        </p>
        <p className="label-mono">
          © {new Date().getFullYear()} · Dev:{' '}
          <a
            href="https://x.com/KaasLakpolla"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gold-300 hover:text-ivory-50 transition-colors"
          >
            @KaasLakpolla
          </a>
        </p>
      </div>
    </footer>
  )
}
