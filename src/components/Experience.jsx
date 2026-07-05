import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

const BULLETS = [
  'Built responsive web applications using React, HTML, CSS, and JavaScript.',
  'Integrated REST APIs for full-stack features and dynamic data handling.',
  'Improved application performance, scalability, and cross-browser compatibility.',
  'Collaborated with cross-functional teams using GitHub, Slack, and agile workflows.',
  'Practiced clean code, debugging, and version control in a production environment.',
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="Experience" heading="Where I Have Put Skills to Work" className="mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 max-w-xl mb-14"
        >
          Hands-on industry experience building real products with modern
          frontend stacks and collaborative workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-7 sm:p-9 hover:shadow-glow-sm transition-shadow duration-300">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime shrink-0">
                  <FiBriefcase size={20} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Front-End Developer</h3>
                  <p className="text-white/50 text-sm">Appverse Technology</p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-white/50 font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar size={13} /> June 2025 &ndash; August 2025
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin size={13} /> Remote / Pakistan
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {BULLETS.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
