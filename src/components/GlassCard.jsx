import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, as: Comp = motion.div, ...props }) {
  return (
    <Comp
      whileHover={hover ? { y: -6, borderColor: 'rgba(198,255,0,0.4)' } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`relative rounded-3xl border border-ink-line bg-white/[0.03] backdrop-blur-xl shadow-soft overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
