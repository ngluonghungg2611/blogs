import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
      <p className="text-xs font-mono text-blue-500 mb-4 tracking-widest uppercase">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Maybe it was
        never written — yet.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          Browse posts
        </Link>
      </div>

      {/* Decorative */}
      <div className="mt-16 font-mono text-xs text-muted-foreground/30 leading-relaxed select-none">
        <div>const page = router.find(path)</div>
        <div className="text-red-400/40">{'// TypeError: Cannot read properties of undefined'}</div>
        <div className="text-muted-foreground/20">{'// (reading \'render\')'}</div>
      </div>
    </div>
  )
}
