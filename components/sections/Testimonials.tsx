'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { testimonials } from '@/content/home'

function QuoteMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
      <path
        d="M0 22V13.2C0 5.6 4.4 1.6 13.2 0l1.8 2.8C10.6 3.8 8 6 7.6 9.4H12V22H0zm16 0V13.2C16 5.6 20.4 1.6 29.2 0L31 2.8c-4.4 1-7 3.2-7.4 6.6H28V22H16z"
        fill="var(--color-dark-blue)"
        opacity="0.15"
      />
    </svg>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.testimonial-card', {
        y: 50,
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
        <h2 className="text-center text-h3 font-medium font-poppins text-text-16 mb-[var(--spacing-48)] leading-[var(--text-h3--line-height)]">
          Témoignages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-24)]">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              shadow="xs"
              rounded="lg"
              className="testimonial-card p-[var(--spacing-32)] flex flex-col gap-[var(--spacing-24)] border border-[var(--color-transparent-d5)] hover:shadow-m transition-shadow duration-300"
            >
              {/* Company name */}
              <p className="text-h6 font-bold font-poppins text-text-16 leading-none">
                {t.company}
              </p>

              {/* Quote */}
              <div className="flex gap-[var(--spacing-12)]">
                <div className="shrink-0 mt-1">
                  <QuoteMark />
                </div>
                <p className="text-small text-text-14 font-poppins leading-[var(--text-small--line-height)] flex-1">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-[var(--spacing-12)] mt-auto">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-circle bg-[var(--color-bg-4)] flex items-center justify-center shrink-0"
                  style={{ fontSize: '18px' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-small font-semibold font-poppins text-text-16">{t.name}</p>
                  <p className="text-tiny text-text-13 font-poppins">{t.role}</p>
                  <p className="text-tiny text-text-13 font-poppins">{t.revenue}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
