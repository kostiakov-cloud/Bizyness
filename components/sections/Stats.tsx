'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'

const stats = [
  {
    value: '12h+',
    label: 'Saved per month on accounting tasks',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--color-dark-blue)" strokeWidth="2" />
        <path d="M16 9v7l4 4" stroke="var(--color-dark-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '0 error',
    label: 'On your VAT returns and fewer tax audits',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l10.9 19H5.1L16 4z" stroke="var(--color-emerald)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 14v5M16 21v1" stroke="var(--color-emerald)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Compliant with VAT, OSS, IOSS, PDF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="var(--color-fresh-lime)" strokeWidth="2" />
        <path d="M11 16l3.5 3.5 6.5-7" stroke="var(--color-fresh-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '€2,000+',
    label: 'In benefits detected (VAT, errors…)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="4" stroke="var(--color-amber)" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" stroke="var(--color-amber)" strokeWidth="2" />
        <path d="M4 13h4M24 13h4M4 19h4M24 19h4" stroke="var(--color-amber)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="bg-[var(--color-bg-1)] py-[var(--spacing-80)] border-y border-[var(--color-transparent-d5)]">
      <Container>
        <h2 className="text-center text-h5 font-medium font-poppins text-text-16 mb-[var(--spacing-48)] leading-[var(--text-h5--line-height)]">
          What our customers save with Bizyness
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-32)]">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-center text-center gap-[var(--spacing-16)]">
              <div>{stat.icon}</div>
              <p className="text-h3 font-semibold font-poppins text-text-16 leading-[var(--text-h3--line-height)]" style={{ letterSpacing: '-0.02em' }}>
                {stat.value}
              </p>
              <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)] max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
