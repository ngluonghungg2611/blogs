import Link from 'next/link'

const footerLinks = {
  Navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ],
  Connect: [
    { href: 'https://github.com/ngluonghungg2611', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ben-aidev/', label: 'LinkedIn' },
    { href: 'https://viblo.asia/u/isBenU', label: 'Viblo' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-foreground mb-2">TechBlog</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Writing about software engineering, architecture, and the craft of building products.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
