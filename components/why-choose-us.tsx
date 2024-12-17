import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function WhyChooseUs() {
  return (
    <section className="bg-[#f2f1e9] text-black py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <h2 className="text-3xl font-light tracking-tight text-center sm:text-4xl md:text-5xl mb-12">
            Why Choose CanPro Security?
          </h2>
        </FadeInSection>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {[
            { title: "Experience You Can Trust", description: "Our team of skilled professionals brings years of experience to deliver tailored solutions that align with your safety goals." },
            { title: "Proven Track Record", description: "Our dedication to client satisfaction has made us a trusted name across the Greater Toronto Area and beyond." },
            { title: "Proactive Protection", description: "We focus on prevention, using state-of-the-art technologies and strategies to minimize risks before they escalate." },
            { title: "Custom-Tailored Plans", description: "We understand that every client's security needs are different. That's why we create personalized strategies to ensure maximum protection." },
          ].map((reason, index) => (
            <FadeInSection key={index}>
              <Card className="glass-card bg-zinc-50/50 border-zinc-200/50 shadow-slate-100 shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-light">
                    <CheckCircle className="h-6 w-6 text-[#FFD700]" />
                    <span>{reason.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 font-light">{reason.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

