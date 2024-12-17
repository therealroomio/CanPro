import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C] bg-gradient-to-b from-black via-zinc-900 to-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-zinc-900/50 to-neutral-900/30" />
      <div className="container mx-auto relative px-4 md:px-6 text-center z-10 rounded-2xl">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-8">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto leading-[1.1]">
              Your Trusted Security Partner
            </h1>
            <p className="max-w-[800px] text-zinc-400 text-lg md:text-xl lg:text-2xl mx-auto font-light">
              CanPro Security delivers reliable, professional, and tailored security services across Ontario. We safeguard what matters most to you—your family, business, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-[#FFD700] text-black hover:bg-[#FFE55C] rounded-full px-8 font-medium"
              >
                Get a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent text-white border-white/20 hover:bg-white/20 hover:text-black rounded-full px-8"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

