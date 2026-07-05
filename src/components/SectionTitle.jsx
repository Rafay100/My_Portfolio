import { motion } from 'framer-motion'

export default function SectionTitle({ label, heading, align = 'left', className = '' }) {
  return (
    <div className={`max-w-2xl ${align === 'right' ? 'ml-auto text-right' : ''} ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-lime mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-white"
      >
        {heading}
      </motion.h2>
    </div>
  )
}
