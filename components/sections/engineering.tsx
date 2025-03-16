"use client"

import { useState, useRef } from "react"
import { useInView, motion } from "framer-motion"
import {
  ExternalLink,
  Github,
  ChevronRight,
  ArrowRight,
  Atom,
  FileCode2,
  Flame,
  Cpu,
  BarChart,
  Calculator,
  Database,
  Network,
  Box,
  Boxes,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/ui/reveal"
import Image from "next/image"
import Link from "next/link"

// Reduced to 4 featured projects with condensed descriptions
const featuredProjects = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    tagline: "Making AI transparent and accessible",
    description:
      "An interactive tool for visualizing neural network architectures and training processes in real-time.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    githubUrl: "https://github.com/vikashpr/neural-viz",
    demoUrl: "https://neural-viz.demo.com",
    stars: 342,
    category: "AI",
    impact: "Used by 7 universities",
    featured: true,
  },
  {
    id: 2,
    title: "AI Research Framework",
    tagline: "Accelerating scientific discovery",
    description:
      "A comprehensive framework for AI research that streamlines experiment setup, data processing, and result analysis.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    technologies: ["Python", "PyTorch", "NumPy", "Pandas"],
    githubUrl: "https://github.com/vikashpr/ai-research-framework",
    stars: 521,
    category: "AI",
    impact: "60% faster experiments",
    featured: true,
  },
  {
    id: 3,
    title: "Quantum Computing Simulator",
    tagline: "Making quantum accessible to everyone",
    description:
      "A simulator for quantum computing algorithms that helps researchers test and visualize quantum circuits.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    technologies: ["Python", "Qiskit", "NumPy", "React"],
    githubUrl: "https://github.com/vikashpr/quantum-sim",
    demoUrl: "https://quantum-sim.demo.com",
    stars: 278,
    category: "Research",
    impact: "10,000+ users",
    featured: true,
  },
  {
    id: 4,
    title: "Distributed Systems Library",
    tagline: "Building resilient infrastructure",
    description: "A library for building resilient distributed systems with built-in fault tolerance and scalability.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    technologies: ["Go", "gRPC", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/vikashpr/distributed-lib",
    stars: 412,
    category: "Backend",
    impact: "70% dev time reduction",
    featured: true,
  },
]

export default function Engineering() {
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[0] | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const isFeaturedVisible = useInView(featuredRef, { once: true, amount: 0.3 })

  // Project interaction handlers
  const openProjectDetails = (project: (typeof featuredProjects)[0]) => {
    setSelectedProject(project)
  }

  return (
    <section id="engineering" ref={ref} className="relative py-24 bg-background overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] opacity-20 -z-10" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />

      {/* Abstract decorative elements */}
      <motion.div
        className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 5,
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <SectionTitle
          tag="Projects"
          title="Software Engineering & Technical Innovation"
          subtitle="I build innovative software solutions that bridge the gap between cutting-edge research and practical applications."
        />

        {/* Featured Project Showcase */}
        <div ref={featuredRef} className="mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-primary/50"></div>
              <h3 className="text-2xl font-bold">Featured Projects</h3>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.2}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm h-full flex flex-col"
                  whileHover={{ y: -5, borderColor: "rgba(var(--primary-rgb), 0.3)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openProjectDetails(project)}
                >
                  {/* Add this gradient background effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)",
                    }}
                  />
                  {/* Project Image with Overlay */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/20 text-primary border-none">{project.category}</Badge>
                    </div>

                    <motion.div
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-sm text-white/90">{project.tagline}</p>
                    </motion.div>
                  </div>

                  <div className="flex-1 p-6">
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => {
                        // Define colors and icons based on technology
                        const techConfig = {
                          React: {
                            color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                            icon: <Atom className="size-3 mr-1" />,
                          },
                          TypeScript: {
                            color: "bg-blue-600/20 text-blue-400 border-blue-600/30",
                            icon: <FileCode2 className="size-3 mr-1" />,
                          },
                          JavaScript: {
                            color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                            icon: <FileCode2 className="size-3 mr-1" />,
                          },
                          Python: {
                            color: "bg-green-500/20 text-green-400 border-green-500/30",
                            icon: <FileCode2 className="size-3 mr-1" />,
                          },
                          PyTorch: {
                            color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                            icon: <Flame className="size-3 mr-1" />,
                          },
                          TensorFlow: {
                            color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                            icon: <Cpu className="size-3 mr-1" />,
                          },
                          "TensorFlow.js": {
                            color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                            icon: <Cpu className="size-3 mr-1" />,
                          },
                          "D3.js": {
                            color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                            icon: <BarChart className="size-3 mr-1" />,
                          },
                          NumPy: {
                            color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                            icon: <Calculator className="size-3 mr-1" />,
                          },
                          Pandas: {
                            color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
                            icon: <Database className="size-3 mr-1" />,
                          },
                          Qiskit: {
                            color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
                            icon: <Atom className="size-3 mr-1" />,
                          },
                          Go: {
                            color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
                            icon: <FileCode2 className="size-3 mr-1" />,
                          },
                          gRPC: {
                            color: "bg-green-500/20 text-green-400 border-green-500/30",
                            icon: <Network className="size-3 mr-1" />,
                          },
                          Docker: {
                            color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                            icon: <Box className="size-3 mr-1" />,
                          },
                          Kubernetes: {
                            color: "bg-blue-600/20 text-blue-400 border-blue-600/30",
                            icon: <Boxes className="size-3 mr-1" />,
                          },
                        }

                        // Default styling if technology is not in our config
                        const defaultStyle = { color: "bg-secondary/50 text-foreground border-white/10", icon: null }
                        const { color, icon } = techConfig[tech] || defaultStyle

                        return (
                          <Badge
                            key={i}
                            variant="outline"
                            className={`flex items-center ${color} transition-transform duration-300 hover:scale-105`}
                          >
                            {icon}
                            {tech}
                          </Badge>
                        )
                      })}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Github className="mr-1 size-4 text-primary/70" />
                          <span>{project.stars} stars</span>
                        </div>
                        {project.impact && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span className="text-primary">{project.impact}</span>
                          </div>
                        )}
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary"
                        onClick={(e) => {
                          e.stopPropagation()
                          openProjectDetails(project)
                        }}
                      >
                        Details
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <Reveal>
          <div className="flex justify-center mt-8">
            <Button className="relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </div>
        </Reveal>

        {/* Project Details Dialog - Enhanced Case Study Presentation */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 border-none bg-background/95 backdrop-blur-md">
            {selectedProject && (
              <div className="max-h-[90vh] overflow-y-auto">
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-3 bg-primary/20 text-primary border-none">{selectedProject.category}</Badge>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-lg text-muted-foreground">{selectedProject.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Left Column - Project Details */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-4">Overview</h3>
                      <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">Impact</h4>
                          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                            <p className="text-foreground">{selectedProject.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Tech Stack and Stats */}
                    <div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium mb-4">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="border-primary/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-4">Project Stats</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                              <span className="text-muted-foreground">GitHub Stars</span>
                              <span className="font-medium">{selectedProject.stars}</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                              <span className="text-muted-foreground">Category</span>
                              <span className="font-medium">{selectedProject.category}</span>
                            </div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-medium">Project Links</h4>
                          <div className="flex flex-col gap-3">
                            <Button asChild variant="default">
                              <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View on GitHub
                              </Link>
                            </Button>

                            {selectedProject.demoUrl && (
                              <Button asChild variant="outline">
                                <Link href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

