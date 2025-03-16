"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, BookOpen, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NewsletterSubscriptionProps {
  className?: string
}

export function NewsletterSubscription({ className }: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn("rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden", className)}
    >
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50" />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Left content */}
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                <Bell className="w-4 h-4 mr-2" />
                <span>Stay Updated</span>
              </div>

              <h3 className="text-2xl font-bold">Subscribe to My Newsletter</h3>

              <p className="text-muted-foreground">
                Get the latest insights on AI, technology ethics, and innovation delivered directly to your inbox. I
                share exclusive content and early access to new research.
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>No Spam</span>
                </div>
              </div>
            </div>

            {/* Right content - Subscription form */}
            <div className="w-full md:w-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className={cn(
                        "h-12 pl-10 pr-4 bg-card/50 border-white/10 transition-all duration-300",
                        isFocused ? "border-primary/50 ring-1 ring-primary/20" : "",
                      )}
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>

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
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                          Subscribe
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-500/10 p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-green-500 mb-2">Successfully Subscribed!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for subscribing to my newsletter. You'll receive the next issue in your inbox.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

