// Local historical event database for the 365 Moment Finder.
// Keys are zero-padded "MM-DD". Each entry is a fan interpretation and is NOT
// officially affiliated with the 365 NFT project.

import { DAILY_EVENTS } from './dailyEvents.js'

// Curated archive entries — the 12 dates with verified historical
// description and accompanying 1/1 artwork in /public/archive/MM-DD.png.
// Any entry with a `photo` field appears in the Archive gallery.
export const EVENTS = {
  '01-01': {
    title: 'Scarlet Freedom',
    year: 1863,
    event: 'The Emancipation Proclamation took effect during the U.S. Civil War.',
    description:
      'Lincoln’s pen turning a war for the Union into a war against slavery — the first step toward the 13th Amendment two years later.',
    tier: 'Legendary',
    mood: ['liberatory', 'momentous', 'weighty', 'human'],
    palette: ['antique brown', 'memory gold', 'ivory', 'smoke black'],
    photo: '/archive/01-01.png',
  },
  '01-27': {
    title: 'Soviet forces liberate Auschwitz',
    year: 1945,
    event:
      'Red Army troops liberated the Auschwitz-Birkenau concentration camp in occupied Poland.',
    description:
      'About 7,000 prisoners freed; gas chambers and crematoria revealed to the world. The date is now International Holocaust Remembrance Day.',
    tier: 'Legendary',
    mood: ['sacred', 'witnessed', 'silent', 'unforgettable'],
    palette: ['smoke black', 'soft gray', 'ivory', 'pale gold'],
    photo: '/archive/01-27.png',
  },
  '02-11': {
    title: 'Nelson Mandela walks free',
    year: 1990,
    event: 'Nelson Mandela was released after 27 years in prison.',
    description:
      'A man who outwaited an entire system of apartheid, walking out to lead the country that had imprisoned him.',
    tier: 'Legendary',
    mood: ['dignified', 'dawn', 'patient', 'freed'],
    palette: ['smoke black', 'ember orange', 'memory gold', 'pale gold'],
    photo: '/archive/02-11.png',
  },
  '03-11': {
    title: 'Tōhoku earthquake and tsunami',
    year: 2011,
    event:
      'A magnitude 9.0 undersea earthquake struck off the northeast coast of Japan.',
    description:
      'A tsunami with waves over 10 meters flooded coastal towns and triggered the Fukushima Daiichi nuclear disaster.',
    tier: 'Legendary',
    mood: ['monumental', 'oceanic', 'irreversible', 'cold'],
    palette: ['storm blue', 'ivory', 'midnight', 'glass gray'],
    photo: '/archive/03-11.png',
  },
  '04-26': {
    title: 'Eternal April',
    year: 1986,
    event: 'The Chernobyl Nuclear Power Plant reactor 4 exploded in Soviet Ukraine.',
    description:
      'One night, one explosion, a city frozen in time. Widely considered the most haunting piece in the collection.',
    tier: 'Legendary',
    mood: ['haunting', 'cold', 'radioactive', 'unforgettable'],
    palette: ['ice white', 'smoke black', 'toxic green', 'pale gold'],
    photo: '/archive/04-26.png',
  },
  '05-29': {
    title: 'Summit of the World',
    year: 1953,
    event:
      'Edmund Hillary and Tenzing Norgay reached the summit of Mount Everest.',
    description:
      'The first successful ascent of Everest — the planet’s highest unwitnessed point becoming witnessed.',
    tier: 'Legendary',
    mood: ['thin air', 'triumph', 'snow', 'impossible height'],
    palette: ['snow white', 'storm blue', 'stone gray', 'summit gold'],
    photo: '/archive/05-29.png',
  },
  '07-20': {
    title: 'Footprint Beyond Origin',
    year: 1969,
    event: 'Apollo 11 landed and Neil Armstrong stepped onto the Moon.',
    description: 'Humanity’s first steps on another world.',
    tier: 'Legendary',
    mood: ['cosmic', 'silent', 'monumental', 'weightless'],
    palette: ['moon dust', 'deep black', 'earth blue', 'landing gold'],
    photo: '/archive/07-20.png',
  },
  '09-28': {
    title: 'Mercy in Mold',
    year: 1928,
    event: 'Alexander Fleming discovered penicillin in his London laboratory.',
    description:
      'A forgotten petri dish that would go on to save millions of lives.',
    tier: 'Legendary',
    mood: ['discovery', 'laboratory light', 'fragile life', 'hope'],
    palette: ['cream', 'glass gray', 'soft green', 'antique brown'],
    photo: '/archive/09-28.png',
  },
  '10-31': {
    title: 'Money Rewritten',
    year: 2008,
    event: 'Satoshi Nakamoto published the Bitcoin whitepaper.',
    description:
      'A nine-page paper that quietly proposed money without a master, opening a new chapter in trust and value.',
    tier: 'Epic',
    mood: ['secretive', 'foundational', 'alchemical', 'decentralized'],
    palette: ['smoke black', 'memory gold', 'antique brown', 'pale gold'],
    photo: '/archive/10-31.png',
  },
  '11-08': {
    title: 'Invisible Revealed',
    year: 1895,
    event: 'Wilhelm Röntgen discovered X-rays in Würzburg, Germany.',
    description:
      'A hand’s bones lit up without breaking the skin — a new kind of seeing born in a darkened lab.',
    tier: 'Epic',
    mood: ['ghostly', 'invisible', 'transparent', 'scientific'],
    palette: ['smoke black', 'soft gray', 'ivory', 'moon dust'],
    photo: '/archive/11-08.png',
  },
  '11-09': {
    title: 'Fractured Divide',
    year: 1989,
    event: 'East Germans began streaming through the Berlin Wall.',
    description:
      'Twenty-eight years of concrete cut by sledgehammers and ordinary people.',
    tier: 'Legendary',
    mood: ['unifying', 'hopeful', 'fractured', 'dawn'],
    palette: ['stone gray', 'memory gold', 'ivory', 'smoke black'],
    photo: '/archive/11-09.png',
  },
  '12-10': {
    title: 'Rights of All',
    year: 1948,
    event: 'The UN adopted the Universal Declaration of Human Rights in Paris.',
    description:
      'A single page claiming every person on Earth — written by survivors of two world wars.',
    tier: 'Epic',
    mood: ['declarative', 'dignified', 'universal', 'signed'],
    palette: ['midnight', 'memory gold', 'ivory', 'parchment'],
    photo: '/archive/12-10.png',
  },
  '12-31': {
    title: 'The Last Light',
    year: null,
    event: 'The final day of the calendar year.',
    description: 'A closing chapter before time begins again.',
    tier: 'Uncommon',
    mood: ['ending', 'reflective', 'warm', 'fading'],
    palette: ['midnight', 'ember orange', 'ivory', 'dusk gold'],
  },
}

