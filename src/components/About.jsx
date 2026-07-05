import { motion } from 'framer-motion'
import { FiLayers, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

const PARAGRAPHS = [
  'I am Syed Abdul Rafay, a Full Stack Developer with an AI-friendly mindset and hands-on experience building scalable web applications, integrating APIs, and developing responsive front-end interfaces.',
  'Skilled in both client-side and server-side development, I am actively expanding my focus toward AI-powered automation systems, multi-agent workflows, and modern SaaS tools that solve real business problems.',
  'I bring strong problem-solving ability, clean architecture habits, and a performance-first approach to every project. I thrive in collaborative environments and enjoy learning new technologies quickly.',
]

const FEATURES = [
  { icon: FiLayers, title: 'Full Stack Development', desc: 'End-to-end web apps with React, Node.js, and APIs.' },
  { icon: FiCpu, title: 'AI & Automation', desc: 'Backend integrations, n8n / Zapier workflows, and AI agents.' },
  { icon: FiZap, title: 'Performance First', desc: 'Responsive, optimized, cross-browser friendly code.' },
  { icon: FiTrendingUp, title: 'Fast Learner', desc: 'Quick to adapt to new tech and collaborative workflows.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="About" heading="Building Real-World, AI-Powered Solutions." className="mb-14" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-white/60 leading-relaxed"
          >
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="p-5 h-full hover:shadow-glow-sm transition-shadow duration-300">
                  <Icon className="text-lime mb-3" size={20} />
                  <h3 className="font-display font-semibold text-white text-sm mb-1.5">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
