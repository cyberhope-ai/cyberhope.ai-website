import HeroGeometric from "@/components/hero-geometric"
import { CTASection } from "@/components/cta-section"
import { TextSection } from "@/components/text-section"
import { FeatureSection } from "@/components/feature-section"
// import { VideoSection } from "@/components/video-section"
import { AvatarSection } from "@/components/avatar-section"
import { Database, Cloud, Shield, Zap, BarChartIcon as ChartBar, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black">
      <HeroGeometric />
      
      <TextSection
        title="Your New AI Partner"
        description="CyberHope AI Engine helps businesses of all sizes leverage artificial intelligence to gain competitive advantage and transform operations with ease."
        align="center"
      />

      <AvatarSection />

      {/* Video section removed to fix error */}
      
      <FeatureSection
        title="Why Choose CyberHope AI"
        description="Our platform offers a comprehensive suite of AI-powered tools and services to meet your enterprise needs."
        features={[
          {
            icon: <Database />,
            title: "Data Processing",
            description: "Efficiently process and analyze large datasets with our advanced algorithms.",
          },
          {
            icon: <Cloud />,
            title: "Cloud Integration",
            description: "Seamlessly integrate with major cloud providers for scalable AI operations.",
          },
          {
            icon: <Shield />,
            title: "Enterprise Security",
            description: "Ensure your data and models are protected with our robust security measures.",
          },
        ]}
      />

      <TextSection
        title="Start Your AI Journey"
        description="Join the ranks of industry leaders who have transformed their operations with CyberHope AI."
        align="center"
        theme="dark"
      />

      <CTASection
        title="Transform Your Business Today"
        description="Get started with CyberHope AI and discover how our tailored solutions can boost your productivity and drive innovation."
        buttonText="Contact Us →"
      />
    </main>
  )
}

