import { motion } from 'framer-motion'
import {
  FiBookOpen,
  FiCode,
  FiGlobe,
  FiTarget,
  FiZap,
  FiUsers,
  FiCpu,
  FiTrendingUp,
  FiLayers,
  FiWifi,
} from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

const CARDS = [
  {
    icon: FiBookOpen,
    tag: 'Full Stack + AI Focus',
    title: 'Bachelor of Business and Information Technology (BBIT)',
    org: 'Virtual University of Pakistan',
    meta: '2023 – 2027 (Expected)',
    desc: 'Pursuing a comprehensive program combining business fundamentals and information technology, preparing for modern software and AI-driven roles.',
  },
  {
    icon: FiCode,
    tag: 'Self-Driven & Industry Projects',
    title: 'Professional Experience',
    org: 'Appverse Technology',
    meta: 'June 2025 – Present',
    desc: 'Built responsive apps with React, HTML, CSS, and JS. Integrated APIs for full-stack features and collaborated using GitHub and Slack.',
  },
]

const LANGUAGES = ['English', 'Urdu']

const STRENGTHS = [
  { icon: FiTarget, label: 'Problem-solving' },
  { icon: FiZap, label: 'Fast learner' },
  { icon: FiUsers, label: 'Team collaboration' },
  { icon: FiCpu, label: 'AI-driven development' },
  { icon: FiTrendingUp, label: 'Scalable systems' },
  { icon: FiLayers, label: 'Responsive design' },
  { icon: FiWifi, label: 'Performance optimization' },
  { icon: FiGlobe, label: 'Cross-browser compatibility' },
]

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="Education" heading="Knowledge, Craft & Continuous Growth" className="mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 max-w-xl mb-14"
        >
          A mix of formal education, hands-on certifications, and the
          ever-evolving toolkit I use to bring ideas to life.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {CARDS.map(({ icon: Icon, tag, title, org, meta, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-7 h-full hover:shadow-glow-sm transition-shadow duration-300">
                <div className="flex items-start justify-between mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime shrink-0">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-ink-line text-white/60">
                    {tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">{title}</h3>
                <p className="text-white/50 text-sm mb-1">{org}</p>
                <p className="font-mono text-[11px] text-lime mb-4">{meta}</p>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-7 sm:p-9">
            <h3 className="font-display font-bold text-xl text-white mb-6">Languages &amp; Strengths</h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-xs px-4 py-2 rounded-full border border-lime/30 bg-lime/5 text-lime"
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {STRENGTHS.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 text-white/60 text-sm"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/[0.04] border border-ink-line flex items-center justify-center text-lime shrink-0">
                    <Icon size={15} />
                  </span>
                  {label}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
