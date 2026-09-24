import { useRef } from "react"
import { projects } from "../content"
import { useReveal } from "../hooks"

export function Projects() {
  const scope = useRef(null)
  useReveal(scope)

  return (
    <section id="projects" ref={scope}>
      <div className="sec-head">
        <span className="sec-idx g-reveal-soft"><span className="glyph" aria-hidden="true" />05 — Work</span>
        <h2 className="sec-title g-reveal">
          Selected <span className="ital">projects</span>
        </h2>
        <span className="sec-sub g-reveal-soft">Things I've shipped, bent, and broken-then-fixed</span>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article className="project-card g-reveal" key={p.idx}>
            <span className="idx">{p.idx}</span>
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <ul className="p-tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="p-links">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                  </svg>
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}