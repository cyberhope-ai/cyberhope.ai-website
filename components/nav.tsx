import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-white">
          CyberHope
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-white hover:text-white/80">
            Products
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Enterprise
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/80">
            Log In
          </Button>
          <Button className="bg-white text-black hover:bg-white/90">Book a Demo →</Button>
        </div>
      </div>
    </header>
  )
}

