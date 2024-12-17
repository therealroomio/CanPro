import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Bell, Lock } from 'lucide-react'

export function CoreServices() {
  return (
    <section className="bg-white text-black py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Security Solutions
            </h2>
            <p className="mt-4 text-zinc-600 md:text-xl font-light">
              From on-site security to specialized services, we provide end-to-end protection tailored to your needs.
            </p>
          </div>
        </FadeInSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "On-Site Security", description: "Professional security officers to safeguard your property and enforce safety protocols.", icon: <Shield className="h-12 w-12" /> },
            { title: "Event Security", description: "Expert crowd control and VIP protection for seamless event management.", icon: <Users className="h-12 w-12" /> },
            { title: "Alarm Response", description: "Rapid deployment of officers to investigate and address alarm triggers.", icon: <Bell className="h-12 w-12" /> },
            { title: "Access Control", description: "Enhanced monitoring to restrict unauthorized entry and maintain secure premises.", icon: <Lock className="h-12 w-12" /> },
          ].map((service, index) => (
            <FadeInSection key={index}>
              <Card className="glass-card bg-white/50 backdrop-blur-sm border-zinc-200/50 shadow-2xl">
                <CardHeader>
                  <div className="mx-auto text-black/80">{service.icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-2 font-light">{service.title}</CardTitle>
                  <p className="text-zinc-600 font-light">{service.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

