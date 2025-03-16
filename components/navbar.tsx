"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

// Simplified navbar items for better mobile experience
const navItems = [
  { name: "About", href: "#about" },
  { name: "Speaker", href: "#speaker" },
  { name: "Engineering", href: "#engineering" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))

      // Find the section that is currently in view
      let currentSection = ""
      let maxVisibility = 0

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight

          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
          const visibility = visibleHeight > 0 ? visibleHeight / element.offsetHeight : 0

          if (visibility > maxVisibility) {
            maxVisibility = visibility
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu when clicking a link

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update active section
      setActiveSection(targetId)

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold tracking-tighter transition-all duration-300 hover:text-primary group"
          aria-label="VIKASH PR Logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 transition-all duration-300 group-hover:border-primary/30">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 group-hover:scale-110"
            >
              <path
                d="M4 4L12 20L20 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              />
              <path
                d="M4 20H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              />
            </svg>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"></div>
          </div>
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:translate-y-full">VP</span>
            <span className="absolute top-0 left-0 block transition-transform duration-300 -translate-y-full group-hover:translate-y-0 text-primary">
              VP
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-1">
          <div className="mac-dock">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(item.href, e)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full relative group",
                  activeSection === item.href.substring(1) ? "text-primary" : "hover:text-primary",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                    activeSection === item.href.substring(1)
                      ? "w-1/2 left-1/4"
                      : "w-0 group-hover:w-1/2 group-hover:left-1/4",
                  )}
                ></span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle className="ml-2" />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle className="mr-2" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full bg-secondary/80 backdrop-blur-sm border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Fixed position to stay visible on scroll */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, y: 0, backdropFilter: "blur(16px)" }}
          exit={{ opacity: 0, y: -20, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col pt-20 pb-6 bg-card/90 md:hidden"
        >
          <nav className="flex flex-col items-center space-y-6 overflow-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-all duration-200 relative group",
                    activeSection === item.href.substring(1) ? "text-primary" : "hover:text-primary",
                  )}
                  onClick={(e) => scrollToSection(item.href, e)}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                      activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

