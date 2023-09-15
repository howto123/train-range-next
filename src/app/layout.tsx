import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'train range',
	description: 'website that shows how far we can get by train',
}

export default function RootLayout({
 	children,
}: {
  	children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <main>
			<h1>the range of trains</h1>
			<hr />
			<Navbar />
			<hr/>
			<div className='children'>
				<AuthProvider>
					{children}
				</AuthProvider>
			</div>
			</main>
      </body>
    </html>
  )
}
