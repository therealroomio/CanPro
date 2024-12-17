'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function BenefitsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="24-7-monitoring">
        <AccordionTrigger>24/7 Monitoring</AccordionTrigger>
        <AccordionContent>
          Round-the-clock surveillance and security monitoring to ensure your property is protected at all times. Our advanced monitoring center is staffed by trained professionals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="rapid-response">
        <AccordionTrigger>Rapid Response</AccordionTrigger>
        <AccordionContent>
          Quick response times to any security incidents with our dedicated team of security professionals ready to act at a moment's notice.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-tech">
        <AccordionTrigger>Advanced Technology</AccordionTrigger>
        <AccordionContent>
          State-of-the-art security systems including AI-powered surveillance, biometric access control, and integrated security management platforms.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

