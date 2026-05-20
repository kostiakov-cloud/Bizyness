'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/layout/Container'
import { TrustpilotStars } from '@/components/ui/TrustpilotStars'

const brandLogos = [
  { name: 'Aubade', style: 'font-serif font-bold text-h6 tracking-wider text-text-16' },
  { name: 'Mariage.com', style: 'font-serif italic text-h6 text-text-14' },
  { name: 'SÉZANE', style: 'font-sans font-bold text-h6 tracking-[0.2em] text-text-16' },
  { name: 'NATURE & Découvertes', style: 'font-sans font-bold text-small tracking-widest text-text-14 uppercase' },
  { name: 'PANDOMOTO', style: 'font-sans font-black text-h6 tracking-tight text-text-16' },
  { name: 'MOUSTACHE', style: 'font-serif font-bold text-h6 italic text-text-14' },
]

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.brand-logo', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
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
          +150 e-commerce businesses trust us
        </h2>

        <div className="flex items-center justify-center gap-[var(--spacing-48)] flex-wrap mb-[var(--spacing-32)]">
          {brandLogos.map((b) => (
            <span key={b.name} className={`brand-logo font-poppins ${b.style} opacity-60 hover:opacity-100 transition-opacity cursor-default`}>
              {b.name}
            </span>
          ))}
        </div>

        <TrustpilotStars className="justify-center" />
      </Container>
    </section>
  )
}
