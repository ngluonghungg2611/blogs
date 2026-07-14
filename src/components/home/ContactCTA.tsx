export function ContactCTA() {
  const links = [
    { label: 'Email', href: 'mailto:benu.aidev@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/ngluonghungg2611' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-aidev/' },
    { label: 'Viblo', href: 'https://viblo.asia/u/isBenU' },
  ]

  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Let&apos;s build something together
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
          Open to discussing production LLM systems, RAG architectures, and AI engineering
          collaboration.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-neutral-700 text-white text-sm hover:bg-neutral-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
