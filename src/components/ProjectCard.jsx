import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import GlassCard from './GlassCard'

export default function ProjectCard({ project, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <GlassCard className="h-full flex flex-col group hover:shadow-glow transition-shadow duration-300" hover>
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-lg text-white mb-1.5">{project.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-ink-line text-white/55">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.demo && (
              <a
                href={project.demo}
                data-cursor-hover
                className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-lime hover:text-lime-soft transition-colors"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
            <a
              href={project.github || 'https://github.com/Rafay100'}
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-white/60 hover:text-white transition-colors"
            >
              <FiGithub size={14} /> GitHub
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
