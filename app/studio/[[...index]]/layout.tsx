export const metadata = {
  title: 'CyberHope.ai Studio',
  description: 'Content management for CyberHope.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 