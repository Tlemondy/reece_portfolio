import './globals.css'

export const metadata = {
  title: 'Reece - Portfolio',
  description: 'Personal portfolio and freelancing services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
