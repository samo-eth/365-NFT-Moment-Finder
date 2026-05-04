import React, { useMemo } from 'react'

/**
 * Abstract fine-art placeholder. Renders a deterministic gradient composition
 * from a resolved palette (array of 4 hex colors). No external images.
 *
 * The layout uses layered radial + linear gradients to feel painterly rather
 * than "web3 mesh gradient". A faint grain overlay adds depth.
 */
export default function ArtPlaceholder({
  paletteHex = ['#1a1a22', '#4a4a52', '#c9a96e', '#f2efe6'],
  seed = 0,
  className = '',
  aspect = 'aspect-[4/5]',
}) {
  const [c1, c2, c3, c4] = [
    paletteHex[0] || '#1a1a22',
    paletteHex[1] || paletteHex[0] || '#4a4a52',
    paletteHex[2] || paletteHex[0] || '#c9a96e',
    paletteHex[3] || paletteHex[2] || '#f2efe6',
  ]

  // Deterministic pseudo-random offsets from seed for subtle variety per card.
  const { a, b, c, d } = useMemo(() => {
    const s = Math.abs(seed) || 1
    const f = (n) => ((Math.sin(s * n) + 1) / 2) * 40 + 30 // 30..70
    return { a: f(1.3), b: f(2.7), c: f(3.1), d: f(4.9) }
  }, [seed])

  const style = {
    backgroundColor: c1,
    backgroundImage: [
      `radial-gradient(120% 90% at ${a}% ${b}%, ${c4}22 0%, transparent 55%)`,
      `radial-gradient(80% 60% at ${c}% ${d}%, ${c3}55 0%, transparent 60%)`,
      `radial-gradient(60% 45% at ${100 - a}% ${100 - b}%, ${c2}aa 0%, transparent 70%)`,
      `linear-gradient(180deg, ${c1} 0%, ${c2} 60%, ${c1} 100%)`,
    ].join(', '),
  }

  return (
    <div
      className={`relative overflow-hidden ${aspect} ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* soft horizon line */}
      <div
        className="absolute inset-x-0"
        style={{
          top: `${40 + (seed % 20)}%`,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${c4}55, transparent)`,
        }}
      />
      {/* thin gold arc / sun */}
      <div
        className="absolute rounded-full"
        style={{
          left: `${a}%`,
          top: `${b - 10}%`,
          width: '42%',
          height: '42%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${c3}66 0%, ${c3}11 45%, transparent 70%)`,
          filter: 'blur(2px)',
        }}
      />
      {/* corner tick marks for museum label feel */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30" />
      {/* grain */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  )
}
