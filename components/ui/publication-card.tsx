"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3 } from "lucide-react"
import Link from "next/link"

interface PublicationCardProps {
  title: string
  abstract: string
  journal: string
  year: string
  authors: string[]
  imageUrl: string
  citationCount: number
  category: string
  paperUrl: string
  className?: string
}

export function PublicationCard({
  title,
  abstract,
  journal,
  year,
  authors,
  imageUrl,
  citationCount,
  category,
  paperUrl,
  className,
}: PublicationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm",
        "transition-all duration-300 hover:border-primary/30",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-3">
        {/* Publication Image */}
        <div className="relative h-48 md:h-full">
          <motion.img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.5 : 0,
            }}
          />

          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/20 text-primary border-none">{category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2 p-6">
          <div className="flex items-start justify-between">
            <h3
              className="text-xl font-semibold mb-2 transition-colors duration-300"
              style={{
                color: isHovered ? "hsl(var(--primary))" : "inherit",
              }}
            >
              {title}
            </h3>
            <Badge variant="outline" className="ml-2 shrink-0">
              {year}
            </Badge>
          </div>

          <div className="text-sm text-muted-foreground mb-4">{journal}</div>

          {/* Abstract with toggle */}
          <div className="text-sm text-muted-foreground mb-4">
            <span className={cn(!isExpanded && "line-clamp-2")}>{abstract}</span>

            {abstract.length > 120 && (
              <button
                className="ml-1 text-primary hover:underline focus:outline-none"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <BarChart3 className="mr-1 size-4 text-primary" />
              <span>{citationCount} citations</span>
            </div>

            <Link
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary transition-colors duration-300 hover:bg-primary/30"
            >
              <FileText className="size-4" />
              <span>Read Paper</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

