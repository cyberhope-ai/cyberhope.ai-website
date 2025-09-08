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
        title="Transforming Digital Innovation"
        description="CyberHope.ai is pioneering the future of AI-powered technology solutions. We're building cutting-edge platforms that leverage advanced artificial intelligence to solve complex challenges across multiple industries."
        align="center"
      />

      <AvatarSection />
      
      <FeatureSectionCustom
        title="Leading AI Innovation"
        description="We're developing comprehensive AI solutions that address real-world challenges with cutting-edge technology and strategic partnerships."
        features={[
          {
            icon: <CpuIcon />,
            title: "Advanced AI Platform",
            description: "State-of-the-art artificial intelligence infrastructure for scalable, real-time processing and analysis.",
          },
          {
            icon: <Cloud />,
            title: "Cloud-Native Architecture",
            description: "Fully integrated cloud solutions leveraging Google Cloud Platform for global scale and reliability.",
          },
          {
            icon: <Shield />,
            title: "Enterprise Security",
            description: "Comprehensive security framework ensuring data protection and compliance across all operations.",
          },
          {
            icon: <ChartBar />,
            title: "Data Intelligence",
            description: "Advanced analytics and machine learning models delivering actionable insights from complex data.",
          },
          {
            icon: <Users />,
            title: "Strategic Partnerships",
            description: "Collaborating with industry leaders including Google, NVIDIA, and enterprise clients.",
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

