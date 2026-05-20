'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'

/* ─── Brand logos ─────────────────────────────────────────────── */

function ShopifyLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#95BF47" />
      <path d="M27.2 11.5c-.1-.5-.5-.8-1-.8h-.3c-.1-.9-.7-3.6-2.5-3.6h-.2c-.4-.5-.8-.7-1.3-.7-3.1 0-4.6 3.9-5 5.9l-2.7.8c-.8.2-1.3.7-1.3 1.5v12.6c0 1 .8 1.8 1.8 1.8h11.1c1 0 1.8-.8 1.8-1.8l1.1-15.2c.1-.2 0-.4-.5-.5zm-5.1-3.6c.5 0 .9.2 1.2.5-.7.1-1.5.2-2.3.4.3-1.3.7-2 1.1-2v1.1zm-1.1.5v-1.1c.4 0 .7.2 1 .6-.3.2-.7.4-1 .5zm.7 3.3c.2-1.4.5-2.6.9-3.5.8-.3 1.7-.5 2.5-.6.2.5.3 1.2.4 2l-3.8 2.1zm5.3 14.2H15.9V14.8l2.4-.7v.1c0 .5.4.9.9.9s.9-.4.9-.9v-.5l2.6-.7v.3c0 .5.4.9.9.9s.9-.4.9-.9v-.5l3.5-1v.5c0 .5.4.9.9.9s.9-.4.9-.9v-.5l.3-.1-.9 14.9z" fill="white" />
      <path d="M22.5 20.5c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zm-2.5 0c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zm5 0c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9z" fill="white" />
    </svg>
  )
}

function StripeLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#6772E5" />
      <path d="M20 14c-3.3 0-5.5 1.4-5.5 3.7 0 4.3 6 3.3 6 5.1 0 .8-.7 1.2-1.8 1.2-1.6 0-3.2-.5-4.4-1.4v3.5c1.2.6 2.7 1 4.4 1 3.4 0 5.7-1.4 5.7-3.8 0-4.5-6-3.4-6-5.1 0-.7.6-1.1 1.7-1.1 1.3 0 2.8.4 3.9 1.1v-3.4C23 14.4 21.6 14 20 14z" fill="white" />
    </svg>
  )
}

function PayPalLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#0070BA" />
      <path d="M15.5 28h-2.7l.7-4.2h2.4c2.2 0 3.4-1 3.4-2.8 0-1.4-.9-2.2-2.5-2.2h-4.1L10 28h2.7l.7-4.2h2.4c.7 0 1.1.3 1.1.9 0 .8-.5 1.1-1.4 1.1zm2.5-4.2l.7-4.2H21c1.6 0 2.3.7 2.3 1.9 0 1.5-.9 2.3-2.5 2.3h-2.8zM21.1 28l2.5-14.2h2.7L23.8 28h-2.7z" fill="white" />
    </svg>
  )
}

function AmazonLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#232F3E" />
      <text x="8" y="24" fontSize="13" fill="white" fontWeight="500" fontFamily="Arial, sans-serif">amazon</text>
      <path d="M12 27c3.5 2 8.5 2.5 13 .5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 25.5l1.5 1.5 1-2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WooCommerceLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#7F54B3" />
      <path d="M8 15h24v10H8z" fill="white" fillOpacity="0.15" rx="3" />
      <text x="6" y="22" fontSize="8" fill="white" fontWeight="700" fontFamily="Arial, sans-serif">WooCommerce</text>
    </svg>
  )
}

function OtherLogo() {
  return (
    <div
      className="w-[40px] h-[40px] rounded-[8px] border-2 border-dashed flex items-center justify-center"
      style={{ borderColor: 'var(--color-transparent-d10)' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 8h10" stroke="var(--color-text-13)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

const integrations = [
  { name: 'Shopify', logo: <ShopifyLogo /> },
  { name: 'Stripe', logo: <StripeLogo /> },
  { name: 'PayPal', logo: <PayPalLogo /> },
  { name: 'Amazon', logo: <AmazonLogo /> },
  { name: 'WooCommerce', logo: <WooCommerceLogo /> },
  { name: 'Other integrations', logo: <OtherLogo /> },
]

const checkPanels = [
  'Orders, payments, refunds',
  'Automatic reconciliations',
  'Fees, commissions, taxes incl.',
  'Multi-store & marketplaces',
]

export function IntegrationsStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.integration-item', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    },
    { scope: ref }
  )

  return (
    /* Outer wrapper: 20px from viewport edges */
    <div ref={ref} className="relative mx-[20px]">
      {/* Floating title pill — sits on the border between hero card and this card */}
      <div className="absolute -top-[18px] left-0 right-0 flex justify-center z-10">
        <span
          className="inline-flex items-center px-[var(--spacing-20)] py-[var(--spacing-8)] rounded-circle border font-medium font-poppins text-text-14"
          style={{
            backgroundColor: 'var(--color-bg-white)',
            borderColor: 'var(--color-transparent-d10)',
            boxShadow: 'var(--shadow-xs)',
            fontSize: 'var(--text-small)',
          }}
        >
          E-commerce &amp; payment integrations
        </span>
      </div>

      {/* White card with L/R/B border, rounded bottom */}
      <div
        className="rounded-b-[var(--radius-20)] pt-[var(--spacing-48)] pb-[var(--spacing-48)]"
        style={{
          backgroundColor: 'var(--color-bg-white)',
          borderLeft: '1px solid var(--color-transparent-d10)',
          borderRight: '1px solid var(--color-transparent-d10)',
          borderBottom: '1px solid var(--color-transparent-d10)',
        }}
      >
        <Container>
          {/* Logo row */}
          <div className="flex items-start justify-center gap-[var(--spacing-40)] flex-wrap mb-[var(--spacing-40)]">
            {integrations.map((p) => (
              <div key={p.name} className="integration-item flex flex-col items-center gap-[var(--spacing-8)]">
                {p.logo}
                <span className="text-small font-medium font-poppins text-text-14">{p.name}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px mb-[var(--spacing-32)]" style={{ backgroundColor: 'var(--color-transparent-d5)' }} />

          {/* 4 check panels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-16)]">
            {checkPanels.map((text) => (
              <div
                key={text}
                className="flex items-start gap-[var(--spacing-8)] px-[var(--spacing-16)] py-[var(--spacing-12)] rounded-[var(--radius-8)] border"
                style={{
                  borderColor: 'var(--color-transparent-d5)',
                  backgroundColor: 'var(--color-bg-near-white)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[1px]">
                  <circle cx="8" cy="8" r="7" stroke="var(--color-fresh-lime)" strokeWidth="1.3" />
                  <path d="M5 8l2.2 2.2 3.8-4.4" stroke="var(--color-fresh-lime)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-small font-poppins text-text-14 leading-[var(--text-small--line-height)]">{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
