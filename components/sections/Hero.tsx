'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Button, buttonCn } from '@/components/ui/Button'
import { TrustpilotStars } from '@/components/ui/TrustpilotStars'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/* ─── Platform icons ────────────────────────────────────────── */

function PlatformIcon({ name, color, initial }: { name: string; color: string; initial: string }) {
  return (
    <div
      className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center shrink-0"
      style={{ backgroundColor: color }}
    >
      <span className="font-bold text-[var(--color-text-white)]" style={{ fontSize: '8px', fontFamily: 'var(--font-poppins)' }}>
        {initial}
      </span>
    </div>
  )
}

/* ─── Dashboard sub-components ─────────────────────────────── */

function MandateCard() {
  return (
    <div
      className="flex items-center justify-between gap-[var(--spacing-16)] rounded-[var(--radius-16)] px-[var(--spacing-20)] py-[var(--spacing-16)]"
      style={{ backgroundColor: 'var(--color-bg-2)' }}
    >
      <div className="flex flex-col gap-[var(--spacing-8)]">
        <p className="text-caption font-semibold font-poppins text-text-16 leading-[var(--text-caption--line-height)]">
          Ready for the 2026 e-invoicing mandate
        </p>
        <div className="flex items-center gap-[var(--spacing-12)] flex-wrap">
          {['Factur-X', 'e-reporting', 'PDP partner'].map((item) => (
            <div key={item} className="flex items-center gap-[var(--spacing-4)]">
              {/* Circle-check outline icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="var(--color-fresh-lime)" strokeWidth="1.3" />
                <path d="M4.5 7l1.8 1.8 3.2-3.6" stroke="var(--color-fresh-lime)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-tiny font-poppins text-text-14" style={{ fontSize: '11px' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Document/sheet icon */}
      <div
        className="shrink-0 w-[40px] h-[40px] rounded-[var(--radius-8)] flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-amber)' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3.5" y="2" width="10" height="13" rx="1.5" fill="white" />
          <path d="M6 6h5M6 9h3.5M6 12h4" stroke="var(--color-amber)" strokeWidth="1" strokeLinecap="round" />
          <rect x="7.5" y="5" width="9" height="13" rx="1.5" fill="white" fillOpacity="0.85" stroke="var(--color-amber)" strokeWidth="0.5" />
          <path d="M10 9h4M10 12h3" stroke="var(--color-amber)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

function AreaChart() {
  return (
    <div>
      <div className="flex items-center gap-[var(--spacing-12)] mb-[var(--spacing-8)]">
        <div className="flex items-center gap-[var(--spacing-4)]">
          <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: 'var(--color-fresh-lime)' }} />
          <span className="font-poppins text-text-13" style={{ fontSize: '10px' }}>Income</span>
        </div>
        <div className="flex items-center gap-[var(--spacing-4)]">
          <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: 'var(--color-amber)' }} />
          <span className="font-poppins text-text-13" style={{ fontSize: '10px' }}>Expenses</span>
        </div>
      </div>
      <svg viewBox="0 0 300 70" className="w-full" style={{ height: '70px' }} preserveAspectRatio="none">
        <defs>
          <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-fresh-lime)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-fresh-lime)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 55 C40 55 60 25 80 20 C100 15 120 30 160 15 C200 0 240 10 280 13 C290 14 296 14 300 13 L300 70 L0 70 Z" fill="url(#incomeGrad)" />
        <path d="M0 55 C40 55 60 25 80 20 C100 15 120 30 160 15 C200 0 240 10 280 13 C290 14 296 14 300 13" fill="none" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M0 65 C40 63 80 59 120 57 C160 55 200 51 240 54 C265 56 285 58 300 56 L300 70 L0 70 Z" fill="url(#expenseGrad)" />
        <path d="M0 65 C40 63 80 59 120 57 C160 55 200 51 240 54 C265 56 285 58 300 56" fill="none" stroke="var(--color-amber)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex justify-between mt-[var(--spacing-4)]">
        {['June', 'July', 'August', 'September'].map((m) => (
          <span key={m} className="font-poppins text-text-13" style={{ fontSize: '9px' }}>{m}</span>
        ))}
      </div>
    </div>
  )
}

const invoices = [
  { id: 'FAC-2026-041', client: 'Brand Co.', amount: '€ 99', paid: true },
  { id: 'FAC-2026-402', client: 'John Smith', amount: '-€ 45', paid: false },
  { id: 'FAC-2026-412', client: 'Jane Doe', amount: '€ 149', paid: true },
]

function RevenueCard() {
  return (
    <div
      className="flex-1 min-w-0 bg-[var(--color-bg-white)] rounded-[var(--radius-16)] p-[var(--spacing-16)] flex flex-col gap-[var(--spacing-12)]"
      style={{ boxShadow: 'var(--shadow-m)' }}
    >
      <div className="flex items-center justify-between">
        <p className="text-caption font-semibold font-poppins text-text-16">October 2024</p>
        <div className="flex items-center gap-[var(--spacing-4)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 7l-3-3 3-3M8 5l3 3-3 3" stroke="var(--color-text-13)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
      <div className="flex items-center gap-[var(--spacing-8)]">
        <span className="font-semibold font-poppins text-text-16" style={{ fontSize: '22px', letterSpacing: '-0.03em' }}>
          € 26,469
        </span>
        <span
          className="text-tiny font-medium font-poppins px-[var(--spacing-8)] py-[2px] rounded-circle"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-scarlet) 12%, white)', color: 'var(--color-scarlet)', fontSize: '10px' }}
        >
          -25.5%
        </span>
        <span className="font-poppins text-text-13" style={{ fontSize: '10px' }}>vs. prev mo</span>
      </div>

      <AreaChart />

      <div className="h-px" style={{ backgroundColor: 'var(--color-transparent-d5)' }} />

      <div>
        <p className="text-tiny font-semibold font-poppins text-text-16 mb-[var(--spacing-8)]" style={{ fontSize: '11px' }}>
          Latest invoices
        </p>
        <div className="flex flex-col gap-[var(--spacing-4)]">
          {invoices.map((inv, i) => (
            <div
              key={i}
              className="flex items-center gap-[var(--spacing-8)] py-[3px]"
              style={{ borderBottom: i < invoices.length - 1 ? '1px solid var(--color-transparent-d5)' : 'none' }}
            >
              <span className="font-poppins text-text-13 shrink-0" style={{ fontSize: '9px', width: '72px' }}>{inv.id}</span>
              <span className="font-poppins text-text-14 flex-1" style={{ fontSize: '9px' }}>{inv.client}</span>
              <span className="font-medium font-poppins text-text-16 shrink-0" style={{ fontSize: '10px' }}>{inv.amount}</span>
              <span
                className="font-medium font-poppins shrink-0 px-[var(--spacing-8)] py-[2px] rounded-circle"
                style={{
                  fontSize: '8px',
                  backgroundColor: inv.paid ? 'color-mix(in srgb, var(--color-fresh-lime) 15%, white)' : 'color-mix(in srgb, var(--color-scarlet) 12%, white)',
                  color: inv.paid ? 'var(--color-fresh-lime)' : 'var(--color-scarlet)',
                }}
              >
                {inv.paid ? 'Paid' : 'Overdue'}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-[var(--spacing-8)] font-medium font-poppins text-dark-blue hover:underline" style={{ fontSize: '10px' }}>
          View all invoices ↗
        </button>
      </div>
    </div>
  )
}

const platforms = [
  { name: 'Shopify', amount: '€ 12,456', color: '#95BF47', initial: 'S' },
  { name: 'Stripe', amount: '€ 3,255', color: '#6772E5', initial: 'S' },
  { name: 'PayPal', amount: '€ 1,150', color: '#009CDE', initial: 'P' },
  { name: 'Amazon', amount: '€ 2,840', color: '#FF9900', initial: 'a' },
  { name: 'Prestashop', amount: '€ 12,456', color: '#DF0067', initial: 'P' },
  { name: 'Wix', amount: '€ 3,255', color: '#FAAD00', initial: 'W' },
  { name: 'Other Platform', amount: '', color: 'var(--color-text-13)', initial: '+' },
]

function ConnectedToCard() {
  return (
    <div
      className="bg-[var(--color-bg-white)] rounded-[var(--radius-16)] p-[var(--spacing-16)] flex flex-col gap-[var(--spacing-8)]"
      style={{ boxShadow: 'var(--shadow-m)' }}
    >
      <p className="text-tiny font-semibold font-poppins text-text-16" style={{ fontSize: '11px' }}>
        Connected to
      </p>
      <div className="flex flex-col gap-[var(--spacing-8)]">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-center justify-between gap-[var(--spacing-8)]">
            <div className="flex items-center gap-[var(--spacing-8)]">
              <PlatformIcon name={p.name} color={p.color} initial={p.initial} />
              <span className="font-poppins text-text-14" style={{ fontSize: '11px' }}>{p.name}</span>
            </div>
            {p.amount && (
              <span className="font-medium font-poppins text-text-16" style={{ fontSize: '11px' }}>{p.amount}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CollectedVATCard() {
  return (
    <div
      className="bg-[var(--color-bg-white)] rounded-[var(--radius-16)] p-[var(--spacing-16)] flex flex-col gap-[var(--spacing-8)]"
      style={{ boxShadow: 'var(--shadow-m)' }}
    >
      <p className="text-tiny font-semibold font-poppins text-text-16" style={{ fontSize: '11px' }}>
        Collected VAT
      </p>
      <p className="font-semibold font-poppins text-dark-blue" style={{ fontSize: '20px', letterSpacing: '-0.03em' }}>
        € 12,456
      </p>
      <p className="font-poppins text-text-13" style={{ fontSize: '11px' }}>Return filed (OSS)</p>
      <div className="flex items-center gap-[var(--spacing-4)]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="var(--color-fresh-lime)" strokeWidth="1.2" />
          <path d="M3.5 6l1.8 1.8 3.2-3.6" stroke="var(--color-fresh-lime)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-poppins text-text-13" style={{ fontSize: '11px' }}>Up to date</span>
      </div>
    </div>
  )
}

function HeroDashboard() {
  return (
    <div className="flex flex-col gap-[var(--spacing-12)]">
      <MandateCard />
      <div className="flex gap-[var(--spacing-12)]">
        <RevenueCard />
        {/* Right column: two stacked cards */}
        <div className="flex flex-col gap-[var(--spacing-12)] w-[200px] shrink-0">
          <ConnectedToCard />
          <CollectedVATCard />
        </div>
      </div>
    </div>
  )
}

/* ─── NF & Facturation badges ────────────────────────────────── */

function CertBadges() {
  return (
    <div className="flex items-stretch gap-[var(--spacing-12)]">
      {/* NF badge — flex-1 for equal width */}
      <div
        className="flex-1 flex items-center gap-[var(--spacing-12)] rounded-[var(--radius-8)] px-[var(--spacing-16)] py-[var(--spacing-12)] border"
        style={{
          borderColor: 'var(--color-transparent-d10)',
          backgroundColor: 'var(--color-bg-white)',
          boxShadow: 'var(--shadow-m)',
        }}
      >
        <div
          className="w-[40px] h-[40px] shrink-0 rounded-[var(--radius-8)] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--color-dark-blue-deep)' }}
        >
          <span className="font-bold text-[var(--color-text-white)] font-poppins leading-none" style={{ fontSize: '10px' }}>NF</span>
          <span className="text-[var(--color-text-white)] font-poppins leading-none" style={{ fontSize: '6px', opacity: 0.7 }}>525+203</span>
        </div>
        <div>
          <p className="text-tiny font-semibold font-poppins text-text-16" style={{ fontSize: '11px' }}>NF525 + NF203</p>
          <p className="font-poppins text-text-13" style={{ fontSize: '10px' }}>Compliant invoicing soft.</p>
        </div>
      </div>

      {/* Facturation électronique badge — flex-1 for equal width */}
      <div
        className="flex-1 flex items-center gap-[var(--spacing-12)] rounded-[var(--radius-8)] px-[var(--spacing-16)] py-[var(--spacing-12)] border"
        style={{
          borderColor: 'var(--color-transparent-d10)',
          backgroundColor: 'var(--color-bg-white)',
          boxShadow: 'var(--shadow-m)',
        }}
      >
        <div
          className="w-[40px] h-[40px] shrink-0 rounded-[var(--radius-8)] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-dark-blue)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="2" width="12" height="14" rx="1.5" fill="white" fillOpacity="0.9" />
            <path d="M5.5 6h7M5.5 9h5M5.5 12h6" stroke="var(--color-dark-blue)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div
            className="inline-flex items-center px-[var(--spacing-8)] py-[2px] rounded-circle mb-[var(--spacing-4)]"
            style={{ backgroundColor: 'var(--color-dark-blue)' }}
          >
            <span className="text-[var(--color-text-white)] font-poppins" style={{ fontSize: '8px' }}>Solution compatible</span>
          </div>
          <p className="font-semibold font-poppins text-text-16 leading-tight" style={{ fontSize: '11px' }}>
            Facturation<br />électronique
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Hero component ───────────────────────────────────── */

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { y: 16, opacity: 0, duration: 0.5 })
        .from('.hero-h1-line', { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.2')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-certs', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-ctas', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-trust', { y: 8, opacity: 0, duration: 0.4 }, '-=0.2')
        .from(rightRef.current, { x: 48, opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.9')
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="pt-[var(--spacing-80)] pb-[var(--spacing-80)] overflow-hidden"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-[var(--spacing-48)]">

          {/* ── Left column — 50% width ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-[var(--spacing-20)]">

            {/* "Made in France" badge */}
            <div className="hero-badge inline-flex items-center gap-[var(--spacing-8)] self-start">
              <span
                className="inline-flex items-center gap-[var(--spacing-8)] text-tiny font-medium font-poppins px-[var(--spacing-12)] py-[var(--spacing-4)] rounded-circle border"
                style={{
                  color: 'var(--color-dark-blue)',
                  backgroundColor: 'color-mix(in srgb, var(--color-dark-blue) 8%, white)',
                  borderColor: 'color-mix(in srgb, var(--color-dark-blue) 15%, white)',
                  fontSize: '11px',
                }}
              >
                🇫🇷 Made in France for E-commerce Businesses
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-poppins font-medium text-text-16"
              style={{ fontSize: 'var(--text-h1)', lineHeight: 'var(--text-h1--line-height)' }}
            >
              <span className="hero-h1-line block">VAT compliant.</span>
              <span className="hero-h1-line block">Built for e-commerce.</span>
              <span className="hero-h1-line block" style={{ color: 'var(--color-dark-blue)' }}>
                Approved by accountants.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-sub font-poppins text-text-13"
              style={{ fontSize: 'var(--text-small)', lineHeight: 'var(--text-small--line-height)' }}
            >
              Automate your accounting, VAT (OSS/IOSS) and exports.<br />
              100% compliant, 0 headcount
            </p>

            {/* Certification badges */}
            <div className="hero-certs">
              <CertBadges />
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex items-center gap-[var(--spacing-24)] flex-wrap">
              {/* Primary CTA — two text rows */}
              <button
                className={cn(
                  'inline-flex flex-col items-center justify-center',
                  'px-[var(--spacing-32)] py-[var(--spacing-12)] rounded-circle',
                  'bg-dark-blue hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer',
                  'font-poppins'
                )}
              >
                <span className="font-medium text-[var(--color-text-white)]" style={{ fontSize: 'var(--text-small)' }}>
                  Start free trial 14 days
                </span>
                <span className="text-[var(--color-text-white)]" style={{ fontSize: 'var(--text-tiny)', opacity: 0.7 }}>
                  No credit card required
                </span>
              </button>

              {/* See demo — outline style */}
              <Link
                href="#"
                className={cn(
                  'inline-flex items-center gap-[var(--spacing-8)]',
                  'px-[var(--spacing-20)] py-[var(--spacing-12)] rounded-circle',
                  'bg-[var(--color-bg-white)] border border-[var(--color-transparent-d10)]',
                  'font-medium font-poppins text-text-14 hover:border-dark-blue hover:text-dark-blue transition-colors'
                )}
                style={{ fontSize: 'var(--text-small)' }}
              >
                {/* Play icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
                  <path d="M6.5 5.5l4.5 2.5-4.5 2.5V5.5z" fill="currentColor" />
                </svg>
                See demo in 2 min
              </Link>
            </div>

            {/* Trustpilot */}
            <TrustpilotStars className="hero-trust" />
          </div>

          {/* ── Right column — 50% width, dashboard ── */}
          <div ref={rightRef} className="flex-1 min-w-0 w-full">
            <HeroDashboard />
          </div>
        </div>
      </Container>
    </section>
  )
}
