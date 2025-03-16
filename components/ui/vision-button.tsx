"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface VisionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  children: React.ReactNode
  href?: string
}

export function VisionButton({
  variant = "primary",
  size = "default",
  icon,
  iconPosition = "right",
  children,
  className,
  href,
  ...props
}: VisionButtonProps) {
  const buttonClasses = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
      "bg-secondary/50 backdrop-blur-sm border border-white/10 hover:bg-primary/20 hover:border-primary/30 text-foreground":
        variant === "secondary",
      "h-11 px-6 text-sm": size === "default",
      "h-14 px-8 text-base": size === "lg",
    },
    className,
  )

  const ButtonComponent = href ? "a" : "button"
  const buttonProps = href ? { href, ...props } : props

  return (
    <ButtonComponent className={buttonClasses} {...buttonProps}>
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </span>
    </ButtonComponent>
  )
}

