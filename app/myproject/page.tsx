import { Navbar } from '@/components'
import { MyProject } from '@/components/project'
import React from 'react'

export default function ProjectPage() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto py-4">
            <MyProject />
        </div>
        
      </main>
    )
  }