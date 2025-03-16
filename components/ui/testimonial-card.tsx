"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  event?: string
  imageUrl?: string
  className?: string
}

export function TestimonialCard({ quote, author, role, event, imageUrl, className }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm p-6",
        "transition-all duration-300 hover:border-primary/30",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stylized quote mark */}
      <div
        className="absolute -top-4 left-6 text-8xl text-primary/10 font-serif transition-all duration-500"
        style={{
          transform: isHovered ? "translateY(0) scale(1.1)" : "translateY(-5px) scale(1)",
          opacity: isHovered ? 0.2 : 0.1,
        }}
      >
        "
      </div>

      <div className="relative z-10">
        <div className="flex items-start">
          {imageUrl && (
            <div className="mr-4 size-12 shrink-0 overflow-hidden rounded-full">
              <img src={imageUrl || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
            </div>
          )}

          <div className="flex-1">
            <p className="italic text-lg text-muted-foreground mb-4">{quote}</p>

            <div>
              <p className="font-semibold">{author}</p>
              {(role || event) && (
                <p className="text-sm text-muted-foreground">
                  {role}
                  {role && event && ", "}
                  {event}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
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

