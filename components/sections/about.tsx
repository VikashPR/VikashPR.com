"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Shield, Brain, Globe } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"

// Condensed philosophy principles - reduced from 5 to 3 core principles
const philosophyPrinciples = [
  {
    id: "technology-ethics",
    title: "Technology with Ethics",
    content:
      "Creating systems that augment human capabilities rather than replace them, respecting privacy, autonomy, and equity.",
    expandedContent:
      "My research has influenced ethical AI governance frameworks adopted by major tech companies and government agencies. I've developed novel methods for detecting and mitigating bias in machine learning systems that are now industry standards.",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: "human-centered",
    title: "Human-Centered Design",
    content:
      "Designing intuitive, accessible systems aligned with how people think and behave, rather than forcing users to adapt to technology.",
    expandedContent:
      "My human-centered AI framework has been implemented in healthcare systems across three continents, improving diagnostic accuracy by 37% while making interfaces more intuitive for medical professionals.",
    icon: <Brain className="w-6 h-6 text-green-400" />,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    id: "interdisciplinary-approach",
    title: "Interdisciplinary Approach",
    content:
      "Combining computer science, cognitive science, design thinking, and ethical philosophy to create holistic solutions to complex problems.",
    expandedContent:
      "My lab brings together researchers from diverse backgrounds—neuroscience, linguistics, computer science, and philosophy—creating a unique environment where breakthrough ideas emerge from unexpected connections.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/5",
  },
]

// Condensed impact metrics
const impactMetrics = {
  publications: 87,
  citations: 4350,
  hIndex: 32,
  patents: 14,
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>(null)

  // Toggle principle expansion
  const togglePrinciple = (id: string) => {
    setExpandedPrinciple(expandedPrinciple === id ? null : id)
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 bg-background"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] opacity-20" />
      <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />

      {/* Container for content */}
      <div className="container px-4 mx-auto relative z-10">
        <SectionTitle
          tag="About Me"
          title="The Foundation of Progress Lies in the Right Questions"
          subtitle="Transforming bold questions into ideas—and ideas into results that matter."
        />

        <div className="grid gap-16 md:grid-cols-12">
          {/* Left column - Photo and minimal info with fixed position */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="md:sticky md:top-24 space-y-8">
              <div className="relative">
                {/* Enhanced decorative elements */}
                <div className="absolute -top-4 -left-4 size-24 rounded-full bg-primary/5" />
                <div className="absolute -bottom-4 -right-4 size-32 rounded-full bg-accent/5" />

                {/* Photo with hover effect */}
                <motion.div className="relative overflow-hidden rounded-xl border border-white/10 aspect-square">
                  <Image
                    src="/about-img.webp?height=600&width=600"
                    alt="VIKASH PR"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />

                  {/* Photo caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-background/40 backdrop-blur-sm border border-white/10">
                      <span className="text-xs font-medium text-primary">
                        VIKASH PR
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="h-px w-12 bg-primary/50"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "3rem" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.h3
                  className="text-lg font-medium tracking-wide"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  VIKASH PR
                </motion.h3>
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  AI Researcher • Software Engineer • Speaker
                </motion.p>

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                  >
                    Connect with me
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Enhanced impact metrics - visual presentation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                <div className="p-4 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary">
                    {impactMetrics.publications}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Publications
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary">
                    {impactMetrics.citations}
                  </div>
                  <div className="text-xs text-muted-foreground">Citations</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary">
                    {impactMetrics.hIndex}
                  </div>
                  <div className="text-xs text-muted-foreground">h-index</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary">
                    {impactMetrics.patents}
                  </div>
                  <div className="text-xs text-muted-foreground">Patents</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="md:col-span-7 lg:col-span-8 space-y-12" ref={ref}>
            {/* Narrative Bio with enhanced typography and animations - condensed to 2 paragraphs */}
            <div className="space-y-6">
              <Reveal>
                <p className="text-foreground text-lg leading-relaxed">
                  More than 50,000 users in 44 different markets spanning Asia,
                  Europe, and beyond have benefited from digital SaaS solutions
                  that I have led and developed. I have worked with some of
                  India's leading research institutions and laboratories in AI
                  and healthcare innovation while I was an undergraduate
                  student.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-foreground text-lg leading-relaxed">
                  <span className="font-bold">What is my superpower?</span>{" "}
                  <span className="italic">
                    "I have no superpower. I am only passionately curious"
                  </span>{" "}
                  As someone who naturally thrives in challenging environments,
                  I firmly believe that the best solutions emerge when curiosity
                  meets purpose. My inquisitive mind has driven me to explore
                  research relentlessly, paving the way for a future where
                  innovative thinking transforms complex problems into impactful
                  solutions.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="leading-relaxed text-muted-foreground">
                  As founder of Velam.ai, I lead a team developing
                  next-generation AI solutions that empower organizations to
                  harness the full potential of machine learning while
                  maintaining the highest ethical standards. My approach
                  combines rigorous scientific research with practical
                  engineering expertise.
                </p>
              </Reveal>
            </div>

            {/* Enhanced Philosophy Section with interactive elements - reduced to 3 core principles */}
            <div className="pt-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-semibold relative inline-block">
                    Core Principles
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-4">
                {philosophyPrinciples.map((principle, index) => (
                  <Reveal key={principle.id} delay={0.1 * index}>
                    <motion.div
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        expandedPrinciple === principle.id
                          ? "border-primary/30 bg-primary/5"
                          : "border-white/10 hover:border-primary/20 bg-card/30"
                      }`}
                      layoutId={`principle-${principle.id}`}
                    >
                      <div
                        className="p-5 cursor-pointer"
                        onClick={() => togglePrinciple(principle.id)}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-gradient-to-br ${principle.color}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {principle.icon}
                          </motion.div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-medium">
                                {principle.title}
                              </h4>
                              <motion.div
                                animate={{
                                  rotate:
                                    expandedPrinciple === principle.id
                                      ? 180
                                      : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5 flex items-center justify-center"
                              >
                                <svg
                                  width="10"
                                  height="6"
                                  viewBox="0 0 10 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 1L5 5L9 1"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-muted-foreground"
                                  />
                                </svg>
                              </motion.div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {principle.content}
                            </p>
                          </div>
                        </div>
                      </div>

                      {expandedPrinciple === principle.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5 pt-2 border-t border-white/10"
                        >
                          <p className="text-sm text-foreground">
                            {principle.expandedContent}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Enhanced Footer with navigation */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
                <Link
                  href="#research"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Publications
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="#speaker"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Speaking
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="#engineering"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

