interface TextSectionProps {
  title: string
  description: string
  align?: "left" | "center" | "right"
  theme?: "light" | "dark"
}

export function TextSection({ title, description, align = "left", theme = "dark" }: TextSectionProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const themeClass = theme === "light" ? "bg-white text-black" : "bg-black text-white"

  return (
    <div className={`py-20 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto ${alignClass[align]}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl opacity-70">{description}</p>
        </div>
      </div>
    </div>
  )
}

