// Date utilities for 365 Moment Finder.
// The project intentionally ignores the birth year: every 1/1 piece in the
// collection represents a single calendar day, so we work in day-of-year space.

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Days per month for a NON-leap year. The 365 collection has exactly 365 days,
// so Feb 29 is intentionally excluded from the day-of-year mapping.
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function daysInMonth(monthIndex) {
  return DAYS_IN_MONTH[monthIndex] ?? 31
}

/**
 * Day-of-year based on a fixed 365-day calendar (no leap days).
 * monthIndex is 0-based (0 = January), day is 1-based.
 */
export function dayOfYear(monthIndex, day) {
  if (
    typeof monthIndex !== 'number' ||
    typeof day !== 'number' ||
    monthIndex < 0 ||
    monthIndex > 11
  ) {
    return null
  }
  const max = daysInMonth(monthIndex)
  const safeDay = Math.min(Math.max(1, day), max)
  let total = 0
  for (let m = 0; m < monthIndex; m++) total += DAYS_IN_MONTH[m]
  return total + safeDay
}

/**
 * Formats "July 20" style labels.
 */
export function formatMonthDay(monthIndex, day) {
  if (monthIndex == null || day == null) return ''
  return `${MONTHS[monthIndex]} ${day}`
}

/**
 * Key used to look up events in the local database: "MM-DD" zero-padded.
 */
export function eventKey(monthIndex, day) {
  const mm = String(monthIndex + 1).padStart(2, '0')
  const dd = String(day).padStart(2, '0')
  return `${mm}-${dd}`
}

/**
 * Returns an ordinal suffix for day-of-year numbers (1st, 2nd, 3rd, 4th...).
 */
export function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
