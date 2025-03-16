"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface VisionContactFormProps {
  className?: string
  onSubmit?: (formData: FormState) => Promise<void>
}

export function VisionContactForm({ className, onSubmit }: VisionContactFormProps) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fieldFocus, setFieldFocus] = useState<keyof FormState | null>(null)

  const ref = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formState)
      } else {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
    >
      <div className="space-y-1.5">
        <Label
          htmlFor="name"
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            fieldFocus === "name" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Name
        </Label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            onFocus={() => setFieldFocus("name")}
            onBlur={() => setFieldFocus(null)}
            className={cn(
              "bg-card/50 border-white/10 h-12 transition-all duration-300",
              fieldFocus === "name" ? "border-primary/50 ring-1 ring-primary/20" : "",
            )}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="email"
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            fieldFocus === "email" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Email
        </Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formState.email}
            onChange={handleChange}
            onFocus={() => setFieldFocus("email")}
            onBlur={() => setFieldFocus(null)}
            className={cn(
              "bg-card/50 border-white/10 h-12 transition-all duration-300",
              fieldFocus === "email" ? "border-primary/50 ring-1 ring-primary/20" : "",
            )}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="subject"
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            fieldFocus === "subject" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Subject
        </Label>
        <div className="relative">
          <Input
            id="subject"
            name="subject"
            placeholder="Subject of your message"
            value={formState.subject}
            onChange={handleChange}
            onFocus={() => setFieldFocus("subject")}
            onBlur={() => setFieldFocus(null)}
            className={cn(
              "bg-card/50 border-white/10 h-12 transition-all duration-300",
              fieldFocus === "subject" ? "border-primary/50 ring-1 ring-primary/20" : "",
            )}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="message"
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            fieldFocus === "message" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Message
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            onFocus={() => setFieldFocus("message")}
            onBlur={() => setFieldFocus(null)}
            className={cn(
              "bg-card/50 border-white/10 transition-all duration-300 resize-none",
              fieldFocus === "message" ? "border-primary/50 ring-1 ring-primary/20" : "",
            )}
            required
          />
        </div>
      </div>

      <div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />

          <span className="relative flex items-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="size-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                Send Message
              </>
            )}
          </span>
        </motion.button>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 rounded-md bg-green-500/10 p-3 text-center text-sm text-green-500"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}

