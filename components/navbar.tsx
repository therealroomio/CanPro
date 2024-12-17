'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@/components/ui/dialog'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 w-full border-b bg-white"
		>
			<div className="container flex h-16 items-center px-4 mx-auto">
				<Link href="/" className="flex items-center space-x-2">
					<Shield className="h-8 w-8 text-black" />
					<span className="text-xl font-bold text-black">CanPro Security</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:flex-1 md:justify-center">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
										{[
											{
												title: 'On-Site Security',
												description:
													'Professional security officers to safeguard your property'
											},
											{
												title: 'Mobile & Foot Patrols',
												description:
													'Regular patrols to deter potential threats'
											},
											{
												title: 'Event Security',
												description: 'Expert crowd control and VIP protection'
											},
											{
												title: 'Threat & Risk Assessments',
												description:
													'Customized evaluations to identify and mitigate risks'
											}
										].map((service, index) => (
											<li key={index}>
												<NavigationMenuLink asChild>
													<Link
														href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
														className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
													>
														<div className="text-sm font-medium leading-none">
															{service.title}
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															{service.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/locations" legacyBehavior passHref>
									<NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
										Locations
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Contact and CTA */}
				<div className="hidden md:flex items-center space-x-4 ml-auto">
					<span className="text-sm font-medium text-black">
						📞 (647) 455-5622
					</span>
					<Button variant="default">Get a Quote</Button>
				</div>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild className="md:hidden ml-auto">
						<Button variant="outline" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<div className="grid gap-4 py-4">
							<DialogTitle className="sr-only">
								Mobile Navigation Menu
							</DialogTitle>
							<Link href="/services" className="text-lg font-semibold">
								Services
							</Link>
							<Link href="/locations" className="text-lg font-semibold">
								Locations
							</Link>
							<Link href="/about" className="text-lg font-semibold">
								About
							</Link>
							<Link href="/contact" className="text-lg font-semibold">
								Contact
							</Link>
							<div className="border-t pt-4">
								<span className="block text-sm font-medium mb-2">
									📞 (647) 455-5622
								</span>
								<Button className="w-full">Get a Quote</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</motion.header>
	)
}
