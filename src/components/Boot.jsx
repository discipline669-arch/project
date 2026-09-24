import { useEffect, useRef, useState } from "react"

const LINES = [
  "> initializing kernel        ██████░░ 68%",
  "> mounting workflows         ████████ 84%",
  "> loading projects           ████████ 91%",
  "> warming up the serifs      ████████ 99%",
]

export function Boot({ done }) {
  const [line, setLine] = useState(0)
  const [progress, setProgress] = useState(0)
  const overlayRef = useRef(null)

  useEffect(() => {
    const p = setInterval(() => {
      setProgress((v) => {
        const n = v + Math.random() * 16 + 8
        return n >= 100 ? 100 : n
      })
    }, 140)
    const l = setInterval(() => {
      setLine((v) => (v >= LINES.length - 1 ? v : v + 1))
    }, 240)
    return () => {
      clearInterval(p)
      clearInterval(l)
    }
  }, [])

  useEffect(() => {
    if (progress < 100) return
    const t = setTimeout(done, 450)
    return () => clearTimeout(t)
  }, [progress, done])

  return (
    <div className="boot" ref={overlayRef} aria-label="Loading">
      <div className="boot-inner">
        <span className="boot-line">{LINES[line]}<span className="caret">▊</span></span>
        <div className="boot-progress">
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}