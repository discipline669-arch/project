import { footer } from "../content"

export function Footer() {
  return (
    <footer className="shell">
      <span>{footer.line}</span>
      <span className="tag">{footer.tag}</span>
    </footer>
  )
}