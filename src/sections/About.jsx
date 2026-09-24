import { useRef } from "react"
import { about } from "../content"
import { useReveal } from "../hooks"

export function About() {
  const scope = useRef(null)
  useReveal(scope)

  return (
    <section id="about" ref={scope}>
      <div className="sec-head">
        <span className="sec-idx g-reveal-soft"><span className="glyph" aria-hidden="true" />{about.idx}</span>
        <h2 className="sec-title g-reveal">
          {about.title} <span className="ital">{about.ital}</span>
        </h2>
        <span className="sec-sub g-reveal-soft">{about.sub}</span>
      </div>

      <div className="about-grid">
        <div className="about-body">
          {about.paras.length > 0 && (
            <p className="g-reveal">{about.lede}</p>
          )}
          {about.paras.map((p, i) => (
            <p key={i} className={i === 0 && !about.lede ? "first" : "g-reveal"}>{p}</p>
          ))}
        </div>

        <aside className="about-aside">
          <h3 className="about-name g-reveal">
            {about.name}
            <em>{about.accent}</em>
          </h3>
          {about.facts.map((f) => (
            <div className="stat-line g-reveal" key={f.label}>
              <span>{f.label}</span>
              <b>{f.value}</b>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}