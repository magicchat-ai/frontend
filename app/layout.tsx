import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MagicChat',
  description: 'Create conversations that Kids love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* disabled Inter for now because of a chromium bug with font-weights */}
      {/* className={inter.className} */}
      <body >{children}</body>
    </html>
  )
}
