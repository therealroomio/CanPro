import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-[#1C1C1C] py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInSection>
            <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to Secure Your Future?
              </h2>
              <p className="max-w-[600px] text-zinc-400 md:text-xl font-light">
                Contact CanPro Security today for a free consultation and learn how we can safeguard your assets and give you peace of mind.
              </p>
              <div className="space-y-2 text-zinc-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>(647) 455-5622</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>admin@canprosecurity.ca</span>
                </div>
              </div>
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFE55C] w-fit rounded-full">
                Get a Free Consultation
              </Button>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/10 via-transparent to-transparent rounded-xl" />
              <img
                alt="CanPro Security professional in action"
                className="rounded-xl"
                src="/placeholder.svg?height=300&width=500"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

