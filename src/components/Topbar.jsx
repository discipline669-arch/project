import { nav, meta } from "../content"

const icons = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5" />,
  about: <path d="M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10Z" />,
  experience: <path d="M3 7h18v13H3zM8 7V4h8v3M3 12h18" />,
  skills: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  work: <path d="M3 7h18M3 7v12h18V7M3 7l2-3h14l2 3M9 11h6" />,
  contact: <path d="M4 5h16v14H4zM4 6l8 7 8-7" />,
}

export function Topbar() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="logo" href="#hero">
            <span className="mark">
              <i />
              <i />
              <span>{meta.initials}</span>
            </span>
            <span>{meta.initials.toUpperCase()}_dev</span>
          </a>
          <nav className="top-nav">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} data-i={n.i} data-nav={n.id} data-nav-desktop>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Mobile">
        <ul>
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} data-nav={n.id}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[n.id]}
                </svg>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}