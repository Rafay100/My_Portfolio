import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'
import Button from './Button'

const heading = 'Full Stack Developer'

export default function Hero() {
  const ref = useRef(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-40, 40], [8, -8])
  const rotateY = useTransform(springX, [-40, 40], [-8, 8])

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mvX.set(((e.clientX - rect.left) / rect.width - 0.5) * 80)
    mvY.set(((e.clientY - rect.top) / rect.height - 0.5) * 80)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-hidden bg-radial-fade"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <ParticlesBackground />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 grid md:grid-cols-2 gap-16 items-center pt-32 pb-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs tracking-[0.35em] uppercase text-lime mb-5"
          >
            Hi, I'm Syed Abdul Rafay
          </motion.p>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white mb-6">
            {heading.split(' ').map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden align-bottom mr-3 last:mr-0">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 + wi * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white/60 text-base sm:text-lg max-w-md mb-9 leading-relaxed"
          >
            I build scalable web applications, integrate APIs, and develop
            AI-friendly automation systems. Turning ideas into
            production-ready digital solutions from Karachi, Pakistan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY, transformPerspective: 800 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 rounded-full bg-lime/20 blur-[90px] animate-float-slow" />
          <div className="relative w-80 h-80">
            <motion.div
              className="absolute inset-0 rounded-[3rem] border border-lime/30 animate-spin-slow"
              style={{ borderStyle: 'dashed' }}
            />
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/10 backdrop-blur-xl shadow-glow flex items-center justify-center animate-float">
              <span className="font-mono text-lime/80 text-sm tracking-widest">{'<Dev/>'}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-lime to-transparent" />
      </motion.div>
    </section>
  )
}
