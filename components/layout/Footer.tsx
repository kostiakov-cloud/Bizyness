import Link from 'next/link'
import { Container } from './Container'
import { footerColumns } from '@/content/home'

const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2.667 5.333H5.333V13.333H2.667V5.333ZM4 4a1.333 1.333 0 1 1 0-2.667A1.333 1.333 0 0 1 4 4ZM6.667 5.333h2.5v1.094h.035c.348-.66 1.198-1.355 2.465-1.355C13.88 5.072 14 6.817 14 9.017v4.316H11.333V9.5c0-.957-.017-2.188-1.333-2.188-1.335 0-1.54 1.042-1.54 2.118v3.903H6.667V5.333Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.833 4.5a1.667 1.667 0 0 0-1.166-1.167C11.5 3 8 3 8 3s-3.5 0-4.667.333A1.667 1.667 0 0 0 2.167 4.5C1.833 5.667 1.833 8 1.833 8s0 2.333.334 3.5a1.667 1.667 0 0 0 1.166 1.167C4.5 13 8 13 8 13s3.5 0 4.667-.333a1.667 1.667 0 0 0 1.166-1.167C14.167 10.333 14.167 8 14.167 8s0-2.333-.334-3.5ZM6.667 10V6l3.333 2-3.333 2Z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.6 2h2.4L9.8 7.4 16 14h-4.5L8 10.1 4.1 14H1.7l5.5-6L1 2h4.6l3.1 3.6L12.6 2Zm-.8 10.8h1.3L4.2 3.3H2.8l9 9.5Z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-bg-white border-t border-[var(--color-transparent-d5)]">
      <Container className="py-[var(--spacing-80)]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[var(--spacing-48)]">
          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-[var(--spacing-24)]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-[var(--spacing-8)]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="var(--color-amber)" />
                <path d="M18 4L11 15h6.5L12.5 24l11-14h-7L18 4z" fill="white" />
              </svg>
              <span className="font-poppins font-semibold text-h6 text-global-default" style={{ letterSpacing: '-0.02em' }}>
                bizyness.
              </span>
            </Link>
            <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)] max-w-[200px]">
              La référence solution for compliant e-commerce accounting.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-[var(--spacing-8)]">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-circle border border-[var(--color-transparent-d10)] text-text-13 hover:border-dark-blue hover:text-dark-blue transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-[var(--spacing-16)]">
              <h4 className="text-small font-semibold font-poppins text-text-16">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[var(--spacing-12)]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-small text-text-13 font-poppins hover:text-dark-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Copyright bar */}
      <div className="border-t border-[var(--color-transparent-d5)]">
        <Container className="py-[var(--spacing-24)]">
          <p className="text-caption text-text-13 font-poppins text-center">
            © 2026 Bizyness. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
