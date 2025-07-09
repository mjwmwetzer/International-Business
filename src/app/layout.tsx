import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marko Wetzer - Informatie',
  description: 'Informatie over Marko Wetzer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning={true}>
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
} 