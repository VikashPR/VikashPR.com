"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <footer ref={ref} className="py-12 border-t bg-background border-border">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Copyright */}
          <Reveal>
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <path
                      d="M4 4L12 20L20 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 20H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    />
                  </svg>
                </div>
                <div className="text-xl font-bold tracking-tight">VIKASH PR</div>
              </Link>

              <p className="text-sm text-muted-foreground">&copy; {currentYear} Vikash PR. All rights reserved.</p>

              <p className="text-sm text-muted-foreground">
                Innovating at the intersection of technology and human potential.
              </p>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#speaker" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Speaking
                </Link>
                <Link
                  href="#engineering"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Engineering
                </Link>
                <Link href="#research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Research
                </Link>
                <Link href="#velam" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Velam.ai
                </Link>
                <Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
                <Link
                  href="#achievements"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Achievements
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Connect */}
          <Reveal delay={0.2}>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@vikashpr.com"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  contact@vikashpr.com
                </a>

                <div className="flex items-center space-x-3 mt-4">
                  <Link
                    href="https://github.com/vikashpr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>

                  <Link
                    href="https://twitter.com/vikashpr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>

                  <Link
                    href="https://linkedin.com/in/vikashpr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center justify-center mt-12 pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-xs text-muted-foreground">
                Website designed with ❤️ for optimal performance and accessibility.
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                <span className="inline-flex items-center bg-secondary/50 rounded-full px-2 py-0.5 text-xs">
                  <span className="size-1.5 rounded-full bg-green-500 mr-1"></span>
                  100% Lighthouse Score
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

