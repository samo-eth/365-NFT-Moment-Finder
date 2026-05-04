import React, { useState } from 'react'
import { TIER_META } from '../data/events.js'
import { composeTweet, tweetIntentUrl } from '../utils/events.js'

export default function ResultCard({ moment }) {
  const [copied, setCopied] = useState(false)

  if (!moment) {
    return (
      <section id="result" className="py-4">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="card-frame py-20 text-center">
            <p className="eyebrow">Awaiting your date</p>
            <p className="mt-4 font-serif text-2xl md:text-3xl text-ivory-100/70">
              Select a month and day to reveal your 365 moment.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const tierMeta = TIER_META[moment.tier] || TIER_META['Common']
  const tweet = composeTweet(moment)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(tweet)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Silent failure — clipboard may be blocked in some browsers.
      setCopied(false)
    }
  }

  return (
    <section id="result" className="pb-24 md:pb-32 -mt-8 md:-mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div
          key={moment.key}
          className="card-frame corner-tick shadow-plate animate-reveal overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
            {/* Day-number plate */}
            <div className="relative border-b md:border-b-0 md:border-r border-white/10 bg-ink-900/40 p-8 md:p-10 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-6">
              <div>
                <p className="label-mono">Day</p>
                <p className="font-serif text-gold-300 leading-none mt-2 text-6xl md:text-7xl tracking-tight">
                  {moment.dayOfYear}
                </p>
                <p className="label-mono mt-2">of 365</p>
              </div>
              <div className="md:mt-10">
                <p className="label-mono">Date</p>
                <p className="font-serif italic text-ivory-50 text-xl md:text-2xl mt-2">
                  {moment.monthDay}
                </p>
                {moment.year != null && (
                  <p className="label-mono mt-3">{moment.year}</p>
                )}
              </div>
              <div className="md:mt-10">
                <TierBadge tier={moment.tier} meta={tierMeta} />
              </div>
              <div className="hidden md:block absolute bottom-4 left-10 label-mono">
                365 · 1 of 1
              </div>
            </div>

            {/* Information side */}
            <div className="p-8 md:p-12 flex flex-col">
              <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] text-balance">
                {moment.title}
              </h3>

              <div className="mt-8 divider" />

              <DefinitionRow
                label="Historical Moment"
                value={
                  moment.isFallback
                    ? moment.event
                    : `${moment.year ? moment.year + ' — ' : ''}${moment.event}`
                }
              />
              <DefinitionRow
                label="365 Interpretation"
                value={moment.description}
              />
              <DefinitionRow
                label="Mood"
                value={moment.mood.join(' · ')}
                mono
              />

              {moment.isFallback && (
                <p className="mt-6 text-sm text-ivory-100/50 italic">
                  This calendar day is not yet in our local research database.
                  Every date carries a hidden piece of human history — yours is
                  still being uncovered.
                </p>
              )}

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={tweetIntentUrl(tweet)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary"
                >
                  Share My Day on X
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`btn-ghost transition-colors ${
                    copied ? '!border-gold-500 !text-gold-300' : ''
                  }`}
                >
                  {copied ? 'Copied' : 'Copy Post'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TierBadge({ tier, meta }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 border text-[10px] uppercase tracking-widest-2 ${meta.accent}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      {tier}
    </span>
  )
}

function DefinitionRow({ label, value, mono = false }) {
  return (
    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-5 py-4 border-b border-white/5 last:border-b-0">
      <dt className="label-mono pt-1">{label}</dt>
      <dd
        className={
          mono
            ? 'font-mono text-sm text-ivory-100/80'
            : 'text-ivory-100/90 leading-relaxed'
        }
      >
        {value}
      </dd>
    </div>
  )
}
