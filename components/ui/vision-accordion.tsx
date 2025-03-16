"use client"

import { useState } from "react"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const VisionAccordion = AccordionPrimitive.Root

const VisionAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-white/10 transition-all duration-300 data-[state=open]:border-primary/30",
      className,
    )}
    {...props}
  />
))
VisionAccordionItem.displayName = "VisionAccordionItem"

const VisionAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  // Manage hover state
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between py-5 text-left text-xl font-medium transition-all duration-300 hover:text-primary focus:outline-none focus:text-primary",
          "data-[state=open]:text-primary data-[state=open]:font-semibold",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div className="flex items-center">
          <div
            className={cn(
              "mr-4 h-1 w-4 bg-primary/50 transition-all duration-300",
              "group-hover:w-6 group-data-[state=open]:w-8",
            )}
          />
          {children}
        </div>

        <motion.div
          animate={{
            rotate: props["data-state"] === "open" ? 180 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="size-5 shrink-0 text-primary transition-transform duration-300"
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
VisionAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const VisionAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: props["data-state"] === "open" ? 1 : 0,
        y: props["data-state"] === "open" ? 0 : 10,
      }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={cn("pb-5 pl-7 pr-0 text-muted-foreground", className)}
    >
      {children}
    </motion.div>
  </AccordionPrimitive.Content>
))
VisionAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { VisionAccordion, VisionAccordionItem, VisionAccordionTrigger, VisionAccordionContent }

