"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AchievementItemProps {
  title: string
  organization: string
  year: string
  description: string
  category: "award" | "publication" | "education" | "career" | "recognition"
  icon: React.ReactNode
  isLast?: boolean
  className?: string
}

export function AchievementItem({
  title,
  organization,
  year,
  description,
  category,
  icon,
  isLast = false,
  className,
}: AchievementItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Category colors
  const categoryColors = {
    award: "text-yellow-500 bg-yellow-500/10 dark:text-yellow-400 dark:bg-yellow-400/10",
    publication: "text-blue-500 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-400/10",
    education: "text-green-500 bg-green-500/10 dark:text-green-400 dark:bg-green-400/10",
    career: "text-purple-500 bg-purple-500/10 dark:text-purple-400 dark:bg-purple-400/10",
    recognition: "text-red-500 bg-red-500/10 dark:text-red-400 dark:bg-red-400/10",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative pl-12 pb-10",
        {
          "after:absolute after:left-5 after:top-12 after:h-[calc(100%-3rem)] after:w-[2px] after:bg-white/10 dark:after:bg-white/10 light:after:bg-black/10":
            !isLast,
        },
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 flex size-10 items-center justify-center rounded-full",
          categoryColors[category],
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Badge className={cn("ml-2 shrink-0 bg-transparent", categoryColors[category])}>{year}</Badge>
        </div>

        <p className="mt-1 text-sm font-medium">{organization}</p>

        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

interface AchievementsTimelineProps {
  children: React.ReactNode
  className?: string
}

export function AchievementsTimeline({ children, className }: AchievementsTimelineProps) {
  return <div className={cn("relative", className)}>{children}</div>
}

function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", className)}>
      {children}
    </span>
  )
}

