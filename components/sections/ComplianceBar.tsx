'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'

const badges = [
  {
    icon: '🇫🇷',
    title: 'Hosted in France',
    subtitle: 'Data in Europe',
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full border-2 border-[var(--color-fresh-lime)] flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3.5 3.5 5.5-7" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    title: 'Compliant',
    subtitle: 'With EU regulations',
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-[var(--color-dark-blue)] flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="3" y="6" width="8" height="6" rx="1.5" stroke="white" strokeWidth="1.2" />
          <path d="M5 6V4.5a2 2 0 014 0V6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7" cy="9" r="1" fill="white" />
        </svg>
      </div>
    ),
    title: 'RGPD',
    subtitle: 'Secured data',
  },
  {
    icon: (
      <div className="w-8 h-8 rounded-full bg-[var(--color-transparent-l10)] border border-[var(--color-transparent-l10)] flex items-center justify-center">
        <span className="text-tiny font-bold text-text-white" style={{ fontSize: '8px' }}>NF</span>
      </div>
    ),
    title: 'NF NF525 + NF203',
    subtitle: 'Compliant invoicing',
  },
]

export function ComplianceBar() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.compliance-item', {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    },
    { scope: ref }
  )

  return (
    <section
      ref={ref}
      className="py-[var(--spacing-48)]"
      style={{ backgroundColor: 'var(--color-global-default)' }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-[var(--spacing-48)]">
          {/* Left text */}
          <div className="shrink-0">
            <h3 className="text-h5 font-medium font-poppins text-text-white leading-[var(--text-h5--line-height)]">
              Compliance is not an option
            </h3>
            <p className="text-small text-[var(--color-transparent-l80)] font-poppins mt-[var(--spacing-8)] max-w-[220px] leading-[var(--text-small--line-height)]">
              Bizyness anticipates legal requirements to keep your business secure at every step.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-[var(--color-transparent-l10)]" />

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-[var(--spacing-32)] justify-center lg:justify-start">
            {badges.map((b, i) => (
              <div key={i} className="compliance-item flex items-center gap-[var(--spacing-12)]">
                <div className="shrink-0">
                  {typeof b.icon === 'string' ? (
                    <span className="text-3xl">{b.icon}</span>
                  ) : (
                    b.icon
                  )}
                </div>
                <div>
                  <p className="text-small font-semibold font-poppins text-text-white">{b.title}</p>
                  <p className="text-tiny text-[var(--color-transparent-l80)] font-poppins">{b.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
