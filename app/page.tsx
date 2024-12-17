import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { CoreServices } from "@/components/core-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Locations } from "@/components/locations"
import { SafetyGraph } from "@/components/safety-graph"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <CoreServices />
      <Locations />
      <WhyChooseUs />
      <SafetyGraph />
      <CTA />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

