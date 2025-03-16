"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  tag?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionTitle({ title, subtitle, tag, align = "center", className }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align]

  return (
    <div ref={ref} className={cn("mb-16 max-w-3xl", alignClass, className)}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary"
        >
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

