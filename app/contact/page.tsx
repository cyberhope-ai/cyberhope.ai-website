"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here we'll add the form submission logic after Netlify deployment
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you as soon as possible.",
    })
  }

  return (
    <div className="min-h-screen bg-[#030303] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Book a Demo</h1>
          <p className="text-lg text-white/60">
            Get in touch with our team to see how CyberHope.ai can transform your AI capabilities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              required
              className="bg-white/10 border-white/20 text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              className="bg-white/10 border-white/20 text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              Company
            </label>
            <Input
              id="company"
              type="text"
              className="bg-white/10 border-white/20 text-white"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <Textarea
              id="message"
              required
              className="bg-white/10 border-white/20 text-white min-h-[150px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-white text-black hover:bg-white/90"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
} 