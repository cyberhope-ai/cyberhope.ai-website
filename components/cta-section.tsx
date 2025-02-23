import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
}

export function CTASection({ title, description, buttonText }: CTASectionProps) {
  return (
    <div className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{description}</p>
        <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

