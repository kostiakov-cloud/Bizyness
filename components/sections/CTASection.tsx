'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { ctaBullets } from '@/content/home'

function AppMockup() {
  return (
    <div className="relative w-full max-w-[280px] ml-auto">
      <div className="bg-bg-white rounded-[var(--radius-16)] p-[var(--spacing-16)] flex flex-col gap-[var(--spacing-12)]" style={{ boxShadow: 'var(--shadow-m)' }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[var(--spacing-8)]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="4" fill="#F8B836" />
              <path d="M12 3L7 11h4.5L8 17l7-9h-4.5L12 3z" fill="white" />
            </svg>
            <span className="text-tiny font-semibold font-poppins text-text-16" style={{ fontSize: '10px' }}>bizyness.</span>
          </div>
        </div>

        {/* Invoice card */}
        <div className="bg-[var(--color-bg-4)] rounded-[var(--radius-8)] p-[var(--spacing-12)]">
          <p className="text-tiny text-text-13 font-poppins" style={{ fontSize: '9px' }}>Generated invoice</p>
          <p className="text-tiny font-medium font-poppins text-text-16 mt-[var(--spacing-4)]" style={{ fontSize: '9px' }}>FAC-2026-046</p>
          <div className="flex items-center justify-between mt-[var(--spacing-8)]">
            <div className="flex items-center gap-[var(--spacing-4)]">
              {['#Shopify', '#Stripe', '#PayPal'].map((b) => (
                <span key={b} className="text-tiny font-poppins bg-[var(--color-bg-white)] rounded px-1" style={{ fontSize: '7px', color: 'var(--color-text-13)' }}>{b}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-[var(--spacing-8)]">
            <span className="text-h5 font-bold font-poppins text-text-16" style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>€149.00</span>
            <span
              className="text-tiny font-medium font-poppins px-2 py-0.5 rounded"
              style={{ fontSize: '9px', backgroundColor: 'color-mix(in srgb, var(--color-fresh-lime) 15%, white)', color: 'var(--color-fresh-lime)' }}
            >
              Paid
            </span>
          </div>
        </div>

        {/* Platform logos */}
        <div className="flex items-center gap-[var(--spacing-4)]">
          {[
            { color: '#95BF47', label: 'S' },
            { color: '#6772E5', label: 'S' },
            { color: '#009CDE', label: 'P' },
            { color: '#FF9900', label: 'a' },
          ].map((p, i) => (
            <div key={i} className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: p.color }}>
              <span className="text-white font-bold" style={{ fontSize: '8px' }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')

  useGSAP(
    () => {
      gsap.from('.cta-left', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.cta-center', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        delay: 0.1,
      })
      gsap.from('.cta-right', {
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        delay: 0.2,
      })
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="bg-[var(--color-bg-4)] py-[var(--spacing-80)] border-y border-[var(--color-transparent-d5)]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-[var(--spacing-48)]">
          {/* Left — checklist */}
          <div className="cta-left flex-1 flex flex-col gap-[var(--spacing-20)]">
            <h2 className="text-h3 font-medium font-poppins text-text-16 leading-[var(--text-h3--line-height)]">
              Ready to stop losing time on your accounting &amp; VAT?
            </h2>
            <div className="flex flex-col gap-[var(--spacing-12)]">
              {ctaBullets.map((b, i) => (
                <div key={i} className="flex items-center gap-[var(--spacing-12)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="var(--color-fresh-lime)" opacity="0.2" />
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="var(--color-fresh-lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-small text-text-14 font-poppins">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center — email + CTA */}
          <div className="cta-center flex-1 flex flex-col gap-[var(--spacing-16)] items-center max-w-[400px]">
            <input
              type="email"
              placeholder="Your professional email…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[var(--spacing-20)] py-[var(--spacing-16)] rounded-[var(--radius-circle)] border border-[var(--color-transparent-d10)] text-small font-poppins text-text-16 bg-bg-white focus:outline-none focus:ring-2 focus:ring-dark-blue transition-shadow"
              style={{ boxShadow: 'var(--shadow-xs)' }}
            />
            <Button size="lg" className="w-full justify-center text-small gap-[var(--spacing-8)]">
              Start free trial 14 days
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <button className="text-small text-text-13 font-poppins hover:text-dark-blue transition-colors">
              Book a personalized demo
            </button>
          </div>

          {/* Right — app mockup */}
          <div className="cta-right flex-1 w-full flex justify-center lg:justify-end">
            <AppMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
