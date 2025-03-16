"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"

// Gallery images data - reduced to essential information
const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Speaking at TechCrunch Disrupt",
    category: "Speaking",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Research lab work",
    category: "Research",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Velam.ai team meeting",
    category: "Startup",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "AI conference panel",
    category: "Speaking",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Working on neural network architecture",
    category: "Research",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Keynote presentation",
    category: "Speaking",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Collaborative coding session",
    category: "Engineering",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Velam.ai product launch",
    category: "Startup",
  },
]

// Categories for filtering
const categories = ["All", "Speaking", "Research", "Startup", "Engineering"]

export default function Gallery() {
  const [filter, setFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredImages = filter === "All" ? images : images.filter((image) => image.category === filter)

  const openLightbox = (image: (typeof images)[0]) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionTitle
          tag="Gallery"
          title="Visual Journey"
          subtitle="A glimpse into my professional life through images from speaking engagements, research work, and startup journey."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </Reveal>

        {/* Masonry-style gallery with minimal text */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <Reveal key={image.id} delay={index * 0.05}>
              <div
                className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square cursor-pointer transition-all duration-300 hover:border-primary/30"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with caption - only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-sm font-medium">{image.alt}</span>
                  <span className="text-xs text-muted-foreground">{image.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-5xl p-0 border-none bg-transparent">
            {selectedImage && (
              <div className="relative">
                <div className="relative aspect-video bg-background/90 rounded-xl overflow-hidden">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  onClick={closeLightbox}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Navigation buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-background/80 hover:bg-background"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-background/80 hover:bg-background"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80">
                  <p className="text-center font-medium">{selectedImage.alt}</p>
                  <p className="text-center text-sm text-muted-foreground">{selectedImage.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

