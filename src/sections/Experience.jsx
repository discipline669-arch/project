import { useRef } from "react"
import { experience } from "../content"
import { useReveal } from "../hooks"

export function Experience() {
  const scope = useRef(null)
  useReveal(scope)

  return (
    <section id="experience" ref={scope}>
      <div className="sec-head">
        <span className="sec-idx g-reveal-soft"><span className="glyph" aria-hidden="true" />{experience.idx}</span>
        <h2 className="sec-title g-reveal">
          {experience.title} <span className="ital">{experience.ital}</span>
        </h2>
        <span className="sec-sub g-reveal-soft">{experience.sub}</span>
      </div>

      <ol className="timeline">
        {experience.items.map((job) => (
          <li className="tl-item g-reveal" key={job.role}>
            <div className="tl-meta">
              <span className="tl-period">{job.period}</span>
              <span className="tl-place">{job.place}</span>
            </div>
            <div className="tl-body">
              <h3 className="tl-role">{job.role}</h3>
              <span className="tl-org">{job.org}</span>
              <ul className="tl-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="recog">
        <span className="recog-label g-reveal-soft">
          <span className="glyph" aria-hidden="true" />
          Recognition
        </span>
        <div className="recog-grid">
          {experience.achievements.map((a) => (
            <div className="recog-card g-reveal" key={a.title}>
              <h4>{a.title}</h4>
              <span className="recog-meta">{a.meta}</span>
              <p>{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}