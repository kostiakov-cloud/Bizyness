'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'

const steps = [
  {
    number: '01',
    color: 'var(--color-dark-blue)',
    bgColor: 'var(--color-bg-4)',
    title: 'Connect',
    description: 'Shopify, PayPal, Amazon, Stripe… in a few clicks',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="var(--color-dark-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="var(--color-dark-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02',
    color: 'var(--color-emerald)',
    bgColor: 'var(--color-bg-3)',
    title: 'Synchronize',
    description: 'Your stores, payments and refunds',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M23 4v6h-6M1 20v-6h6" stroke="var(--color-emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke="var(--color-emerald)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    color: 'var(--color-ultramarine)',
    bgColor: 'var(--color-bg-4)',
    title: 'We process',
    description: 'VAT, declarations, FEC, exports… We do the work',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="var(--color-ultramarine)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--color-ultramarine)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    color: 'var(--color-fresh-lime)',
    bgColor: 'var(--color-bg-3)',
    title: "You're all set",
    description: 'Clear dashboards, ready to use at any time',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function FourSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.step-item', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        })
      }
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="bg-[var(--color-bg-1)] py-[var(--spacing-80)]">
      <Container>
        <h2 className="text-center text-h3 font-medium font-poppins text-text-16 mb-[var(--spacing-48)] leading-[var(--text-h3--line-height)]">
          A simple 4-step solution
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-[var(--color-transparent-d10)]"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-32)]">
            {steps.map((step, i) => (
              <div key={i} className="step-item flex flex-col items-center text-center gap-[var(--spacing-16)] relative">
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-circle flex items-center justify-center relative z-10"
                  style={{ backgroundColor: step.bgColor, border: `2px solid ${step.color}22` }}
                >
                  {step.icon}
                </div>
                {/* Step number */}
                <span className="text-tiny font-medium font-poppins" style={{ color: step.color }}>
                  Step {step.number}
                </span>
                <h3 className="text-root font-semibold font-poppins text-text-16 leading-[var(--text-root--line-height)]">
                  {step.title}
                </h3>
                <p className="text-small text-text-13 font-poppins leading-[var(--text-small--line-height)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
