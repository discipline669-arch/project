import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { hero, resumeHref } from "../content"
import { useGridParallax } from "../hooks"

function Split({ text }) {
  return text.split("").map((ch, i) =>
    ch === " " ? (
      <span key={i} aria-hidden="true">{" "}</span>
    ) : (
      <span key={i} data-split-char aria-hidden="true" style={{ display: "inline-block" }}>
        {ch}
      </span>
    )
  )
}

export function Hero({ started }) {
  const scope = useRef(null)
  const cardRef = useRef(null)
  const [word, setWord] = useState(0)
  useGridParallax(cardRef)

  useEffect(() => {
    if (!started) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const root = scope.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(
        root.querySelectorAll("[data-hero-fade]"),
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 },
        0.15
      )
      tl.fromTo(
        root.querySelectorAll("[data-split-char]"),
        { autoAlpha: 0, y: "0.6em", rotate: 4 },
        { autoAlpha: 1, y: 0, rotate: 0, duration: 1.1, stagger: 0.028 },
        0.55
      )
      tl.fromTo(
        root.querySelectorAll("[data-hero-card]"),
        { autoAlpha: 0, y: 40, rotateY: -12 },
        { autoAlpha: 1, y: 0, rotateY: -6, duration: 1.2, ease: "power2.out" },
        0.9
      )
      tl.fromTo(
        root.querySelector(".scroll-cue"),
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6 },
        1.6
      )
    }, root)
    return () => ctx.revert()
  }, [started])

  useEffect(() => {
    if (!started || !hero.dots || hero.dots.length < 3) return
    const t = setInterval(() => setWord((w) => (w + 1) % hero.dots.length), 2800)
    return () => clearInterval(t)
  }, [started])

  const display = hero.name.trim()

  return (
    <section id="hero" ref={scope}>
      <div className="hero-copy">
        <span className="eyebrow" data-hero-fade>
          <span className="dot" aria-hidden="true" />
          {hero.eyebrow}
          {hero.dots && <span aria-hidden="true">{hero.dots[word]}</span>}
        </span>

        <h1 className="hero-title" data-hero-fade>
          <span className="hero-greeting">{hero.greeting}</span>
          <span className="hero-name"><Split text={display} /></span>
        </h1>

        <div className="hero-wild" data-hero-fade aria-hidden="true">{hero.wild}</div>
        {hero.glint && <div className="hero-glint" data-hero-fade aria-hidden="true" />}

        <p className="hero-lede" data-hero-fade>{hero.lede}</p>

        <div className="hero-meta" data-hero-fade>
          {hero.meta.map((m) => (
            <div className="meta-row" key={m.label}>
              <span>{m.label}</span>
              <b>{m.value}</b>
            </div>
          ))}
        </div>

        <div className="hero-cta" data-hero-fade>
          <a className="resume-cta" href={resumeHref} download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
            </svg>
            Resume
          </a>
          {hero.focus && (
            <span className="project-focus">
              <a href={hero.focus.url}>{hero.focus.text}</a>
            </span>
          )}
        </div>

        <div className="ok-badge" data-hero-fade>
          <span className="dot" aria-hidden="true" />
          {hero.badge}
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span className="arrow" />
        </div>
      </div>

      {hero.card && (
        <div className="hero-visual" data-hero-card>
          <div className="id-card" ref={cardRef}>
            <div className="id-top">
              <div className="id-chip">
                <b>{hero.card.chip}</b>
                {hero.card.chipSub}
              </div>
              <span className="id-year">{hero.card.year}</span>
            </div>

            <div className="id-body">
              <h3 className="id-name">{hero.card.name}</h3>
              <p className="id-program">{hero.card.program}</p>
              <ul className="id-highlights">
                {hero.card.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="id-panel">
              <div className="id-stats">
                {hero.card.stats.map((s) => (
                  <div key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="id-barcode" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}