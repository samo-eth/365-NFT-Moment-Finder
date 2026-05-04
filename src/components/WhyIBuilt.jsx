import React from 'react'

export default function WhyIBuilt() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <p className="eyebrow">Why I built this</p>
        <blockquote className="mt-8 font-serif text-2xl md:text-4xl leading-[1.2] text-balance text-ivory-50">
          <span className="text-gold-300 italic">“</span>
          365 is not just another NFT project. It turns personal dates into
          historical memory. I built this tool to help more people discover the
          emotional weight behind their own day and connect with the collection
          before mint.
          <span className="text-gold-300 italic">”</span>
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4 text-ivory-100/60">
          <span className="h-px w-10 bg-white/20" />
          <span className="label-mono">
            Built for the 365 community by{' '}
            <a
              href="https://x.com/KaasLakpolla"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gold-300 hover:text-ivory-50 transition-colors"
            >
              @KaasLakpolla
            </a>
          </span>
          <span className="h-px w-10 bg-white/20" />
        </div>
      </div>
    </section>
  )
}