export const FALLBACK_EVENT = {
  title: 'The Unwritten Day',
  year: null,
  event: 'This date is waiting to be researched.',
  description:
    'Every day carries a hidden piece of human history. Yours is still being uncovered.',
  tier: 'Research Mode',
  mood: ['mysterious', 'archival', 'personal', 'timeless'],
  palette: ['black', 'ivory', 'silver', 'memory gold'],
}

/**
 * Tiers, ordered by rarity. Used for subtle badge styling.
 */
export const TIER_META = {
  Legendary: {
    rank: 5,
    accent: 'text-gold-300 border-gold-500/60',
    dot: 'bg-gold-400',
  },
  Epic: {
    rank: 4,
    accent: 'text-ivory-50 border-ivory-50/50',
    dot: 'bg-ivory-50',
  },
  Rare: {
    rank: 3,
    accent: 'text-ivory-100 border-white/40',
    dot: 'bg-ivory-100',
  },
  Uncommon: {
    rank: 2,
    accent: 'text-ivory-100/80 border-white/25',
    dot: 'bg-white/70',
  },
  Common: {
    rank: 1,
    accent: 'text-ivory-100/60 border-white/15',
    dot: 'bg-white/50',
  },
  'Research Mode': {
    rank: 0,
    accent: 'text-ivory-100/60 border-dashed border-white/25',
    dot: 'bg-white/40',
  },
}

