"use client"

import { useState, useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { PublicationCard } from "@/components/ui/publication-card"
import { VisionCard, VisionCardContent } from "@/components/ui/vision-card"
import { Reveal } from "@/components/ui/reveal"
import { ChevronRight, ChevronLeft, ExternalLink, Zap, Brain, Code } from "lucide-react"
import Link from "next/link"

// Reduced to 3 key research papers
const papers = [
  {
    id: 1,
    title: "Advances in Neural Network Architectures for Computer Vision",
    abstract:
      "This paper presents novel neural network architectures that significantly improve performance on computer vision tasks while reducing computational requirements.",
    journal: "Journal of Machine Learning Research",
    year: "2023",
    authors: ["Vikash PR", "Sarah Johnson", "Michael Chen"],
    imageUrl: "/placeholder.svg?height=300&width=600",
    citationCount: 87,
    category: "Computer Vision",
    paperUrl: "https://example.com/paper1",
  },
  {
    id: 2,
    title: "Ethical Considerations in Deploying AI Systems",
    abstract:
      "We explore the ethical implications of deploying AI systems in critical domains and propose a framework for responsible AI development and deployment.",
    journal: "AI Ethics Journal",
    year: "2022",
    authors: ["Vikash PR", "Emma Rodriguez", "David Kim"],
    imageUrl: "/placeholder.svg?height=300&width=600",
    citationCount: 56,
    category: "AI Ethics",
    paperUrl: "https://example.com/paper2",
  },
  {
    id: 3,
    title: "Quantum Computing Applications in Machine Learning",
    abstract:
      "This research investigates the potential applications of quantum computing in accelerating machine learning algorithms and improving their performance.",
    journal: "Quantum Computing Journal",
    year: "2021",
    authors: ["Vikash PR", "Robert Taylor", "Lisa Wang"],
    imageUrl: "/placeholder.svg?height=300&width=600",
    citationCount: 42,
    category: "Quantum Computing",
    paperUrl: "https://example.com/paper3",
  },
]

// Reduced to 3 core research areas with concise descriptions
const researchAreas = [
  {
    title: "Computer Vision",
    description:
      "Developing advanced neural network architectures for image recognition, object detection, and scene understanding.",
    color: "from-blue-500/20 to-blue-500/5",
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    publications: 14,
    citations: 720,
  },
  {
    title: "AI Ethics",
    description: "Researching frameworks and methodologies for responsible AI development and deployment.",
    color: "from-purple-500/20 to-purple-500/5",
    icon: <Code className="h-6 w-6 text-purple-500" />,
    publications: 11,
    citations: 530,
  },
  {
    title: "Quantum Computing",
    description: "Exploring the intersection of quantum computing and machine learning for next-generation algorithms.",
    color: "from-yellow-500/20 to-yellow-500/5",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    publications: 5,
    citations: 210,
  },
]

export default function Research() {
  const [currentPaperIndex, setCurrentPaperIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Navigate papers in the carousel view
  const navigatePaper = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentPaperIndex((prev) => (prev - 1 + papers.length) % papers.length)
    } else {
      setCurrentPaperIndex((prev) => (prev + 1) % papers.length)
    }
  }

  return (
    <section id="research" ref={ref} className="relative py-24 overflow-hidden bg-muted/30">
      {/* Abstract network background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10 opacity-30" />
      <motion.div
        className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 5,
        }}
      />

      <div className="container px-4 mx-auto">
        <SectionTitle
          tag="Research"
          title="Scientific Inquiry at the Frontier of Innovation"
          subtitle="My research focuses on advancing the fields of artificial intelligence, machine learning, and their applications in solving complex real-world problems."
        />

        <div className="grid gap-12 md:grid-cols-12">
          {/* Research Areas - Enhanced with interactive elements */}
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary/50"></div>
                <h3 className="text-2xl font-bold">Research Areas</h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <motion.div
                    initial={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                    whileHover={{ borderColor: "rgba(var(--primary-rgb), 0.3)" }}
                    className="cursor-pointer"
                  >
                    <VisionCard depth="sm" interactive={false} highlightOnHover={true}>
                      <VisionCardContent className="p-4">
                        <div
                          className={`absolute inset-0 opacity-20 bg-gradient-to-br ${area.color} -z-10 rounded-xl`}
                        />

                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                            {area.icon}
                          </div>

                          <div className="flex-1">
                            <h4 className="text-lg font-medium">{area.title}</h4>
                            <p className="text-sm text-muted-foreground">{area.description}</p>

                            <div className="flex gap-6 text-sm mt-3">
                              <div>
                                <p className="font-medium text-foreground">{area.publications}</p>
                                <p className="text-xs text-muted-foreground">Publications</p>
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{area.citations}</p>
                                <p className="text-xs text-muted-foreground">Citations</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </VisionCardContent>
                    </VisionCard>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Publications - Enhanced with a carousel view */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/50"></div>
                  <h3 className="text-2xl font-bold">Featured Publications</h3>
                </div>
              </Reveal>
            </div>

            {/* Paper carousel for large screens */}
            <div className="hidden md:block relative">
              {papers.map((paper, index) => (
                <div
                  key={paper.id}
                  className={`transition-opacity duration-500 ${currentPaperIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                >
                  <PublicationCard
                    title={paper.title}
                    abstract={paper.abstract}
                    journal={paper.journal}
                    year={paper.year}
                    authors={paper.authors}
                    imageUrl={paper.imageUrl}
                    citationCount={paper.citationCount}
                    category={paper.category}
                    paperUrl={paper.paperUrl}
                  />
                </div>
              ))}

              <div className="absolute top-1/2 -translate-y-1/2 left-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigatePaper("prev")}
                  className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigatePaper("next")}
                  className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex justify-center mt-4 gap-1">
                {papers.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentPaperIndex === index ? "bg-primary" : "bg-primary/20"
                    }`}
                    onClick={() => setCurrentPaperIndex(index)}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View publication ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Paper list for mobile */}
            <div className="md:hidden space-y-6">
              {papers.map((paper, index) => (
                <Reveal key={paper.id} delay={index * 0.1}>
                  <PublicationCard
                    title={paper.title}
                    abstract={paper.abstract}
                    journal={paper.journal}
                    year={paper.year}
                    authors={paper.authors}
                    imageUrl={paper.imageUrl}
                    citationCount={paper.citationCount}
                    category={paper.category}
                    paperUrl={paper.paperUrl}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="flex justify-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden"
                >
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium relative z-10 group"
                  >
                    <span>View All Publications</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

