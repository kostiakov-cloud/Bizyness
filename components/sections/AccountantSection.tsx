'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { accountantFeatures } from '@/content/home'

function AccountantIllustration() {
  return (
    <div className="relative w-full max-w-[400px] ml-auto">
      <div
        className="bg-[var(--color-bg-4)] rounded-[var(--radius-20)] overflow-hidden"
        style={{ aspectRatio: '4/3' }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* Simple illustration placeholder */}
          <div className="flex flex-col items-center gap-[var(--spacing-16)] p-[var(--spacing-32)]">
            <div className="flex items-end gap-[var(--spacing-8)]">
              {/* Two people silhouette */}
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                {/* Person 1 */}
                <circle cx="40" cy="30" r="15" fill="var(--color-desert-oak)" />
                <path d="M20 90 C20 65 60 65 60 90" fill="var(--color-ultramarine)" />
                {/* Person 2 */}
                <circle cx="80" cy="35" r="15" fill="var(--color-peach-red)" />
                <path d="M60 90 C60 65 100 65 100 90" fill="var(--color-dark-blue)" />
                {/* Laptop */}
                <rect x="30" y="80" width="60" height="35" rx="4" fill="var(--color-text-13)" />
                <rect x="32" y="82" width="56" height="28" rx="2" fill="var(--color-bg-4)" />
                <rect x="25" y="115" width="70" height="4" rx="2" fill="var(--color-text-14)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AccountantSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.acct-left', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.acct-right', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        delay: 0.15,
      })
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="bg-bg-white py-[var(--spacing-80)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-[var(--spacing-80)]">
          {/* Left — text */}
          <div className="acct-left flex-1 flex flex-col gap-[var(--spacing-24)] max-w-[520px]">
            <h2 className="text-h3 font-medium font-poppins text-text-16 leading-[var(--text-h3--line-height)]">
              Also built for your accountant
            </h2>
            <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)]">
              A clear, reliable view to support your clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-12)]">
              {accountantFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-[var(--spacing-8)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[3px]">
                    <circle cx="8" cy="8" r="8" fill="var(--color-fresh-lime)" opacity="0.2" />
                    <path d="M5 8l2.3 2.3 3.7-4.6" stroke="var(--color-fresh-lime)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-small text-text-14 font-poppins leading-[var(--text-small--line-height)]">{f}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-[var(--spacing-8)] text-small font-medium font-poppins text-dark-blue hover:underline self-start">
              View all invoices ↗
            </button>
          </div>

          {/* Right — illustration */}
          <div className="acct-right flex-1 w-full">
            <AccountantIllustration />
          </div>
        </div>
      </Container>
    </section>
  )
}
