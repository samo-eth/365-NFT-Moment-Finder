import { FALLBACK_EVENT, getEvent, resolvePalette } from '../data/events.js'
import {
  MONTHS,
  dayOfYear,
  eventKey,
  formatMonthDay,
} from './dates.js'

/**
 * Build the full derived "moment" object for a given month/day selection.
 * Centralizing this keeps components dumb and ensures the share-card,
 * result-card and gallery all agree on the same shape.
 */
export function buildMoment(monthIndex, day) {
  if (monthIndex == null || day == null) return null

  const key = eventKey(monthIndex, day)
  const found = getEvent(key)
  const base = found || FALLBACK_EVENT
  const isFallback = !found

  return {
    key,
    monthIndex,
    day,
    monthDay: formatMonthDay(monthIndex, day),
    dayOfYear: dayOfYear(monthIndex, day),
    isFallback,
    ...base,
    paletteHex: resolvePalette(base.palette),
  }
}

/**
 * Build the moment for a known gallery key like "07-20".
 */
export function buildMomentFromKey(key) {
  const [mm, dd] = key.split('-').map((n) => parseInt(n, 10))
  return buildMoment(mm - 1, dd)
}

/**
 * Composes the tweet text for the "Share on X" intent.
 */
export function composeTweet(moment, handle = '@yr365art') {
  if (!moment) return ''
  const dayLabel = `Day ${moment.dayOfYear} — ${moment.monthDay}`
  const title = `'${moment.title}'`

  if (moment.isFallback) {
    return [
      'I just discovered my 365 day.',
      '',
      dayLabel,
      title,
      '',
      'My birthday is still an unwritten page of history — waiting to be uncovered.',
      '',
      'Every birthday has a story.',
      handle,
    ].join('\n')
  }

  const yearPart = moment.year ? `${moment.year} — ` : ''
  const connection = `My birthday is connected to ${yearPart}${stripTrailingPeriod(
    moment.event,
  )}.`

  return [
    'I just discovered my 365 day.',
    '',
    dayLabel,
    title,
    '',
    connection,
    '',
    'Every birthday has a story.',
    handle,
  ].join('\n')
}

function stripTrailingPeriod(s) {
  if (!s) return ''
  return s.endsWith('.') ? s.slice(0, -1) : s
}

export function tweetIntentUrl(text) {
  const base = 'https://twitter.com/intent/tweet'
  const params = new URLSearchParams({ text })
  return `${base}?${params.toString()}`
}

export { MONTHS }
