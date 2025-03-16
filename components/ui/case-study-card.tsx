"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  demoUrl?: string
  className?: string
  onClick?: () => void
}

export function CaseStudyCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  demoUrl,
  className,
  onClick,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm",
        "transition-all duration-300 hover:border-primary/30",
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{title}</h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs transition-colors duration-300 bg-secondary/50 group-hover:bg-primary/20 group-hover:text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {(githubUrl || demoUrl) && (
          <div className="flex gap-3 mt-4">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </Link>
            )}

            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="size-4" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Background highlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  )
}

