"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number[]
}

interface ParticleNetworkProps {
  className?: string
  density?: number
  connectionDistance?: number
  particleColor?: string
  lineColor?: string
  interactive?: boolean
}

export function ParticleNetwork({
  className = "",
  density = 0.00005,
  connectionDistance = 150,
  particleColor,
  lineColor,
  interactive = true,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let mouseTimeout: NodeJS.Timeout

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Limit the number of particles based on screen size
      const maxParticles = Math.min(Math.floor(canvas.width * canvas.height * density), 100)

      initParticles(maxParticles)
    }

    // Initialize particles
    const initParticles = (count) => {
      particles = []
      const particleCount = count || Math.floor(canvas.width * canvas.height * density)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          connections: [],
        })
      }
    }

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Mouse interaction - only calculate when mouse is moving
        if (interactive && isMouseMoving) {
          const dx = p.x - mouseX
          const dy = p.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist
            p.vx += dx * force * 0.01
            p.vy += dy * force * 0.01
          }
        }

        // Find connections - optimize by only checking a subset of particles
        if (i % 2 === 0) {
          // Only check every other particle
          p.connections = []
          for (let j = i + 1; j < particles.length; j += 2) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < connectionDistance) {
              p.connections.push(j)
            }
          }
        }
      }
    }

    // Draw particles and connections
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set colors based on theme
      const pColor = particleColor || (resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)")
      const lColor = lineColor || (resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)")

      // Draw connections
      ctx.strokeStyle = lColor
      ctx.lineWidth = 0.5

      // Limit the number of connections drawn
      const connectionLimit = Math.min(particles.length, 100)

      for (let i = 0; i < connectionLimit; i++) {
        const p = particles[i]

        for (const j of p.connections) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.globalAlpha = 1 - dist / connectionDistance
          ctx.stroke()
        }
      }

      // Draw particles - limit the number for performance
      ctx.fillStyle = pColor
      ctx.globalAlpha = 1

      const particleLimit = Math.min(particles.length, 150)
      for (let i = 0; i < particleLimit; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 2000)
    }

    // Set up event listeners
    window.addEventListener("resize", setCanvasDimensions)
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    // Initialize and start animation
    setCanvasDimensions()
    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      clearTimeout(mouseTimeout)
    }
  }, [density, connectionDistance, particleColor, lineColor, interactive, resolvedTheme])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} aria-hidden="true" />
}

