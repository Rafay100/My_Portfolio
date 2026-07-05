import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]')
      setHovering(Boolean(target))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[999] hidden md:block">
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-lime mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 4),
          y: pos.y - (hovering ? 20 : 4),
          width: hovering ? 40 : 8,
          height: hovering ? 40 : 8,
          opacity: hovering ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.4 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-lime/50"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          width: 32,
          height: 32,
          opacity: hovering ? 0 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      />
    </div>
  )
}
