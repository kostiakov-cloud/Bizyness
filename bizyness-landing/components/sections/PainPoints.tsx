'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { painPoints } from '@/content/home'

const icons = [
  /* Sales everywhere */
  <svg key="sales" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="var(--color-peach-red)" opacity="0.15" />
    <path d="M7 14h14M14 7v14M10 10l8 8M18 10l-8 8" stroke="var(--color-peach-red)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* VAT return */
  <svg key="vat" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="var(--color-fresh-lime)" opacity="0.15" />
    <rect x="8" y="7" width="12" height="14" rx="2" stroke="var(--color-fresh-lime)" strokeWidth="1.5" />
    <path d="M11 12h6M11 15h4" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  /* Invoices */
  <svg key="invoices" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="8" fill="var(--color-ultramarine)" opacity="0.15" />
    <path d="M9 7h10a1 1 0 011 1v12l-3-2-3 2-3-2-3 2V8a1 1 0 011-1z" stroke="var(--color-ultramarine)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12h4M12 15h2" stroke="var(--color-ultramarine)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
]

export function PainPoints() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.pain-card', {
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
        <h2 className="text-center text-h5 font-medium font-poppins text-text-16 mb-[var(--spacing-48)] leading-[var(--text-h5--line-height)]">
          Stop losing time on accounting and VAT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-24)]">
          {painPoints.map((point, i) => (
            <Card
              key={i}
              shadow="xs"
              rounded="lg"
              className="pain-card p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-16)] border border-[var(--color-transparent-d5)] hover:shadow-m transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {icons[i]}
              </div>
              <h3 className="text-root font-semibold font-poppins text-text-16 leading-[var(--text-root--line-height)]">
                {point.title}
              </h3>
              <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)]">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
