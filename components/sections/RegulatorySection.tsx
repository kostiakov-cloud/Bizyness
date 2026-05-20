'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'

const features = [
  { text: 'E-Invoicing', badge: null },
  { text: 'e-reporting & PDF partner', badge: '2026' },
  { text: 'No need to change tools in 2026. We take care of everything.', badge: null, isHighlight: true },
  { text: 'Compliant & legal archiving', badge: null },
]

function DocumentIllustration() {
  return (
    <div className="relative w-full max-w-[240px] mx-auto">
      {/* Main document */}
      <div className="bg-[var(--color-transparent-l10)] rounded-[var(--radius-16)] p-[var(--spacing-24)] border border-[var(--color-transparent-l10)]">
        <div className="flex flex-col gap-[var(--spacing-8)]">
          <div className="h-3 bg-[var(--color-transparent-l80)] rounded" style={{ width: '80%' }} />
          <div className="h-3 bg-[var(--color-transparent-l80)] rounded" style={{ width: '60%' }} />
          <div className="h-3 bg-[var(--color-transparent-l80)] rounded" style={{ width: '70%' }} />
          <div className="mt-[var(--spacing-8)] h-3 bg-[var(--color-transparent-l80)] rounded" style={{ width: '90%' }} />
          <div className="h-3 bg-[var(--color-transparent-l80)] rounded" style={{ width: '55%' }} />
        </div>
        {/* Check seal */}
        <div className="mt-[var(--spacing-16)] flex justify-center">
          <div className="w-12 h-12 rounded-full bg-fresh-lime flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l4.5 4.5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RegulatorySection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.reg-left', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.reg-center', {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        delay: 0.2,
      })
      gsap.from('.reg-right', {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        delay: 0.3,
      })
    },
    { scope: ref }
  )

  return (
    <section
      ref={ref}
      className="py-[var(--spacing-80)] rounded-[var(--radius-20)] mx-[var(--spacing-80)] my-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-dark-blue-deep)' }}
    >
      <Container className="px-[var(--spacing-80)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--spacing-48)] items-center">

          {/* Left — text */}
          <div className="reg-left flex flex-col gap-[var(--spacing-24)]">
            <div className="flex items-center gap-[var(--spacing-8)]">
              <span className="text-h5">🇫🇷</span>
              <h2 className="text-h3 font-medium font-poppins text-text-white leading-[var(--text-h3--line-height)]">
                Ready for<br />the 2026 reform
              </h2>
            </div>
            <p className="text-small text-[var(--color-transparent-l80)] font-poppins leading-[var(--text-small--line-height)]">
              E-invoicing, e-reporting, PDF and archiving in compliance with regulations.
            </p>
            <div className="flex flex-col gap-[var(--spacing-16)]">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-[var(--spacing-12)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                    <circle cx="8" cy="8" r="8" fill="var(--color-fresh-lime)" opacity="0.2" />
                    <path d="M5 8l2.3 2.3 3.7-4.6" stroke="var(--color-fresh-lime)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex items-center gap-[var(--spacing-8)] flex-wrap">
                    <span className={`text-small font-poppins leading-[var(--text-small--line-height)] ${f.isHighlight ? 'text-text-white' : 'text-[var(--color-transparent-l80)]'}`}>
                      {f.text}
                    </span>
                    {f.badge && (
                      <Badge variant="warning" className="text-tiny">{f.badge}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-[var(--spacing-8)] text-small font-medium font-poppins text-fresh-lime hover:underline self-start">
              Learn more about the reform ↗
            </button>
          </div>

          {/* Center — illustration */}
          <div className="reg-center flex justify-center">
            <DocumentIllustration />
          </div>

          {/* Right — Peppol */}
          <div className="reg-right flex flex-col items-center lg:items-end">
            <div
              className="bg-[var(--color-transparent-l5)] border border-[var(--color-transparent-l10)] rounded-[var(--radius-20)] p-[var(--spacing-32)] flex flex-col items-center gap-[var(--spacing-16)] max-w-[220px]"
            >
              <p className="text-tiny font-medium font-poppins text-[var(--color-transparent-l80)] uppercase tracking-widest">
                PDF Partner
              </p>
              {/* Peppol logo placeholder */}
              <div className="flex items-center gap-[var(--spacing-8)]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-dark-blue)] flex items-center justify-center">
                  <span className="text-tiny font-bold text-text-white" style={{ fontSize: '8px' }}>P</span>
                </div>
                <span className="text-h6 font-semibold font-poppins text-text-white">Peppol</span>
              </div>
              <div className="flex items-center gap-[var(--spacing-4)]">
                <div className="w-2 h-2 rounded-full bg-fresh-lime" />
                <span className="text-tiny font-medium font-poppins text-fresh-lime">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
