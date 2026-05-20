'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Container } from './Container'
import { Button, buttonCn } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Product', href: '#', hasDropdown: true },
  { label: 'Integrations', href: '#', hasDropdown: true },
  { label: 'Pricing', href: '/pricing', hasDropdown: false },
  { label: 'Resources', href: '#', hasDropdown: true },
  { label: 'About us', href: '/about', hasDropdown: false },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full bg-transparent border-b border-[var(--color-transparent-d10)]"
      style={{ boxShadow: 'var(--shadow-xs)' }}
    >
      <Container
        as="nav"
        className="flex items-center py-[var(--spacing-16)]"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo_bizyness.svg"
            alt="Bizyness"
            width={140}
            height={28}
            priority
          />
        </Link>

        {/* Desktop nav — immediately to the right of logo */}
        <ul className="hidden md:flex items-center gap-[var(--spacing-4)] ml-[var(--spacing-32)]">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-[var(--spacing-4)] px-[var(--spacing-12)] py-[var(--spacing-8)]',
                  'font-poppins text-small text-text-14 font-medium',
                  'rounded-[var(--radius-8)] hover:bg-[var(--color-bg-4)] hover:text-text-16',
                  'transition-colors duration-150'
                )}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions — pushed to far right */}
        <div className="hidden md:flex items-center gap-[var(--spacing-8)] ml-auto">
          {/* Language switcher */}
          <button
            className="flex items-center gap-[var(--spacing-4)] px-[var(--spacing-8)] py-[var(--spacing-8)] text-text-14 font-medium font-poppins rounded-[var(--radius-8)] hover:bg-[var(--color-transparent-d5)] transition-colors"
            style={{ fontSize: 'var(--text-small)' }}
          >
            <Image src="/icon_uk_flag.svg" alt="UK" width={18} height={18} />
            En
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 3.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Se connecter — outline, 40px height */}
          <Link href="#" className={buttonCn('outline', 'md')}>
            Se connecter
          </Link>

          {/* Start free trial — primary, 40px height, white text */}
          <Button size="md">
            Start free trial
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden ml-auto p-[var(--spacing-8)] text-text-16"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-transparent-d10)]" style={{ backgroundColor: 'var(--color-bg-4)' }}>
          <div className="flex flex-col p-[var(--spacing-16)] gap-[var(--spacing-4)]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-[var(--spacing-16)] py-[var(--spacing-12)] text-small text-text-14 font-medium font-poppins rounded-[var(--radius-8)] hover:bg-[var(--color-transparent-d5)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-[var(--color-transparent-d10)] pt-[var(--spacing-16)] mt-[var(--spacing-8)] flex flex-col gap-[var(--spacing-8)]">
              <Link href="#" className={buttonCn('outline', 'md', 'w-full justify-center')}>
                Se connecter
              </Link>
              <Button size="md" className="w-full justify-center">Start free trial</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