/**
 * Palette token -> hex lookup. Used by the abstract art placeholder to render
 * gradient compositions without any external imagery.
 */
const PALETTE_TOKENS = {
  // whites / ivories
  ivory: '#f2efe6',
  'ice white': '#e9f1f4',
  'snow white': '#f1f4f7',
  cream: '#ede4cf',
  parchment: '#e7dfc9',
  white: '#f4f2eb',

  // blacks / inks
  black: '#0a0a0c',
  'deep black': '#050507',
  'smoke black': '#16181b',
  midnight: '#0b0e1a',

  // grays
  silver: '#c7c9cf',
  'stone gray': '#6d6f72',
  'glass gray': '#a9b1b6',
  'soft gray': '#b5b2a8',

  // blues
  'earth blue': '#2b4a7a',
  'storm blue': '#3b5572',

  // greens
  'toxic green': '#9bd36a',
  'soft green': '#a9c6a0',

  // golds
  'pale gold': '#d9c28a',
  'landing gold': '#c9a96e',
  'summit gold': '#d4b878',
  'memory gold': '#b89856',
  'dusk gold': '#c69a54',
  'antique brown': '#7a5a3a',

  // warms
  'ember orange': '#c8794a',

  // moon / atmosphere
  'moon dust': '#c9c5bd',
}

/**
 * Mood + palette defaults per tier. Daily entries only carry
 * { title, year, event, description, tier } — mood and palette are derived
 * from these defaults so every day gets a coherent gallery look.
 */
export const TIER_DEFAULTS = {
  Legendary: {
    mood: ['eternal', 'monumental', 'unforgettable', 'heavy'],
    palette: ['ivory', 'smoke black', 'pale gold', 'memory gold'],
  },
  Epic: {
    mood: ['historic', 'monumental', 'weighty', 'cinematic'],
    palette: ['deep black', 'earth blue', 'ivory', 'landing gold'],
  },
  Rare: {
    mood: ['quiet', 'luminous', 'human', 'precise'],
    palette: ['ivory', 'stone gray', 'soft green', 'antique brown'],
  },
  Uncommon: {
    mood: ['gentle', 'archival', 'human', 'still'],
    palette: ['parchment', 'soft gray', 'dusk gold', 'midnight'],
  },
  Common: {
    mood: ['plain', 'archival', 'quiet', 'personal'],
    palette: ['ivory', 'soft gray', 'silver', 'memory gold'],
  },
  'Research Mode': {
    mood: ['mysterious', 'archival', 'personal', 'timeless'],
    palette: ['black', 'ivory', 'silver', 'memory gold'],
  },
}

/**
 * Returns the full event entry for a given "MM-DD" key.
 * - Curated entries in EVENTS win over daily ones.
 * - Missing mood/palette are filled from the entry's tier defaults.
 * - Returns null if no event is known for that key.
 */
export function getEvent(key) {
  const curated = EVENTS[key]
  const daily = DAILY_EVENTS[key]
  const base = curated || daily
  if (!base) return null
  const defaults = TIER_DEFAULTS[base.tier] || TIER_DEFAULTS.Common
  return {
    ...base,
    mood: base.mood || defaults.mood,
    palette: base.palette || defaults.palette,
    description: base.description || base.event,
  }
}

export function resolvePalette(palette = []) {
  return palette.map((token) => {
    const key = String(token).toLowerCase().trim()
    return PALETTE_TOKENS[key] || '#9a8f7a'
  })
}

/**
 * Curated highlight list for the "Known 365 Moments" gallery section.
 */
export const GALLERY_HIGHLIGHTS = [
  '01-01',
  '01-27',
  '02-11',
  '03-11',
  '04-26',
  '05-29',
  '07-20',
  '09-28',
  '10-31',
  '11-08',
  '11-09',
  '12-10',
]
