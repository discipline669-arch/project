import { useRef } from "react"
import { skills } from "../content"
import { useReveal } from "../hooks"

export function Skills() {
  const scope = useRef(null)
  useReveal(scope)

  return (
    <section id="skills" ref={scope}>
      <div className="sec-head">
        <span className="sec-idx g-reveal-soft"><span className="glyph" aria-hidden="true" />04 — Skills</span>
        <h2 className="sec-title g-reveal">
          Tools I <span className="ital">reach for</span>
        </h2>
        <span className="sec-sub g-reveal-soft">Languages · Frameworks · Infra</span>
      </div>

      <div className="skills-wrap">
        {skills.map((group) => (
          <div className="skill-group g-reveal" key={group.group}>
            <h3>{group.group}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}