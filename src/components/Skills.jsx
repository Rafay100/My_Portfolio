import { motion } from 'framer-motion'
import { FiCode, FiServer, FiCpu, FiTool } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

const CATEGORIES = [
  {
    icon: FiCode,
    title: 'Front-End',
    desc: 'Modern interfaces with performance and responsiveness in mind.',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js / Next.js', level: 88 },
    ],
  },
  {
    icon: FiServer,
    title: 'Back-End',
    desc: 'Server-side logic, APIs, and data handling.',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    icon: FiCpu,
    title: 'AI & Automation',
    desc: 'Intelligent agents and automated business workflows.',
    skills: [
      { name: 'OpenAI APIs', level: 85 },
      { name: 'n8n / Zapier / Make', level: 82 },
    ],
  },
  {
    icon: FiTool,
    title: 'Tools & Practices',
    desc: 'Development workflow, deployment, and quality assurance.',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vercel / Postman', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Skills"
          heading="Technical Expertise"
          className="mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 max-w-xl mb-14"
        >
          A curated toolkit of technologies and disciplines I use to
          transform concepts into polished digital experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map(({ icon: Icon, title, desc, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <GlassCard className="p-6 h-full hover:shadow-glow-sm transition-shadow duration-300">
                <Icon className="text-lime mb-4" size={22} />
                <h3 className="font-display font-bold text-white text-lg mb-1.5">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-5">{desc}</p>

                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-[11px] text-white/60 mb-1.5">
                        <span>{skill.name}</span>
                        <span className="font-mono text-lime">{skill.level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                          className="h-full bg-lime rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
