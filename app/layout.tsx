import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bizyness — VAT compliant accounting for e-commerce',
  description:
    'Automate your accounting, VAT (OSS/IOSS) and exports. 100% compliant, 0 headcount. Approved by accountants.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
