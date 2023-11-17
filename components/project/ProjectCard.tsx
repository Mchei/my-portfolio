import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {CodeBracketIcon} from "@heroicons/react/24/outline"

const ProjectCard = (e:{ imgUrl:string, title:string, description:string, link:string }) => {
  return (
    <section className='py-5 sm:py-16'>
        <div className='h-52 md:h-52 rounded-t-xl relative group'>
                    <Image src = {e.imgUrl}
                            alt={e.title}
                            layout="fill"
                            objectFit="cover"
                            className='rounded-t-xl' />
                <div className='overlay absolute items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                  <Link href={e.link}
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white ">
                      <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 absolute cursor-pointer hover:text-white" />
                    </Link>
                </div>
            
            </div>
            <div className='text-white rounded-b-xl py-6 px-4 bg-[#181818]'>
                <h5 className='text-xl font-semibold mb-2'>{e.title}</h5>
                <p className='text-white '>{e.description}</p>
            </div>
    </section>
  )
}

export default ProjectCard