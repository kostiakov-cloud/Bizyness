import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { IntegrationsStrip } from '@/components/sections/IntegrationsStrip'
import { PainPoints } from '@/components/sections/PainPoints'
import { Stats } from '@/components/sections/Stats'
import { RegulatorySection } from '@/components/sections/RegulatorySection'
import { AccountantSection } from '@/components/sections/AccountantSection'
import { SocialProof } from '@/components/sections/SocialProof'
import { Testimonials } from '@/components/sections/Testimonials'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FourSteps } from '@/components/sections/FourSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      {/* Card 1: Header + Hero — light-blue bg, 20px from viewport edges, rounded bottom */}
      <div
        className="mt-[20px] mx-[20px] rounded-b-[var(--radius-20)]"
        style={{ backgroundColor: 'var(--color-bg-4)' }}
      >
        <Header />
        <Hero />
      </div>

      {/* Card 2: IntegrationsStrip — self-contained white card with floating title pill */}
      <IntegrationsStrip />

      <PainPoints />
      <Stats />
      <RegulatorySection />
      <AccountantSection />
      <SocialProof />
      <Testimonials />
      <ComplianceBar />
      <FourSteps />
      <FeatureGrid />
      <CTASection />
    </>
  )
}
