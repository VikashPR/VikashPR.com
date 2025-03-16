"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 20,
  once = true,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once])

  // Set initial animation values based on direction
  const getInitialX = () => {
    if (direction === "left") return -distance
    if (direction === "right") return distance
    return 0
  }

  const getInitialY = () => {
    if (direction === "up") return distance
    if (direction === "down") return -distance
    return 0
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: getInitialX(), y: getInitialY() }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: getInitialX(), y: getInitialY() }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

