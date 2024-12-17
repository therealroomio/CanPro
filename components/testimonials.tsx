import { FadeInSection } from "@/components/fade-in-section"
import { TestimonialCard } from "@/components/testimonial-card"

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl">
              Hear from businesses that trust us with their security needs.
            </p>
          </div>
        </FadeInSection>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeInSection>
            <TestimonialCard
              name="John Smith"
              role="Operations Manager"
              company="Tech Corp"
              content="CanPro Security has transformed how we approach security. Their professional team and advanced technology give us complete peace of mind."
              image="/placeholder.svg?height=40&width=40"
            />
          </FadeInSection>
          <FadeInSection>
            <TestimonialCard
              name="Sarah Johnson"
              role="Facility Director"
              company="Metro Mall"
              content="The level of service and attention to detail from CanPro Security is outstanding. They've significantly improved our security protocols."
              image="/placeholder.svg?height=40&width=40"
            />
          </FadeInSection>
          <FadeInSection>
            <TestimonialCard
              name="Michael Chen"
              role="CEO"
              company="Innovation Hub"
              content="Working with CanPro Security has been a game-changer. Their team is responsive, professional, and always goes above and beyond."
              image="/placeholder.svg?height=40&width=40"
            />
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

