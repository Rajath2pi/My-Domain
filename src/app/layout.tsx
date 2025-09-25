import './globals.css';

export const metadata = {
  title: 'Rajath R Patil',
  description: 'Rajath R Patil Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        <main>{children}</main>
      </body>
    </html>
  )
}
