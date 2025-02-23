"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const handleContact = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdkP2Filnt7BhXAgvOmkgEKVWIP3077PhHiAYm-MvjHDKuRNg/viewform"
  }

  return (
    <div className="min-h-screen bg-[#030303] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Book a Demo</h1>
          <p className="text-lg text-white/60 mb-8">
            Get in touch with our team to see how CyberHope.ai can transform your AI capabilities.
          </p>
          <Button
            onClick={handleContact}
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg"
          >
            Open Contact Form
          </Button>
        </div>
      </div>
    </div>
  )
} 