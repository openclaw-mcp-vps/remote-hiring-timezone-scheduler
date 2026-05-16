import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeZone Scheduler — Schedule interviews across global timezones',
  description: 'Finds optimal interview times for remote hiring across multiple timezones with candidate availability tracking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9f73edec-743c-4420-a1d3-52dba1e36431"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
