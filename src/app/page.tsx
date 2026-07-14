import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { RevealSection } from '@/components/home/RevealSection'
import { SkillsHighlight } from '@/components/home/SkillsHighlight'
import { ProjectsHighlight } from '@/components/home/ProjectsHighlight'
import { BlogHighlight } from '@/components/home/BlogHighlight'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Nguyen Luong Hung — AI Engineer',
  description:
    'AI Engineer focused on production LLM systems, knowledge-base platforms, fine-tuning, and self-hosted/on-premise LLM deployments for enterprise and legal-domain applications.',
})

export default function HomePage() {
  return (
    <div>
      <Hero />
      <RevealSection>
        <SkillsHighlight />
      </RevealSection>
      <RevealSection>
        <ProjectsHighlight />
      </RevealSection>
      <RevealSection>
        <BlogHighlight />
      </RevealSection>
      <RevealSection>
        <ContactCTA />
      </RevealSection>
    </div>
  )
}
