import HeroGeometric from "@/components/hero-geometric"
import { CTASection } from "@/components/cta-section"
import { TextSection } from "@/components/text-section"
import { FeatureSection } from "@/components/feature-section"
import { AvatarSection } from "@/components/avatar-section"
import { Database, Cloud, Shield } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black">
      <HeroGeometric />
      
      <TextSection
        title="Unlock the Power of AI"
        description="CyberHope AI Engine is designed to help enterprises harness the full potential of artificial intelligence, transforming raw data into actionable insights and powerful models."
        align="center"
      />

      <AvatarSection />
      
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
        title="Ready to Revolutionize Your Business?"
        description="Experience the power of CyberHope AI Engine firsthand. Schedule a demo today and see how our AI solutions can drive your business forward."
        buttonText="Book a Demo →"
      />
    </main>
  )
}

