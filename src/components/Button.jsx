import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display font-semibold text-sm tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime'

  const variants = {
    primary: 'bg-lime text-ink shadow-glow-sm hover:bg-lime-soft',
    secondary: 'border border-white/20 text-white hover:border-lime/60 hover:text-lime',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
