import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Speaker from "@/components/sections/speaker"
import Engineering from "@/components/sections/engineering"
import Research from "@/components/sections/research"
import Velam from "@/components/sections/velam"
import Gallery from "@/components/sections/gallery"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"
import ThemeDocumentation from "@/components/sections/theme-documentation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Speaker />
      <Engineering />
      <Research />
      <Velam />
      <Gallery />
      <Achievements />
      <ThemeDocumentation />
      <Contact />
      <Footer />
    </main>
  )
}

