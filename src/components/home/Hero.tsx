import Link from 'next/link'

export function Hero() {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg mb-6">
          H
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
          Nguyen Luong Hung
        </h1>
        <p className="text-neutral-400 text-lg mb-6">AI Engineer · Hanoi, Vietnam</p>
        <p className="text-neutral-300 text-base max-w-2xl leading-relaxed mb-10">
          I build production-grade LLM systems — from legal knowledge-base platforms and
          GraphRAG retrieval to agentic summarization, fine-tuning, and self-hosted model
          serving for enterprise, on-premise deployments.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:bg-blue-600 hover:border-blue-600 text-white text-sm font-semibold transition-colors"
          >
            View Blog
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:bg-blue-600 hover:border-blue-600 text-white text-sm font-semibold transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:bg-blue-600 hover:border-blue-600 text-white text-sm font-semibold transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  )
}
