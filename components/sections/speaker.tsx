"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, Mic, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { Badge } from "@/components/ui/badge"
import { NewsletterSubscription } from "@/components/ui/newsletter-subscription"

// Reduced to 3 featured speaking events
const speakingEvents = [
  {
    id: 1,
    date: "October 2023",
    title: "TechCrunch Disrupt",
    description: "Keynote on 'The Future of Ethical AI in Enterprise Applications'",
    location: "San Francisco, CA",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    date: "November 2023",
    title: "Web Summit",
    description: "Panel discussion on 'Bridging Research and Industry in AI Development'",
    location: "Lisbon, Portugal",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    date: "March 2023",
    title: "AI Conference",
    description: "Workshop on 'Practical Approaches to Explainable AI'",
    location: "London, UK",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

// Reduced to 2 impactful testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Vikash's talk on AI ethics was both thought-provoking and accessible. He has a rare ability to explain complex concepts in a way that resonates with diverse audiences.",
    author: "Dr. Sarah Johnson",
    role: "AI Ethics Professor",
    event: "TechCrunch Disrupt",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "One of the most engaging speakers I've seen. Vikash combines deep technical knowledge with compelling storytelling that keeps the audience captivated.",
    author: "Michael Chen",
    role: "Conference Director",
    event: "Web Summit",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

// Speaking topics with condensed descriptions
const speakingTopics = [
  {
    id: 1,
    title: "The Future of AI",
    description: "Emerging trends and how they'll reshape industries and society",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Ethical Technology",
    description: "Framework for responsible innovation balancing progress with human values",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Research to Industry",
    description: "Translating theoretical advances into practical, valuable solutions",
    icon: <ArrowRight className="h-5 w-5" />,
  },
]

export default function Speaker() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const isImageVisible = useInView(imageRef, { once: true, amount: 0.5 })
  const isTestimonialVisible = useInView(testimonialRef, { amount: 0.5 })

  // Auto-rotate testimonials when they are in view
  useEffect(() => {
    if (!isTestimonialVisible) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isTestimonialVisible])

  return (
    <section
      id="speaker"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl opacity-30" />

      <div className="container px-4 mx-auto">
        <SectionTitle
          tag="Speaking"
          title="Communicating Complex Ideas with Clarity and Impact"
          subtitle="I speak at conferences and events worldwide on topics including artificial intelligence, machine learning, ethics, and the future of technology."
        />

        {/* Hero Section with Image and CTA */}
        <div className="grid gap-8 md:grid-cols-2 mb-16 items-center">
          {/* Left Column - Image with Overlay */}
          <Reveal>
            <div
              ref={imageRef}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
              <Image
                src="/speak-img.webp?height=800&width=600"
                alt="Vikash PR speaking at a conference"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-none">
                  Featured Speaker
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Tech Inauguration Speech 2024
                </h3>
                <p className="text-white/80">
                  "The youth of today are the leaders of tomorrow." - Nelson
                  Mandela{" "}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Content and CTAs */}
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-bold">Speaker Profile</h3>
                </div>
                <p className="text-muted-foreground">
                  As a thought leader in AI and technology ethics, I deliver
                  engaging talks that bridge complex technical concepts with
                  practical applications, combining rigorous research with
                  compelling storytelling.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Mic className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">25+</div>
                      <div className="text-xs text-muted-foreground">
                        Speaking Engagements
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">10,000+</div>
                      <div className="text-xs text-muted-foreground">
                        Audience Reached
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Signature Topics</h4>
                <div className="space-y-3">
                  {speakingTopics.map((topic, index) => (
                    <div
                      key={topic.id}
                      className="flex items-start gap-3 p-3 rounded-lg border border-white/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-full bg-primary/10 shrink-0">
                        {topic.icon}
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">{topic.title}</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Seek Mentorship</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Invite for an Event</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-primary/50"></div>
              <h3 className="text-2xl font-bold">Newsletter</h3>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <NewsletterSubscription />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

