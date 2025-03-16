"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ScrollIndicatorProps {
  href: string
  label?: string
}

export function ScrollIndicator({ href, label = "Scroll to explore" }: ScrollIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Link
        href={href}
        aria-label={`Scroll to ${href.replace("#", "")}`}
        className="flex h-12 w-8 items-center justify-center rounded-full border border-white/10 bg-secondary/30 backdrop-blur-sm transition-colors duration-300 hover:bg-primary/10 hover:border-primary/20 dark:border-white/10 light:border-black/10"
        onClick={(e) => {
          e.preventDefault()
          const targetId = href.replace("#", "")
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="h-2 w-1 rounded-full bg-primary dark:bg-primary light:bg-primary"
        />
      </Link>
    </div>
  )
}

