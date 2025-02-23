import type { ReactNode } from "react"

interface FeatureSectionProps {
  title: string
  description: string
  features: { icon: ReactNode; title: string; description: string }[]
}

export function FeatureSection({ title, description, features }: FeatureSectionProps) {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4 text-indigo-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

