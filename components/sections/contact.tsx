"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Mail, MapPin, Calendar, Lightbulb, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { VisionContactForm } from "@/components/ui/vision-contact-form"
import { Reveal } from "@/components/ui/reveal"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <SectionTitle
          tag="Contact"
          title="Get in Touch"
          subtitle="Have a question, proposal, or just want to connect? Feel free to reach out using the form below or through my social media channels."
          align="center"
        />

        {/* Section heading with decorative line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary/50"></div>
          <h3 className="text-2xl font-bold">Let's Connect</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 w-full">
          {/* Contact Info Card */}
          <Reveal>
            <div className="h-full mac-window">
              <div className="mac-window-header">
                <div className="mac-window-controls">
                  <div className="mac-window-control mac-window-close"></div>
                  <div className="mac-window-control mac-window-minimize"></div>
                  <div className="mac-window-control mac-window-maximize"></div>
                </div>
                <div className="ml-4 text-xs text-muted-foreground">contact-info.app</div>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact info grid */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Link
                          href="mailto:contact@vikashpr.com"
                          className="transition-colors duration-300 hover:text-primary"
                        >
                          contact@vikashpr.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground mt-1">San Francisco, California</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Schedule a Meeting</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Link href="#" className="transition-colors duration-300 hover:text-primary">
                          Book a time on my calendar
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card/50">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Seek Mentorship</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Link href="#" className="transition-colors duration-300 hover:text-primary">
                          Apply for mentorship program
                        </Link>
                        <span className="block text-xs text-primary/80 mt-1">
                          2 mentees every 6 Fall and Spring
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <h3 className="mb-4 font-medium">Connect on Social Media</h3>
                  <div className="flex justify-around">
                    <Link
                      href="https://github.com/vikashpr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card/50 group-hover:bg-primary/20 transition-colors duration-300">
                        <Github className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        GitHub
                      </span>
                    </Link>

                    <Link
                      href="https://linkedin.com/in/vikashpr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card/50 group-hover:bg-primary/20 transition-colors duration-300">
                        <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        LinkedIn
                      </span>
                    </Link>

                    <Link
                      href="https://twitter.com/vikashpr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card/50 group-hover:bg-primary/20 transition-colors duration-300">
                        <Twitter className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        Twitter
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.2}>
            <div className="mac-window h-full">
              <div className="mac-window-header">
                <div className="mac-window-controls">
                  <div className="mac-window-control mac-window-close"></div>
                  <div className="mac-window-control mac-window-minimize"></div>
                  <div className="mac-window-control mac-window-maximize"></div>
                </div>
                <div className="ml-4 text-xs text-muted-foreground">message.app</div>
              </div>

              <div className="p-6">
                <VisionContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

