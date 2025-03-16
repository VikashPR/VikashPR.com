"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Award, BookOpen, Briefcase, GraduationCap, Trophy } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { AchievementsTimeline, AchievementItem } from "@/components/ui/achievements-timeline"
import { VisionCard, VisionCardContent } from "@/components/ui/vision-card"
import { Reveal } from "@/components/ui/reveal"

// Achievements data with condensed descriptions
const achievements = [
  {
    id: 1,
    title: "AI Researcher of the Year",
    organization: "Global AI Association",
    year: "2023",
    description: "Recognized for groundbreaking research in neural network architectures.",
    category: "award",
  },
  {
    id: 2,
    title: "Most Influential Paper",
    organization: "International Conference on Machine Learning",
    year: "2022",
    description: "Paper on ethical AI deployment cited by over 500 researchers.",
    category: "publication",
  },
  {
    id: 3,
    title: "Ph.D. in Computer Science",
    organization: "Stanford University",
    year: "2022",
    description: "Graduated with highest honors, specializing in AI and Machine Learning.",
    category: "education",
  },
  {
    id: 4,
    title: "Forbes 30 Under 30",
    organization: "Forbes",
    year: "2021",
    description: "Recognized in Science & Healthcare for AI innovations in medical imaging.",
    category: "recognition",
  },
  {
    id: 5,
    title: "Senior Research Scientist",
    organization: "Google AI",
    year: "2020-2022",
    description: "Led research initiatives in computer vision and natural language processing.",
    category: "career",
  },
  {
    id: 6,
    title: "Best Demo Award",
    organization: "ACM SIGGRAPH",
    year: "2020",
    description: "For interactive neural network visualization tool for complex AI systems.",
    category: "award",
  },
]

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Get icons for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return <Trophy className="w-5 h-5" />
      case "publication":
        return <BookOpen className="w-5 h-5" />
      case "education":
        return <GraduationCap className="w-5 h-5" />
      case "career":
        return <Briefcase className="w-5 h-5" />
      case "recognition":
        return <Award className="w-5 h-5" />
      default:
        return <Trophy className="w-5 h-5" />
    }
  }

  return (
    <section id="achievements" ref={ref} className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <SectionTitle
          tag="Milestones"
          title="Achievements & Recognition"
          subtitle="Key milestones and recognitions from my professional journey in software engineering, scientific research, and entrepreneurship."
        />

        {/* Section heading with decorative line */}
        <div className="flex items-center gap-3 mb-8 max-w-3xl mx-auto">
          <div className="h-px w-8 bg-primary/50"></div>
          <h3 className="text-2xl font-bold">Career Timeline</h3>
        </div>

        {/* Achievements Timeline - More visual with icons and single-sentence descriptions */}
        <div className="max-w-3xl mx-auto mb-16">
          <AchievementsTimeline>
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.id} delay={index * 0.1}>
                <AchievementItem
                  title={achievement.title}
                  organization={achievement.organization}
                  year={achievement.year}
                  description={achievement.description}
                  category={achievement.category as any}
                  icon={getCategoryIcon(achievement.category)}
                  isLast={index === achievements.length - 1}
                />
              </Reveal>
            ))}
          </AchievementsTimeline>
        </div>

        {/* Future Vision - Condensed */}
        <Reveal delay={0.4}>
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary/10 animate-pulse" />

            <VisionCard depth="lg" interactive={false} className="p-8">
              <VisionCardContent className="text-center">
                <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
                <p className="text-muted-foreground">
                  Looking ahead, I'm focused on advancing AI research in areas with significant societal impact, scaling
                  Velam.ai to serve global enterprises, and mentoring the next generation of technologists and
                  researchers. My goal is to bridge the gap between theoretical advances and practical applications,
                  creating AI systems that are powerful, transparent, fair, and aligned with human values.
                </p>
              </VisionCardContent>
            </VisionCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

