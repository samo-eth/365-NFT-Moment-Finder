import React from 'react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32"
    >
      {/* background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(201,169,110,0.10), rgba(0,0,0,0) 55%), radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,0.04), rgba(0,0,0,0) 70%)',
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <p className="eyebrow animate-fade-in">
          A fan-built discovery tool for the 365 community
        </p>

        <h1 className="mt-8 font-serif text-[40px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] text-balance tracking-tight animate-fade-up">
          <span className="block text-ivory-50">What happened on the day</span>
          <span className="block italic text-gold-300">you were born?</span>
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-ivory-100/70 text-base md:text-lg leading-relaxed text-pretty animate-fade-up [animation-delay:120ms]">
          Discover the historical moment behind your birthday and turn your
          date into a 365-style art card.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:220ms]">
          <a href="#finder" className="btn-primary">
            Find My Day
          </a>
          <a href="#about" className="btn-ghost">
            Learn About 365
          </a>
        </div>

        {/* museum frame accents */}
        <div className="mt-20 flex items-center justify-center gap-5 text-ivory-100/40">
          <span className="h-px w-14 bg-white/15" />
          <span className="label-mono">365 / 365 days / 1 of 1</span>
          <span className="h-px w-14 bg-white/15" />
        </div>
      </div>
    </section>
  )
}
