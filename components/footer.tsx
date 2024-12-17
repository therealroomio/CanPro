import { Shield } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#4461F2]" />
              <span className="text-lg font-bold">CanPro Security</span>
            </Link>
            <p className="text-sm text-gray-500">
              Professional security services protecting what matters most.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/services/physical">Physical Security</Link>
              </li>
              <li>
                <Link href="/services/electronic">Electronic Security</Link>
              </li>
              <li>
                <Link href="/services/consulting">Security Consulting</Link>
              </li>
              <li>
                <Link href="/services/monitoring">24/7 Monitoring</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/compliance">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2024 CanPro Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
