import React, { useRef, useState } from "react"
import gsap from "gsap"
import { Cursor } from "./components/Cursor"
import { Boot } from "./components/Boot"
import { Topbar } from "./components/Topbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"
import { useActiveNav, useCursor } from "./hooks"

export default function App() {
  const [started, setStarted] = useState(false)
  const [booting, setBooting] = useState(true)
  const bootRef = useRef(null)

  useCursor()
  useActiveNav()

  const handleBootDone = () => {
    setStarted(true)
    if (bootRef.current) {
      gsap.to(bootRef.current, {
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => setBooting(false),
      })
    } else {
      setBooting(false)
    }
    document.documentElement.classList.add("gsap-started")
  }

  return (
    <>
      {booting && (
        <div ref={bootRef}>
          <Boot done={handleBootDone} />
        </div>
      )}

      <Cursor />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <Topbar />

      <main className="page">
        <Hero started={started} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}