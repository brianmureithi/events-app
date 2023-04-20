import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Head>
      <title>Events App</title>
      <meta name="description"  content="Events website" />
      <link rel="icon" href=""/>
    </Head>
    <header>
      <nav>
        <img/>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About us</Link>

      </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    </main>
    <footer>
      <p>&copy; Project using nextjs</p>

    </footer>
    </>
  )
}
