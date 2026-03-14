import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Projects',
  description: 'A showcase of AI and full-stack projects built by Isben — chatbots, data visualization, and more.',
})

/* ── Types ─────────────────────────────────────── */
interface TechBadge {
  label: string
  color: string
}

interface ProjectFeature {
  icon: string
  text: string
}

interface Project {
  id: number
  title: string
  tagline: string
  description: string
  status: 'Live' | 'In Progress' | 'Archived'
  tech: TechBadge[]
  features: ProjectFeature[]
  demoUrl?: string
  githubUrl?: string
  preview: 'chatbot-db'
}

/* ── Data ───────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: 'Chatbot with Database & Chart Visualisation',
    tagline: 'Ask your data — get instant insights with visual charts',
    description:
      'A conversational AI assistant that translates natural-language questions into SQL queries, executes them against a relational database, and renders the results as interactive charts. Powered by an LLM + LangGraph pipeline with full conversation memory.',
    status: 'In Progress',
    tech: [
      { label: 'LangGraph', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
      { label: 'PostgreSQL', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
      { label: 'FastAPI', color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
      { label: 'Next.js', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' },
      { label: 'Recharts', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300' },
      { label: 'OpenAI', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' },
    ],
    features: [
      { icon: '💬', text: 'Natural-language → SQL query generation' },
      { icon: '📊', text: 'Auto-select chart type: bar, line, pie, scatter' },
      { icon: '🧠', text: 'Long-term conversation memory with PostgreSQL checkpointer' },
      { icon: '🔄', text: 'Streaming responses via Server-Sent Events' },
      { icon: '🛡️', text: 'SQL injection prevention & query validation layer' },
      { icon: '📁', text: 'Multi-datasource support (upload CSV or connect DB)' },
    ],
    preview: 'chatbot-db',
  },
]

/* ── Status pill ─────────────────────────────────── */
const statusStyle: Record<Project['status'], string> = {
  Live: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Archived: 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
}

