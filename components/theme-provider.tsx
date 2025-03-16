"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
  systemTheme: "light" | "dark"
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "dark",
  systemTheme: "dark",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vikash-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  // Update theme when it changes
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      setSystemTheme(systemTheme)
    } else {
      root.classList.add(theme)
    }

    // Add transition class for smooth theme changes
    // We add it here rather than in CSS to avoid transition on initial load
    if (mounted) {
      document.documentElement.classList.add("theme-transition")

      // Remove the transition class after the transition is complete
      const transitionTimeout = setTimeout(() => {
        document.documentElement.classList.remove("theme-transition")
      }, 800) // Match this to the CSS transition duration

      return () => clearTimeout(transitionTimeout)
    }
  }, [theme, mounted])

  // Initialize theme from localStorage and set mounted state
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    }
    setMounted(true)
  }, [storageKey])

  // Update localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey, mounted])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
      if (theme === "system") {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(mediaQuery.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const resolvedTheme = theme === "system" ? systemTheme : theme

  const value = {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
  }

  // Avoid rendering with incorrect theme on first render
  if (!mounted) {
    return <div className="invisible">{children}</div>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

