import React, { useMemo, useState } from 'react'
import { TRIVIA } from '../data/trivia.js'

/**
 * Elegant single-question-at-a-time trivia. No childish colors or emojis.
 * Shuffle options once per mount so the correct answer isn't always first.
 */
export default function Trivia() {
  const questions = useMemo(
    () =>
      TRIVIA.map((q) => ({
        ...q,
        options: shuffle(q.options),
      })),
    [],
  )

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const current = questions[index]
  const isCorrect = selected != null && selected === current.answer

  function handlePick(opt) {
    if (selected != null) return
    setSelected(opt)
    if (opt === current.answer) setScore((s) => s + 1)
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function handleRestart() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  return (
    <section
      id="trivia"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow">Community ritual</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
            365 <span className="italic text-gold-300">Trivia</span>
          </h2>
          <p className="mt-4 text-ivory-100/60 max-w-xl mx-auto text-sm md:text-base">
            A short series of questions about the project. Five minutes of
            research, a lifetime of context.
          </p>
        </div>

        <div className="card-frame corner-tick p-7 md:p-10">
          {!done ? (
            <>
              <div className="flex items-center justify-between label-mono mb-6">
                <span>
                  Question {String(index + 1).padStart(2, '0')} /{' '}
                  {String(questions.length).padStart(2, '0')}
                </span>
                <span>Score {score}</span>
              </div>

              <h3 className="font-serif text-xl md:text-3xl leading-snug text-balance">
                {current.question}
              </h3>

              <ul className="mt-8 space-y-3">
                {current.options.map((opt) => {
                  const isSelected = selected === opt
                  const isAnswer = opt === current.answer
                  const showState = selected != null
                  let stateClass =
                    'border-white/15 hover:border-gold-500/60 hover:text-gold-300'
                  if (showState && isAnswer) {
                    stateClass = 'border-gold-500/80 text-gold-300'
                  } else if (showState && isSelected && !isAnswer) {
                    stateClass = 'border-white/40 text-ivory-100/60 line-through'
                  } else if (showState) {
                    stateClass = 'border-white/10 text-ivory-100/40'
                  }

                  return (
                    <li key={opt}>
                      <button
                        type="button"
                        onClick={() => handlePick(opt)}
                        disabled={selected != null}
                        className={`w-full text-left px-5 py-4 border transition-colors ${stateClass}`}
                      >
                        <span className="block text-sm md:text-base">
                          {opt}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>

              {selected != null && (
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
                  <p
                    className={`font-serif italic text-lg ${
                      isCorrect ? 'text-gold-300' : 'text-ivory-100/70'
                    }`}
                  >
                    {isCorrect
                      ? 'Correct. A piece of the archive unlocked.'
                      : `Not quite. The answer: ${current.answer}`}
                  </p>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-ghost"
                  >
                    {index + 1 >= questions.length ? 'See Result' : 'Next'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6">
              <p className="eyebrow">Final mark</p>
              <p className="mt-4 font-serif text-5xl md:text-6xl text-gold-300">
                {score} / {questions.length}
              </p>
              <p className="mt-6 text-ivory-100/70 max-w-lg mx-auto">
                {score === questions.length
                  ? 'Perfect archive. You are ready for the gallery.'
                  : score >= 3
                    ? 'Well studied. The archive welcomes you.'
                    : 'Every collector starts somewhere. Study the moments above and return.'}
              </p>
              <button
                type="button"
                onClick={handleRestart}
                className="mt-8 btn-ghost"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
