"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

export function SocialIcon({ href, icon, label, className }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-primary/20 hover:border-primary/30",
        className,
      )}
      aria-label={label}
    >
      <span className="transition-transform duration-300 hover:scale-110">{icon}</span>
    </Link>
  )
}

