import { useRef } from "react"
import { contact } from "../content"
import { useReveal } from "../hooks"

const ICONS = {
  mail: <path d="M4 5h16v14H4zM4 7l8 6 8-6" />,
  github: (
    <>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v1.5" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  file: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6" />,
}

export function Contact() {
  const scope = useRef(null)
  useReveal(scope)

  return (
    <section id="contact" ref={scope}>
      <div className="sec-head">
        <span className="sec-idx g-reveal-soft"><span className="glyph" aria-hidden="true" />{contact.idx}</span>
        <h2 className="sec-title g-reveal">
          Let's <span className="ital">{contact.ital}</span>
        </h2>
        <span className="sec-sub g-reveal-soft">Open to work · Replies within a day</span>
      </div>

      <div className="contact-grid">
        <div>
          <p className="contact-intro g-reveal" style={{ fontFamily: "var(--font-serif)" }}>
            {contact.intro}
          </p>
          <div className="contact-links">
            {contact.links.map((l) => (
              <a className="contact-link g-reveal" key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[l.icon]}
                  </svg>
                </span>
                <span className="lbl">
                  <span>{l.label}</span>
                  <b>{l.value}</b>
                </span>
              </a>
            ))}
          </div>
        </div>

        <aside className="contact-card g-reveal">
          <h3>{contact.card.title}</h3>
          <div className="c-mono">{contact.card.mono}</div>
          <p>{contact.card.body}</p>
          <span className="ok-badge">
            <span className="dot" aria-hidden="true" />
            best time: your morning
          </span>
        </aside>
      </div>
    </section>
  )
}