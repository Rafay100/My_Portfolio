import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div
        className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-3xl border border-ink-line bg-ink-soft/60 backdrop-blur-2xl px-4 py-2.5 transition-shadow duration-300 ${
          scrolled ? 'shadow-soft-lg' : 'shadow-soft'
        }`}
      >
        <a href="#home" data-cursor-hover className="font-display font-bold text-lime text-lg px-1">
          SR.
        </a>

        <nav className="hidden md:flex items-center justify-center gap-1">
          {LINKS.map((link) => (
            <button
              key={link.href}
              data-cursor-hover
              onClick={() => handleClick(link.href)}
              className="group relative px-2.5 py-2 rounded-2xl text-[13px] text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
              <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-px bg-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
          ))}
        </nav>

        <div className="flex justify-end">
          <button
            data-cursor-hover
            onClick={() => handleClick('#contact')}
            className="hidden md:inline-flex items-center rounded-2xl bg-lime text-ink font-display font-semibold text-sm px-4 py-2 hover:bg-lime-soft transition-colors shadow-glow-sm"
          >
            Let's Talk
          </button>
          <button
            data-cursor-hover
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-5 bg-white transition-transform ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`h-px w-5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 grid grid-cols-2 gap-2 rounded-3xl border border-ink-line bg-ink-soft/80 backdrop-blur-2xl p-3 shadow-soft"
        >
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="rounded-2xl px-3 py-2.5 text-sm text-white/85 text-left hover:text-lime hover:bg-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
