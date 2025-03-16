"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cpu, Database, Lock, Zap } from "lucide-react"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { motion } from "framer-motion"

// Condensed company features with iconic representations
const features = [
  {
    icon: <Brain className="w-10 h-10 text-purple-400" />,
    title: "Advanced AI Models",
    description: "State-of-the-art neural networks for superior performance",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-400" />,
    title: "Real-time Processing",
    description: "Minimal latency for time-critical applications",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: <Lock className="w-10 h-10 text-green-400" />,
    title: "Privacy-Preserving",
    description: "Built-in protection for sensitive data compliance",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
    title: "Edge Deployment",
    description: "AI models on edge devices for offline processing",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: <Database className="w-10 h-10 text-rose-400" />,
    title: "Scalable Infrastructure",
    description: "Cloud-native architecture for seamless scaling",
    color: "from-rose-500/20 to-rose-500/5",
  },
]

export default function Velam() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="velam" ref={ref} className="py-24 bg-background relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[70%] bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <SectionTitle
          tag="Founder"
          title="Velam.ai"
          subtitle="Transforming how enterprises leverage artificial intelligence through innovative, scalable, and ethical AI solutions."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Company Introduction - Condensed */}
          <div className="space-y-8">
            <Reveal>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image src="/placeholder.svg?height=400&width=600" alt="Velam.ai" fill className="object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-primary/20 backdrop-blur-sm">
                    <span className="text-sm font-medium text-primary">Founded 2022</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-muted-foreground">
                  At Velam.ai, we're democratizing access to advanced AI technologies, making them accessible, ethical,
                  and impactful for businesses of all sizes. We believe AI should augment human capabilities, not
                  replace them, creating a future where technology and humanity evolve together.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden inline-block"
                >
                  <Link
                    href="https://velam.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium relative z-10 group"
                  >
                    <span>Visit Velam.ai</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* Key Features - Visual representation with icons */}
          <div className="space-y-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-primary/50"></div>
                <h3 className="text-2xl font-bold">Key Features</h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-4 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div
                      className={`absolute inset-0 opacity-20 bg-gradient-to-br ${feature.color} -z-10 rounded-xl`}
                    />
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <h4 className="text-base font-medium mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Vision and Call to Action - Condensed */}
        <Reveal delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-white/10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  We envision a world where AI enhances human potential, solves complex challenges, and creates new
                  opportunities for innovation and growth through responsible development that prioritizes transparency,
                  fairness, and human values.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-bold">Join Our Journey</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We're looking for talented individuals who share our passion for AI and commitment to making a
                  positive impact. Join us in shaping the future of artificial intelligence.
                </p>
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

