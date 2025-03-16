"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleTheme = () => {
    setIsAnimating(true)
    setTheme(resolvedTheme === "dark" ? "light" : "dark")

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  return (
    <motion.button
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full",
        "bg-secondary/50 backdrop-blur-sm border border-white/10",
        "transition-colors duration-200",
        "hover:bg-primary/20 hover:border-primary/30",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
        className,
      )}
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
    >
      {/* Simplified icon transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {resolvedTheme === "dark" ? <SunIcon isHovered={isHovered} /> : <MoonIcon isHovered={isHovered} />}
        </motion.div>
      </AnimatePresence>

      {/* Simplified background animation */}
      {isAnimating && (
        <div
          className={cn(
            "absolute inset-0 rounded-full animate-pulse",
            resolvedTheme === "dark" ? "bg-amber-300/10" : "bg-indigo-500/10",
          )}
        />
      )}
    </motion.button>
  )
}

function SunIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-200", isHovered && "scale-110")}
    >
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoonIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-200", isHovered && "scale-110")}
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

