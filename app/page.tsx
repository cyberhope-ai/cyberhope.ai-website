import HeroGeometric from "@/components/hero-geometric"
import { CTASection } from "@/components/cta-section"
import { TextSection } from "@/components/text-section"
import { FeatureSection } from "@/components/feature-section"
// import { VideoSection } from "@/components/video-section"
import { AvatarSection } from "@/components/avatar-section"
import { Database, Cloud, Shield, Zap, BarChartIcon as ChartBar, Users, FileCheck, GraduationCap, CpuIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black">
      <HeroGeometric />
      
      <TextSection
        title="Revolutionizing Workforce Intelligence"
        description="CyberHope.ai empowers individuals with verified, lifelong skills through advanced AI assessment. We bridge the gap between education and employment, validating technical and cybersecurity competencies in real time."
        align="center"
      />

      <AvatarSection />
      
      <FeatureSection
        title="Empowering the Digital Workforce"
        description="Through our USDOL-registered Hope Training Academy, we're transforming IT and cybersecurity apprenticeships with cutting-edge technology."
        features={[
          {
            icon: <FileCheck />,
            title: "Verified Skills",
            description: "AI-powered assessment and validation of technical competencies in real time.",
          },
          {
            icon: <GraduationCap />,
            title: "Apprenticeship Programs",
            description: "USDOL-registered training programs focused on cybersecurity and IT skills.",
          },
          {
            icon: <Shield />,
            title: "Secure Workforce",
            description: "Building a secure digital workforce for the rapidly changing technology landscape.",
          },
          {
            icon: <CpuIcon />,
            title: "Advanced Technology",
            description: "Leveraging cutting-edge AI for real-time video analysis and scalable inference.",
          },
          {
            icon: <Users />,
            title: "Bridging Gaps",
            description: "Connecting education and employment through verified skills assessment.",
          },
          {
            icon: <Zap />,
            title: "Innovative Solutions",
            description: "Transforming workforce needs with scalable, innovative technology.",
          },
        ]}
      />

      <TextSection
        title="Building the Future of Work"
        description="Our mission is to create a verified, skilled technical workforce through advanced AI and real-time assessment. Join us in revolutionizing how skills are validated and utilized in the digital economy."
        align="center"
        theme="dark"
      />

      <CTASection
        title="Ready to Transform Your Workforce?"
        description="Discover how CyberHope.ai can help you build a verified, skilled team through our apprenticeship programs and AI-powered skills validation."
        buttonText="Contact Us →"
      />
    </main>
  )
}

