"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import { ParticleNetwork } from "@/components/ui/particle-network"
import { SocialIcon } from "@/components/ui/social-icon"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { Button } from "@/components/ui/button"

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

      {/* Main content - optimized for immediate visibility */}
      <motion.div
        style={{ y: springY, opacity: springOpacity }}
        className="container relative z-10 mx-auto px-4 py-20"
      >
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

          {/* Condensed description with bullet points */}
          <div className="mb-8 max-w-2xl">
            <p className="fluid-text-xl font-light mb-3 text-muted-foreground">
              Transforming technology through:
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span className="text-foreground">Innovative AI research</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span className="text-foreground">Ethical system design</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span className="text-foreground">
                  Human-centered solutions
                </span>
              </li>
            </ul>
          </div>

          {/* Enhanced CTA Buttons with Tooltips and Micro-interactions */}
          <div className="flex flex-wrap gap-4 relative">
            <Button
              className="relative overflow-hidden"
              onClick={() => (window.location.href = "#contact")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <Button variant="outline" className="relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-[1px]" />
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-1">
            <div className="h-px w-12 bg-white/10"></div>
            <span className="px-4 text-sm text-muted-foreground">
              Social Presence
            </span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="mt-6 flex gap-4">
            <SocialIcon
              href="https://github.com/vikashpr"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialIcon
              href="https://linkedin.com/in/vikashpr"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://x.com/vikash_pr"
              icon={<Twitter className="h-5 w-5" />}
              label="Twitter"
            />
          </div>
        </div>
      </motion.div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollIndicator href="#about" label="Discover my journey" />
      </div>
    </section>
  );
}

