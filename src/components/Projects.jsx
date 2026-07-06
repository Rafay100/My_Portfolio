import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'AI Agentic Automation System',
    desc: 'Automation workflows built with n8n / Zapier that connect multiple services into intelligent pipelines for leads, support, and more.',
    stack: ['n8n', 'Zapier', 'Make'],
    image: 'https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-3 md:row-span-2',
  },
  {
    title: 'AI Customer Support Agent System',
    desc: 'An AI-powered support system using OpenAI APIs with a multi-agent workflow that triages queries and routes them to specialized agents for real-world customer scenarios.',
    stack: ['OpenAI API', 'AI Agents', 'Node.js', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-2 md:row-span-2',
  },
{
  title: 'API Integration Dashboard',
  desc: 'A full-stack dashboard integrating multiple third-party APIs through a secure Express.js backend proxy — featuring live crypto price tracking, GitHub profile search, real-time health monitoring, and interactive analytics charts.',
  stack: ['Express.js', 'Chart.js', 'REST API', 'Node.js'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  demo: 'https://api-integeration-dashboard.vercel.app/',
  span: 'md:col-span-2',
},
  {
    title: 'Full Stack Feature Modules',
    desc: 'Reusable full-stack modules covering authentication flows, CRUD operations, and shared UI components.',
    stack: ['React', 'Node.js', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1763568258235-f40425a94af9?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-3',
  },
  {
    title: 'Responsive Web App Portfolio',
    desc: 'A modern, responsive portfolio with smooth animation and clean, reusable UI components across devices.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-5',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="Projects" heading="Selected Work" className="mb-6" />
        <p className="text-white/50 max-w-xl mb-14">
          A curated collection of projects where design, code, and motion come together.
        </p>

        <div className="grid md:grid-cols-5 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} className={project.span} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
