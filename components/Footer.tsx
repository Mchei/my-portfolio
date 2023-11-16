import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

function Footer() {
  return (
    <footer className='flex flex-col text-black-100 bg-[#121212]'>
        <div className='flex justify-between items-center flex-wrap mt-10 sm:px-16 px-6 py-10'>
            <p className='text-white'>@ 2023 Michael</p>
            <div className='flex gap-5'>
                <Link href='#about' className='text-gray-500'>About</Link>
                <Link href='#myproject' className='text-gray-500'>My Projects</Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer