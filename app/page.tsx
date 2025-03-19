import HeroGeometric from "@/components/hero-geometric"
import { CTASection } from "@/components/cta-section"
import { TextSection } from "@/components/text-section"
import { FeatureSection } from "@/components/feature-section"
import { AvatarSection } from "@/components/avatar-section"
import { Database, Cloud, Shield } from "lucide-react"
import { getHero, getFeatures, getTextSections, getCta } from "@/lib/sanity-queries"

// Define types for our data
interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

// Since Next.js pages can be async, we can fetch data at render time
export default async function Home() {
  // Try to fetch data from Sanity
  let hero;
  let features;
  let textSections;
  let cta;
  
  try {
    hero = await getHero();
    features = await getFeatures();
    textSections = await getTextSections();
    cta = await getCta();
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    // If there's an error, we'll use fallback data
  }

  // First text section - use Sanity data if available
  const firstTextSection = textSections?.[0] || {
    title: "Unlock the Power of AI",
    description: "CyberHope AI Engine is designed to help enterprises harness the full potential of artificial intelligence, transforming raw data into actionable insights and powerful models.",
    align: "center"
  };

  // Second text section - use Sanity data if available
  const secondTextSection = textSections?.[1] || {
    title: "Start Your AI Journey",
    description: "Join the ranks of industry leaders who have transformed their operations with CyberHope AI.",
    align: "center",
    theme: "dark"
  };

  // Features section - use Sanity data if available
  const featuresData = features?.length > 0 ? features : [
    {
      icon: "Database",
      title: "Data Processing",
      description: "Efficiently process and analyze large datasets with our advanced algorithms.",
    },
    {
      icon: "Cloud",
      title: "Cloud Integration",
      description: "Seamlessly integrate with major cloud providers for scalable AI operations.",
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Ensure your data and models are protected with our robust security measures.",
    },
  ];

  // CTA section - use Sanity data if available
  const ctaData = cta || {
    title: "Ready to Revolutionize Your Business?",
    description: "Experience the power of CyberHope AI Engine firsthand. Schedule a demo today and see how our AI solutions can drive your business forward.",
    buttonText: "Book a Demo →"
  };

  // Helper function to get the right icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Database": return <Database />;
      case "Cloud": return <Cloud />;
      case "Shield": return <Shield />;
      default: return <Database />;
    }
  };

  return (
    <main className="bg-black">
      <HeroGeometric />
      
      <TextSection
        title={firstTextSection.title}
        description={firstTextSection.description}
        align={firstTextSection.align}
      />

      <AvatarSection />
      
      <FeatureSection
        title="Why Choose CyberHope AI"
        description="Our platform offers a comprehensive suite of AI-powered tools and services to meet your enterprise needs."
        features={featuresData.map((feature: FeatureData) => ({
          icon: getIconComponent(feature.icon),
          title: feature.title,
          description: feature.description,
        }))}
      />

      <TextSection
        title={secondTextSection.title}
        description={secondTextSection.description}
        align={secondTextSection.align}
        theme={secondTextSection.theme}
      />

      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
      />
    </main>
  )
}

