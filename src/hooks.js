import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useReveal(scopeRef) {
  useEffect(() => {
    const el = scopeRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const items = el.querySelectorAll(".g-reveal, .g-reveal-soft")
    const ctx = gsap.context(() => {
      try {
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        )
      } catch (e) {}
    }, el)

    document.documentElement.classList.add("gsap-started")

    return () => ctx.revert()
  }, [scopeRef])
}

export function useCursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const dot = document.querySelector("[data-cursor-dot]")
    const ring = document.querySelector("[data-cursor-ring]")
    if (!dot || !ring) return

    const xTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" })
    const yTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" })
    const rxTo = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" })
    const ryTo = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" })

    const onMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      rxTo(e.clientX)
      ryTo(e.clientY)
    }

    const onOver = (e) => {
      if (e.target.closest("a, button, .chip, .project-card")) ring.classList.add("is-hovering")
    }
    const onOut = (e) => {
      if (e.target.closest("a, button, .chip, .project-card")) ring.classList.remove("is-hovering")
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
    }
  }, [])
}

export function useGridParallax(scopeRef) {
  useEffect(() => {
    const el = scopeRef.current
    if (!el) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      el.style.setProperty("--x", `${x}%`)
      el.style.setProperty("--y", `${y}%`)
    }
    el.addEventListener("mousemove", onMove, { passive: true })
    return () => el.removeEventListener("mousemove", onMove)
  }, [scopeRef])
}

export function useActiveNav() {
  useEffect(() => {
    const links = document.querySelectorAll("[data-nav]")
    if (!links.length) return
    const sections = [...document.querySelectorAll("section[id]")]

    const onScroll = () => {
      const pos = window.scrollY + 120
      let current = sections[0]?.id || "hero"
      for (const s of sections) if (s.offsetTop <= pos) current = s.id
      links.forEach((l) => l.classList.toggle("active", l.dataset.nav === current))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
}