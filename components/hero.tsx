"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import { ParticleNetwork } from "@/components/ui/particle-network"
import { VisionButton } from "@/components/ui/vision-button"
import { SocialIcon } from "@/components/ui/social-icon"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Simplified particle network with reduced density */}
      <ParticleNetwork
        density={0.00003}
        connectionDistance={150}
        particleColor="rgba(var(--primary-rgb), 0.4)"
        lineColor="rgba(var(--primary-rgb), 0.1)"
        interactive={false}
      />

      {/* Simplified geometric shapes */}
      <div
        className="geometric-shape geometric-circle bg-primary/10 h-64 w-64 backdrop-blur-sm absolute top-[15%] left-[10%]"
        style={{ opacity: 0.5 }}
      />

      <div
        className="geometric-shape geometric-hexagon bg-accent/10 h-80 w-80 backdrop-blur-sm absolute bottom-[10%] right-[5%]"
        style={{ opacity: 0.4 }}
      />

      <div
        className="geometric-shape geometric-square bg-primary/5 h-40 w-40 rotate-45 backdrop-blur-sm absolute top-[30%] right-[20%]"
        style={{ opacity: 0.3 }}
      />

      {/* Main content - optimized for immediate visibility */}
      <motion.div style={{ y: springY, opacity: springOpacity }} className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-secondary/30 px-4 py-1.5 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-muted-foreground">
              Pioneering at the intersection of technology and human potential
            </span>
          </div>

          <h1 className="mb-6 font-sans">
            <span className="mb-4 block fluid-text-lg font-light uppercase tracking-wider text-muted-foreground">
              Visionary Technologist
            </span>
            <span className="block fluid-text-6xl font-bold tracking-tight">
              <span className="relative inline-flex">
                VIKASH
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-primary/20" />
              </span>{" "}
              <span className="gradient-text">PR</span>
            </span>
          </h1>

          <p className="mb-8 max-w-2xl fluid-text-xl font-light leading-relaxed text-muted-foreground">
            Transforming how we interact with technology through{" "}
            <span className="text-foreground">innovative research</span>,{" "}
            <span className="text-foreground">ethical AI systems</span>, and{" "}
            <span className="text-foreground">human-centered design</span> that bridges the gap between scientific
            discovery and real-world impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <VisionButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
              href="#contact"
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Connect with me</span>
            </VisionButton>

            <VisionButton variant="secondary" size="lg" icon={<Download className="h-5 w-5" />} href="#">
              Download Portfolio
            </VisionButton>
          </div>

          <div className="mt-12 flex items-center gap-1">
            <div className="h-px w-12 bg-white/10"></div>
            <span className="px-4 text-sm text-muted-foreground">Social Presence</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="mt-6 flex gap-4">
            <SocialIcon href="https://github.com/vikashpr" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialIcon
              href="https://linkedin.com/in/vikashpr"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialIcon href="https://twitter.com/vikashpr" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
          </div>
        </div>
      </motion.div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollIndicator href="#about" label="Discover my journey" />
      </div>
    </section>
  )
}

