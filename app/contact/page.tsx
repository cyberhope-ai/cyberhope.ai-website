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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      })

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. We'll get back to you as soon as possible.",
          duration: 5000,
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
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

        {isSuccess ? (
          <div className="text-center bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Thank You! 🎉</h2>
            <p className="text-lg text-white/80 mb-6">
              Your message has been received. We'll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-white text-black hover:bg-white/90"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form
            name="contact"
            data-netlify="true"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-white/10 border-white/20 text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-white/10 border-white/20 text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                className="bg-white/10 border-white/20 text-white"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="bg-white/10 border-white/20 text-white min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-white text-black hover:bg-white/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
} 