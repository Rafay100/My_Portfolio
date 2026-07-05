import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import Button from './Button'

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/Rafay100', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/syed-abdul-rafay-80b185282/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:srafay2021@gmail.com', label: 'Email' },
]

const DETAILS = [
  { icon: FiMapPin, label: 'Karachi, Pakistan' },
  { icon: FiMail, label: 'srafay2021@gmail.com', href: 'mailto:srafay2021@gmail.com' },
  { icon: FiPhone, label: '+92 316 1612741', href: 'tel:+923161612741' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionTitle label="Contact" heading="Let's Build Something Impactful" />
          <p className="mt-4 text-white/50 max-w-md">
            Open for full stack, AI automation, and frontend opportunities.
            Drop a message and I'll get back to you soon.
          </p>

          <span className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] px-4 py-2 rounded-full bg-lime/10 border border-lime/20 text-lime">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            Open for collaborations
          </span>

          <p className="mt-6 text-white/60 leading-relaxed max-w-md">
            Whether you need a creative frontend engineer, a UI/UX partner,
            or just want to talk about the future of the web — I'd love to
            hear from you.
          </p>

          <div className="mt-8 space-y-3">
            {DETAILS.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-3 text-white/60 text-sm">
                <span className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center text-lime shrink-0">
                  <Icon size={15} />
                </span>
                {href ? (
                  <a href={href} data-cursor-hover className="hover:text-lime transition-colors">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: -6, borderColor: 'rgba(198,255,0,0.5)' }}
                className="w-11 h-11 rounded-full border border-ink-line flex items-center justify-center text-white/70 hover:text-lime hover:shadow-glow-sm transition-colors"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        <GlassCard className="p-7 sm:p-9">
          {sent ? (
            <div className="py-10 text-center">
              <p className="font-display font-bold text-2xl text-lime mb-2">Message sent.</p>
              <p className="text-white/50 text-sm">Thanks for reaching out — I'll reply soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-white/[0.03] border border-ink-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-lime/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-white/[0.03] border border-ink-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-lime/60 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full bg-white/[0.03] border border-ink-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-lime/60 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-white/[0.03] border border-ink-line rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-lime/60 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  )
}
