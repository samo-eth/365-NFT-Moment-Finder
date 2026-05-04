import React from 'react'
import { GALLERY_HIGHLIGHTS, TIER_META } from '../data/events.js'
import { buildMomentFromKey } from '../utils/events.js'

export default function Gallery({ onSelect }) {
  const moments = GALLERY_HIGHLIGHTS.map((key) => buildMomentFromKey(key))

  return (
    <section id="gallery" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">The archive</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
              Known <span className="italic text-gold-300">365 Moments</span>
            </h2>
          </div>
          <p className="text-ivory-100/60 max-w-md text-sm md:text-base">
            Twelve calendar days already painted into the collection. Click
            any moment to load it as your result card.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m) => {
            const meta = TIER_META[m.tier] || TIER_META['Common']
            return (
              <li key={m.key}>
                <button
                  type="button"
                  onClick={() => onSelect?.(m)}
                  className="group w-full h-full text-left card-frame corner-tick hover:border-gold-500/50 transition-colors focus:outline-none focus:border-gold-400 overflow-hidden flex flex-col"
                >
                  {m.photo ? (
                    <div className="relative aspect-square overflow-hidden bg-ink-900">
                      <img
                        src={m.photo}
                        alt={m.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 label-mono bg-black/50 backdrop-blur px-2 py-1 border border-white/15">
                        Day {m.dayOfYear} / 365
                      </div>
                      <span
                        className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 text-[9px] uppercase tracking-widest-2 border bg-black/50 backdrop-blur ${meta.accent}`}
                      >
                        <span className={`w-1 h-1 rounded-full ${meta.dot}`} />
                        {m.tier}
                      </span>
                    </div>
                  ) : null}

                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <p className="font-serif italic text-gold-300 text-lg">
                      {m.monthDay}
                      {m.year ? (
                        <span className="text-ivory-100/50 not-italic font-mono text-xs ml-2">
                          {m.year}
                        </span>
                      ) : null}
                    </p>
                    <h3 className="mt-2 font-serif text-xl md:text-2xl leading-tight group-hover:text-gold-300 transition-colors text-balance">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm text-ivory-100/65 leading-relaxed">
                      {m.event}
                    </p>
                    <p className="mt-auto pt-5 label-mono text-ivory-100/40 group-hover:text-gold-300 transition-colors">
                      Load this moment →
                    </p>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
