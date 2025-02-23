import { Nav } from "@/components/nav"
import HeroGeometric from "@/components/hero-geometric"
import { TextSection } from "@/components/text-section"
import { FeatureSection } from "@/components/feature-section"
import { CTASection } from "@/components/cta-section"
import { Database, Cloud, Shield, Zap, BarChartIcon as ChartBar, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <HeroGeometric />

      {/* Page 1 */}
      <TextSection
        title="Unlock the Power of AI"
        description="CyberHope AI Engine is designed to help enterprises harness the full potential of artificial intelligence, transforming raw data into actionable insights and powerful models."
        align="center"
      />
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

      {/* Page 2 */}
      <TextSection
        title="AI-Powered Solutions"
        description="Discover how CyberHope AI can transform your business operations and drive innovation across various industries."
        align="center"
        theme="dark"
      />
      <FeatureSection
        title="Industry Applications"
        description="Our AI solutions are tailored to meet the unique challenges of various sectors."
        features={[
          {
            icon: <Zap />,
            title: "Energy & Utilities",
            description: "Optimize energy distribution and predict maintenance needs with AI-driven insights.",
          },
          {
            icon: <ChartBar />,
            title: "Finance & Banking",
            description: "Enhance risk assessment and automate complex financial processes with our AI models.",
          },
          {
            icon: <Users />,
            title: "Healthcare",
            description:
              "Improve patient care and streamline operations with AI-powered diagnostic tools and resource management.",
          },
        ]}
      />

      {/* Page 3 */}
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

