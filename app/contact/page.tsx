"use client"

import { Nav } from "@/components/nav"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct mailto link with form data
    const subject = `CyberHope Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:rick@cyberhopeai.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-black pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Get in Touch</h1>
          
          <p className="text-lg text-gray-300 mb-12">
            Interested in pilots, partnerships, or apprenticeships? Contact us below.
          </p>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="text-center space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Email</h3>
                <a href="mailto:rick@cyberhopeai.com" className="text-gray-300 hover:text-cyan-400">
                  rick@cyberhopeai.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Location</h3>
                <p className="text-gray-300">Carmel, Indiana</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 