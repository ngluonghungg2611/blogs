import Link from 'next/link'
import { skillGroups } from '@/lib/profile'

const highlightLabels = ['LLM / GenAI', 'Deep Learning', 'Infrastructure', 'Databases']

export function SkillsHighlight() {
  const highlighted = skillGroups.filter((group) => highlightLabels.includes(group.label))

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
        Skills & Experience
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
        AI Engineer focused on production LLM systems
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        Years of hands-on experience across GraphRAG retrieval, agentic pipelines, fine-tuning,
        and self-hosted LLM serving for enterprise and legal-domain applications.
      </p>
      <div className="space-y-4 mb-8">
        {highlighted.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="text-xs font-semibold text-muted-foreground w-40 shrink-0 pt-0.5 mb-1 sm:mb-0">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link href="/about" className="text-sm font-semibold text-blue-500 hover:underline">
        Xem thêm →
      </Link>
    </div>
  )
}
