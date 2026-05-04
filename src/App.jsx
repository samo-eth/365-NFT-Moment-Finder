import React, { useEffect, useMemo, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DateFinder from './components/DateFinder.jsx'
import ResultCard from './components/ResultCard.jsx'
import Gallery from './components/Gallery.jsx'
import Trivia from './components/Trivia.jsx'
import WhyIBuilt from './components/WhyIBuilt.jsx'
import Footer from './components/Footer.jsx'
import { buildMoment } from './utils/events.js'

export default function App() {
  const [selection, setSelection] = useState({ monthIndex: null, day: null })

  const moment = useMemo(
    () => buildMoment(selection.monthIndex, selection.day),
    [selection.monthIndex, selection.day],
  )

  // When the user picks a date, quietly scroll the result into view.
  useEffect(() => {
    if (!moment) return
    const el = document.getElementById('result')
    if (!el) return
    const id = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
    return () => window.clearTimeout(id)
  }, [moment?.key])

  function handleGallerySelect(m) {
    setSelection({ monthIndex: m.monthIndex, day: m.day })
  }

  return (
    <div className="relative min-h-screen bg-ink-950 text-ivory-50">
      <Nav />

      <main className="relative">
        <Hero />

        <div className="divider max-w-5xl mx-auto" />

        <DateFinder
          monthIndex={selection.monthIndex}
          day={selection.day}
          onChange={setSelection}
        />

        <ResultCard moment={moment} />

        <Gallery onSelect={handleGallerySelect} />

        <Trivia />

        <WhyIBuilt />
      </main>

      <Footer />
    </div>
  )
}
