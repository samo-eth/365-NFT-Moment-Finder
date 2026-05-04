import React, { useMemo } from 'react'
import { MONTHS, daysInMonth } from '../utils/dates.js'

/**
 * Birthday picker that deliberately only asks for MONTH + DAY.
 * Year is omitted because each 365 piece represents a single calendar day,
 * independent of which year a person was born.
 */
export default function DateFinder({ monthIndex, day, onChange }) {
  const maxDay = useMemo(
    () => (monthIndex == null ? 31 : daysInMonth(monthIndex)),
    [monthIndex],
  )

  const dayOptions = useMemo(
    () => Array.from({ length: maxDay }, (_, i) => i + 1),
    [maxDay],
  )

  function handleMonth(e) {
    const m = parseInt(e.target.value, 10)
    const newMax = daysInMonth(m)
    const safeDay = day == null ? null : Math.min(day, newMax)
    onChange({ monthIndex: m, day: safeDay ?? 1 })
  }

  function handleDay(e) {
    const d = parseInt(e.target.value, 10)
    onChange({ monthIndex: monthIndex ?? 0, day: d })
  }

  return (
    <section id="finder" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow">Step 01 — Select your birthday</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">
            Enter the month and day you were born
          </h2>
          <p className="mt-4 text-ivory-100/60 max-w-xl mx-auto text-sm md:text-base">
            Year is not required. 365 is about the calendar day itself — the
            historical echo your birthday carries.
          </p>
        </div>

        <div className="card-frame corner-tick px-6 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-2xl mx-auto">
            <Field label="Month">
              <select
                value={monthIndex ?? ''}
                onChange={handleMonth}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold-400 outline-none py-3 text-lg md:text-xl font-serif text-ivory-50 appearance-none"
                aria-label="Birth month"
              >
                <option value="" disabled className="bg-ink-900">
                  Select month
                </option>
                {MONTHS.map((m, i) => (
                  <option key={m} value={i} className="bg-ink-900">
                    {m}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Day">
              <select
                value={day ?? ''}
                onChange={handleDay}
                disabled={monthIndex == null}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold-400 outline-none py-3 text-lg md:text-xl font-serif text-ivory-50 appearance-none disabled:opacity-40"
                aria-label="Birth day"
              >
                <option value="" disabled className="bg-ink-900">
                  Select day
                </option>
                {dayOptions.map((d) => (
                  <option key={d} value={d} className="bg-ink-900">
                    {d}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <p className="mt-10 text-center label-mono">
            Your year is never stored. This tool runs entirely in your browser.
          </p>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block group">
      <span className="label-mono block mb-3 group-focus-within:text-gold-300 transition-colors">
        {label}
      </span>
      {children}
    </label>
  )
}