/* ── Browser-frame mock preview ─────────────────── */
function ChatbotDBPreview() {
  return (
    /* Browser shell */
    <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-neutral-50 dark:bg-neutral-900">

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-200 dark:bg-neutral-800 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white dark:bg-neutral-700 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono truncate">
          localhost:3000 / chat
        </div>
      </div>

      {/* App body — split view */}
      <div className="grid grid-cols-2 h-72 sm:h-80">

        {/* Left — Chat panel */}
        <div className="flex flex-col bg-white dark:bg-neutral-950 border-r border-border overflow-hidden">
          {/* Chat header */}
          <div className="px-3 py-2 border-b border-border flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">AI</span>
            </div>
            <span className="text-[10px] font-semibold text-foreground">DataBot</span>
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
            {/* User */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[80%] leading-relaxed">
                Show me monthly revenue for 2024
              </div>
            </div>
            {/* Bot thinking */}
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%] text-muted-foreground leading-relaxed">
                Sure! Let me query the database…
              </div>
            </div>
            {/* SQL chip */}
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2 py-1.5 max-w-[85%]">
                <p className="text-[8px] text-blue-500 font-mono mb-1">SQL generated:</p>
                <code className="text-[7.5px] text-neutral-500 dark:text-neutral-400 font-mono leading-relaxed block">
                  SELECT month, SUM(amount)<br />
                  FROM orders<br />
                  WHERE YEAR(date) = 2024<br />
                  GROUP BY month
                </code>
              </div>
            </div>
            {/* Bot result */}
            <div className="flex items-end gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
              <div className="bg-neutral-100 dark:bg-neutral-800 text-[9px] rounded-xl rounded-bl-sm px-2.5 py-1.5 max-w-[80%] text-muted-foreground leading-relaxed">
                Here&apos;s the line chart for monthly revenue →
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="px-2.5 py-2 border-t border-border">
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg px-2.5 py-1.5">
              <span className="text-[9px] text-muted-foreground flex-1">Ask about your data…</span>
              <div className="w-4 h-4 rounded-md bg-blue-500 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Chart panel */}
        <div className="flex flex-col bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
          {/* Chart header */}
          <div className="px-3 py-2 border-b border-border flex items-center justify-between">
            <span className="text-[10px] font-semibold text-foreground">Visualisation</span>
            <div className="flex gap-1">
              {['Bar', 'Line', 'Pie'].map((t) => (
                <span
                  key={t}
                  className={`text-[8px] px-1.5 py-0.5 rounded-md cursor-pointer ${
                    t === 'Line'
                      ? 'bg-blue-500 text-white'
                      : 'bg-neutral-200 dark:bg-neutral-700 text-muted-foreground'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Fake line chart */}
          <div className="flex-1 flex flex-col p-3 gap-1">
            <span className="text-[9px] text-muted-foreground font-medium">Monthly Revenue — 2024</span>

            {/* SVG chart */}
            <div className="flex-1 relative">
              <svg viewBox="0 0 280 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Grid lines */}
                {[0, 37, 74, 111, 148].map((y) => (
                  <line key={y} x1="30" y1={y + 1} x2="275" y2={y + 1} stroke="currentColor" strokeOpacity="0.08" strokeWidth="1"/>
                ))}
                {/* Y axis labels */}
                {['50k','37k','25k','12k','0'].map((label, i) => (
                  <text key={label} x="26" y={i * 37 + 5} textAnchor="end" fontSize="7" fill="currentColor" fillOpacity="0.4">{label}</text>
                ))}
                {/* X axis labels */}
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m, i) => (
                  <text key={m} x={30 + i * 20.5} y="155" textAnchor="middle" fontSize="6" fill="currentColor" fillOpacity="0.4">{m}</text>
                ))}
                {/* Area fill */}
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02"/>
                  </linearGradient>
                </defs>
                <path
                  d="M30,120 L50,105 L71,90 L91,95 L112,75 L132,60 L153,55 L173,40 L194,50 L214,35 L235,25 L255,20 L255,149 L30,149 Z"
                  fill="url(#areaGrad)"
                />
                {/* Line */}
                <polyline
                  points="30,120 50,105 71,90 91,95 112,75 132,60 153,55 173,40 194,50 214,35 235,25 255,20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Dots */}
                {[
                  [30,120],[50,105],[71,90],[91,95],[112,75],[132,60],
                  [153,55],[173,40],[194,50],[214,35],[235,25],[255,20],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="#3b82f6" stroke="white" strokeWidth="1.5"/>
                ))}
                {/* Tooltip on last point */}
                <rect x="238" y="5" width="32" height="14" rx="3" fill="#3b82f6"/>
                <text x="254" y="14.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">$48.2k</text>
              </svg>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-1 mt-1">
              {[
                { label: 'Total', value: '$342k' },
                { label: 'Peak', value: '$48.2k' },
                { label: 'Growth', value: '+24%' },
              ].map((s) => (
                <div key={s.label} className="bg-white dark:bg-neutral-800 rounded-lg px-2 py-1.5 text-center border border-border">
                  <p className="text-[9px] font-bold text-foreground">{s.value}</p>
                  <p className="text-[7px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Project card ────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-background overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Preview */}
      <div className="p-5 pb-0 bg-gradient-to-b from-blue-50/60 dark:from-blue-950/20 to-transparent">
        {project.preview === 'chatbot-db' && <ChatbotDBPreview />}
      </div>

      {/* Content */}
      <div className="p-6 pt-5">
        {/* Status + title row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-lg font-bold text-foreground leading-snug">{project.title}</h2>
          <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusStyle[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

        {/* Features */}
        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">Key Features</p>
          <ul className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
            {project.features.map((f) => (
              <li key={f.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 shrink-0">{f.icon}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t.label} className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="flex gap-2.5 pt-2 border-t border-border">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <GithubIcon />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

/* ── Icons ───────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.909-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

/* ── Page ────────────────────────────────────────── */
export default function ProjectsPage() {
  return (
    <div>
      {/* Hero header */}
      <div className="bg-neutral-900 dark:bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-blue-400" />
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Projects
          </h1>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            A collection of AI-powered tools and full-stack applications I&apos;ve built — from conversational data exploration to intelligent automation systems.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Coming soon placeholder */}
        <div className="mt-12 rounded-2xl border border-dashed border-border p-10 flex flex-col items-center justify-center text-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-foreground">More projects coming soon</p>
          <p className="text-xs text-muted-foreground max-w-xs">
            Working on GraphRAG visualizer, Edge AI deployment toolkit, and more. Stay tuned.
          </p>
        </div>
      </div>
    </div>
  )
}
