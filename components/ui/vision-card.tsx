"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

interface VisionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  depth?: "none" | "sm" | "md" | "lg"
  interactive?: boolean
  interactiveScale?: number
  interactiveRotate?: boolean
  highlightOnHover?: boolean
}

export function VisionCard({
  children,
  className,
  depth = "md",
  interactive = true,
  interactiveScale = 1.02,
  interactiveRotate = true,
  highlightOnHover = true,
  ...props
}: VisionCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  })

  // Add height stabilization
  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight
      cardRef.current.style.minHeight = `${height}px`
    }
  }, [isInView])

  // Mouse position tracking for 3D effect
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !interactiveRotate || !cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setMousePosition({ x, y })
  }

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const depthClasses = {
    none: "border border-white/10",
    sm: "border border-white/10 shadow-sm",
    md: "border border-white/10 shadow-md",
    lg: "border border-white/20 shadow-lg",
  }

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-card/80 backdrop-blur-md text-card-foreground",
        depthClasses[depth],
        {
          "transition-colors duration-300": highlightOnHover,
          "hover:border-primary/30": highlightOnHover && isHovered,
        },
        className,
      )}
      style={{
        minHeight: cardRef.current?.offsetHeight || "auto",
        willChange: "transform, opacity",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        resetMousePosition()
      }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        ref={cardRef}
        className="relative h-full w-full"
        style={{
          transform:
            interactive && interactiveRotate
              ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg) scale(${isHovered ? interactiveScale : 1})`
              : isHovered && interactive
                ? `scale(${interactiveScale})`
                : "scale(1)",
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Interactive highlight effect */}
        {interactive && highlightOnHover && (
          <div
            className="absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${((mousePosition.x + 0.5) * 100).toFixed(0)}% ${(
                (mousePosition.y + 0.5) * 100
              ).toFixed(0)}%, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  )
}

export const VisionCardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

export const VisionCardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)

export const VisionCardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)

export const VisionCardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

export const VisionCardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
)

