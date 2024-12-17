import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ShieldIcon, Flame, Users2, ShoppingBag, Building2, HardHat, BellIcon, Truck, BadgeIcon, Syringe, LockIcon } from 'lucide-react'
import styles from '@/styles/services-grid.module.css'

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-32 overflow-hidden bg-[#1C1C1C] bg-gradient-to-b from-zinc-900 to-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <h2 className="text-3xl font-light tracking-tight text-center sm:text-4xl md:text-5xl mb-12 text-white">
            Our Comprehensive Security Services
          </h2>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.servicesGrid}>
            {[
              { title: "Threat & Risk Assessment", description: "We evaluate the threat to client's life & property and offer threat elimination techniques at very discounted rates. We offer quote for this service free of charge.", icon: <AlertTriangle className="h-6 w-6" /> },
              { title: "On-Site Security", description: "We provide Temporary & Permanent Security Officers for your site to keep unwanted individuals and vehicles off from your property and prevent any kind of damage to life & property.", icon: <ShieldIcon className="h-6 w-6" /> },
              { title: "Life & Fire Protection", description: "Fire or Theft Alarm panel not installed yet? Or alarm not working? We can help patrol your site till the alarm is repaired or installed at a minimal cost.", icon: <Flame className="h-6 w-6" /> },
              { title: "Private Event Security", description: "Have an Event with large crowd or Important celebrities? Our Officers provide a very secured environment controlling the crowd and preventing any kind of dispute that can harm/disrupt the event.", icon: <Users2 className="h-6 w-6" /> },
              { title: "Loss Prev Contractor's Watch", description: "Want to get rid of Shop lifters? We provide Loss prevention service with trained security guards to prevent shop lifting. We also provide day & overnight security for contractor's watch.", icon: <ShoppingBag className="h-6 w-6" /> },
              { title: "Facility Management", description: "We provide trained and reliable security guards to take good care of operations and enforce site specific rules at your facility.", icon: <Building2 className="h-6 w-6" /> },
              { title: "Road Flagging", description: "Have some construction going on? We provide Road flagging service which operates the traffic carefully amid on going construction/repair.", icon: <HardHat className="h-6 w-6" /> },
              { title: "Alarms", description: "We investigate to every kind of alarm that goes on at client's site very quickly. Our experienced security officers will respond and disarm the alarm and report any kind of burglary on site.", icon: <BellIcon className="h-6 w-6" /> },
              { title: "Mobile & Foot Patrols", description: "Need a regular check on your property or building? We provide tailored mobile as well foot patrols to keep your site safe and secure.", icon: <Truck className="h-6 w-6" /> },
              { title: "Police Support Services", description: "We provide aid to police departments in events, special arrangements and crowd management.", icon: <BadgeIcon className="h-6 w-6" /> },
              { title: "Covid-19 Vaccination Check", description: "Do you want to keep your staff infection free? We provide officers who will enforce all covid-19 prevention rules and vaccination checks according to Government protocols.", icon: <Syringe className="h-6 w-6" /> },
              { title: "Access Control", description: "We provide Security guards who controls Access to count and type of customers or general public coming in at your site.", icon: <LockIcon className="h-6 w-6" /> },
            ].map((service, index) => (
              <Card key={index} className="glass-card text-white border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-light">
                    {service.icon}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

