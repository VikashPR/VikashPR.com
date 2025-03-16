"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ThemeDocumentation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { resolvedTheme } = useTheme()

  // Color palette for documentation
  const colorPalette = {
    light: [
      { name: "Background", color: "bg-background", textColor: "text-foreground", value: "hsl(0 0% 100%)" },
      { name: "Foreground", color: "bg-foreground", textColor: "text-background", value: "hsl(222 47% 11%)" },
      { name: "Card", color: "bg-card", textColor: "text-card-foreground", value: "hsl(0 0% 98%)" },
      { name: "Primary", color: "bg-primary", textColor: "text-primary-foreground", value: "hsl(260 80% 50%)" },
      { name: "Secondary", color: "bg-secondary", textColor: "text-secondary-foreground", value: "hsl(210 40% 96%)" },
      { name: "Muted", color: "bg-muted", textColor: "text-muted-foreground", value: "hsl(210 40% 96%)" },
      { name: "Accent", color: "bg-accent", textColor: "text-accent-foreground", value: "hsl(260 80% 50%)" },
      { name: "Border", color: "bg-border", textColor: "text-foreground", value: "hsl(214 32% 91%)" },
    ],
    dark: [
      { name: "Background", color: "bg-background", textColor: "text-foreground", value: "hsl(225 23% 10%)" },
      { name: "Foreground", color: "bg-foreground", textColor: "text-background", value: "hsl(213 31% 91%)" },
      { name: "Card", color: "bg-card", textColor: "text-card-foreground", value: "hsl(224 25% 12%)" },
      { name: "Primary", color: "bg-primary", textColor: "text-primary-foreground", value: "hsl(260 80% 70%)" },
      { name: "Secondary", color: "bg-secondary", textColor: "text-secondary-foreground", value: "hsl(224 25% 18%)" },
      { name: "Muted", color: "bg-muted", textColor: "text-muted-foreground", value: "hsl(224 25% 16%)" },
      { name: "Accent", color: "bg-accent", textColor: "text-accent-foreground", value: "hsl(260 80% 60%)" },
      { name: "Border", color: "bg-border", textColor: "text-foreground", value: "hsl(224 25% 18%)" },
    ],
  }

  // Typography scale for documentation
  const typographyScale = [
    { name: "xs", className: "fluid-text-sm", example: "Extra Small Text" },
    { name: "sm", className: "fluid-text-base", example: "Small Text" },
    { name: "base", className: "fluid-text-lg", example: "Base Text" },
    { name: "lg", className: "fluid-text-xl", example: "Large Text" },
    { name: "xl", className: "fluid-text-2xl", example: "Extra Large Text" },
    { name: "2xl", className: "fluid-text-3xl", example: "2XL Text" },
    { name: "3xl", className: "fluid-text-4xl", example: "3XL Text" },
    { name: "4xl", className: "fluid-text-5xl", example: "4XL Text" },
  ]

  // Component examples for documentation
  const componentExamples = [
    { name: "Button", component: <Button>Button</Button> },
    { name: "Button (Primary)", component: <Button variant="default">Primary Button</Button> },
    { name: "Button (Secondary)", component: <Button variant="secondary">Secondary Button</Button> },
    { name: "Button (Outline)", component: <Button variant="outline">Outline Button</Button> },
    { name: "Button (Ghost)", component: <Button variant="ghost">Ghost Button</Button> },
    { name: "Theme Toggle", component: <ThemeToggle /> },
  ]

  return null
}

