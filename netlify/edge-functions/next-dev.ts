export interface Context {
  // Add any required context properties
  next: any;
}

export default async function handler(request: Request, context: Context) {
  // Only handle POST requests to the root path
  if (request.method !== "POST" || new URL(request.url).pathname !== "/") {
    return
  }

  try {
    const formData = await request.formData()
    
    // Handle form submission
    const response = await fetch(request.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(Object.fromEntries(formData) as any).toString(),
    })

    if (!response.ok) {
      throw new Error("Failed to submit form")
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/contact?success=true",
      },
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return new Response(null, {
      status: 303,
      headers: {
        Location: "/contact?error=true",
      },
    })
  }
} 