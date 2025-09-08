import HeroGeometric from "@/components/hero-geometric"
import { CTASection } from "@/components/cta-section"
import { TextSection } from "@/components/text-section"
// import { FeatureSection } from "@/components/feature-section"
import { FeatureSectionCustom } from "@/components/feature-section-custom"
// import { VideoSection } from "@/components/video-section"
import { AvatarSection } from "@/components/avatar-section"
import { Database, Cloud, Shield, Zap, BarChartIcon as ChartBar, Users, FileCheck, GraduationCap, CpuIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black">
      <HeroGeometric />
      
      <TextSection
        title="Skills Verified. Futures Unlocked."
        description="An AI-powered workforce platform replacing résumés with SkillDNA™, built as part of Precognition OS™ — a universal foresight framework that unites human cognition, AI intelligence, and machine data."
        align="center"
      />

      <AvatarSection />
      
      <FeatureSectionCustom
        title="Workforce Innovation Platform"
        description="Built on real-world training and powered by Precognition OS™"
        features={[
          {
            icon: <FileCheck />,
            title: "AI-Verified Skills",
            description: "SkillDNA™ replaces résumés with verifiable skill profiles, proving what people can actually do.",
          },
          {
            icon: <GraduationCap />,
            title: "Hands-On Training",
            description: "Built with real-world labs and U.S. Department of Labor–registered apprenticeships.",
          },
          {
            icon: <Users />,
            title: "For All Industries",
            description: "Expanding from IT & Cybersecurity into healthcare, manufacturing, logistics, and gaming.",
          },
          {
            icon: <CpuIcon />,
            title: "Precognition OS™",
            description: "Universal foresight framework uniting human cognition, AI intelligence, and machine data.",
          },
          {
            icon: <Cloud />,
            title: "Enterprise Scale",
            description: "Optimized across NVIDIA, Google Cloud, and AWS from edge to quantum-ready environments.",
          },
          {
            icon: <Shield />,
            title: "Hope Training Roots",
            description: "Created in partnership with Hope Training Academy, serving thousands of diverse learners.",
          },
        ]}
      />

      <TextSection
        title="From Real Needs to Real Solutions"
        description="CyberHope was created in a grassroots lab beginning in 2018, after recognizing how traditional credentials were failing underrepresented communities. Today, we're scaling pilots and partnerships across industries."
        align="center"
        theme="dark"
      />

      <CTASection
        title="Join the Workforce Revolution"
        description="Interested in pilots, partnerships, or apprenticeships? Contact us to learn how SkillDNA™ can transform your organization."
        buttonText="Contact Us →"
      />
    </main>
  )
}

