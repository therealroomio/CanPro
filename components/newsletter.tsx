import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="border-t py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Stay Informed on Security Trends
            </h2>
            <p className="max-w-[600px] text-gray-500">
              Subscribe to our newsletter for the latest security insights and updates.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

