import './globals.css'

export const metadata = {
  title: 'Reece - Portfolio',
  description: 'Personal portfolio and freelancing services',
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/96705270?v=4',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
