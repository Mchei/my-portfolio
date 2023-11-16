import Hero from '@/components/Hero'
import Image from 'next/image'
import { Container } from 'postcss'
import { Navbar } from '@/components'
import About from '@/components/About'
import MyProject from '@/components/project/MyProject'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-12">
        <Hero />
        <About />
        <MyProject />
        <Footer />
      </div>
      
    </main>
  )
}
