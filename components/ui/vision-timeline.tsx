"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  date: string
  title: string
  description?: string
  icon?: React.ReactNode
  isLast?: boolean
  imageUrl?: string
  className?: string
  onClick?: () => void
}

export function TimelineItem({
  date,
  title,
  description,
  icon,
  isLast = false,
  imageUrl,
  className,
  onClick,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative flex gap-6 pb-10 group",
        {
          "after:absolute after:left-[22px] after:top-12 after:h-full after:w-[2px] after:bg-white/10 dark:after:bg-white/10 light:after:bg-black/10":
            !isLast,
        },
        onClick && "cursor-pointer",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {/* Timeline dot */}
      <div className="relative z-10 mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
        {icon || <div className="size-3 rounded-full bg-primary" />}
      </div>

      <div className="flex flex-1 flex-col relative">
        <div className="text-sm font-medium text-primary">{date}</div>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>

        {imageUrl && (
          <motion.div
            className="relative mt-3 aspect-video w-full overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        )}

        {description && <p className="mt-3 text-muted-foreground">{description}</p>}

        {/* Tooltip - only show when clickable and no image is currently displayed */}
        {onClick && !imageUrl && (
          <div className="absolute -right-1 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded shadow-sm flex items-center gap-1 transform translate-x-1 group-hover:translate-x-0 transition-transform duration-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Click to view photo</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("relative", className)}>{children}</div>
}

