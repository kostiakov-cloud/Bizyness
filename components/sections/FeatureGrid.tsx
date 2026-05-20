'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { featureCards } from '@/content/home'

const icons = [
  <svg key="native" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="var(--color-dark-blue)" strokeWidth="1.5" />
    <path d="M9 14l3.5 3.5 6.5-7" stroke="var(--color-dark-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="14" r="5" stroke="var(--color-dark-blue)" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>,
  <svg key="vat" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="7" width="20" height="14" rx="3" stroke="var(--color-fresh-lime)" strokeWidth="1.5" />
    <path d="M9 12h10M9 16h6" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="21" cy="7" r="4" fill="var(--color-fresh-lime)" />
    <path d="M19.5 7l1.2 1.2 2-2.4" stroke="white" strokeWidth="1" strokeLinecap="round" />
  </svg>,
  <svg key="france" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="6" width="20" height="16" rx="3" stroke="var(--color-scarlet)" strokeWidth="1.5" />
    <rect x="4" y="6" width="7" height="16" rx="3" fill="#002395" />
    <rect x="17" y="6" width="7" height="16" rx="3" fill="var(--color-scarlet)" />
    <rect x="11" y="6" width="6" height="16" fill="white" />
    <path d="M9 6v16M19 6v16" stroke="var(--color-transparent-d10)" strokeWidth="0.5" />
  </svg>,
]

export function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.feature-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="bg-bg-white py-[var(--spacing-80)]">
      <Container>
        <h2 className="text-center text-h3 font-medium font-poppins text-text-16 mb-[var(--spacing-12)] leading-[var(--text-h3--line-height)]">
          Built for e-commerce businesses.
        </h2>
        <p className="text-center text-h3 font-medium font-poppins text-text-13 mb-[var(--spacing-48)] leading-[var(--text-h3--line-height)]">
          Not for others.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-24)]">
          {featureCards.map((card, i) => (
            <Card
              key={i}
              shadow="xs"
              rounded="lg"
              className="feature-card p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-16)] border border-[var(--color-transparent-d5)] hover:shadow-m transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {icons[i]}
              </div>
              <h3 className="text-root font-semibold font-poppins text-text-16 leading-[var(--text-root--line-height)]">
                {card.title}
              </h3>
              <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)]">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
