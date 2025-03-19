import { ReactNode } from "react"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  description: string
  features: Feature[]
}

export function FeatureSectionCustom({ title, description, features }: FeatureSectionProps) {
  return (
    <section className="py-24 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">{title}</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 