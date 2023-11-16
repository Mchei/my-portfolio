'use client';
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const Tab_Data = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='font-style: italic'>
                <li>Next.js, Tailwindcss</li>
                <li>MySQL, SQL</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Visual Basic 6</li>
                <li>CSS, HTML</li>
                <li>Magento (Adobe Commerce) </li>
                <li>Wordpress, WooCommerce </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul>
                <li>
                    <p className='font-bold'>Bachelor of Information Technology, </p> 
                    <p className='font-style: italic'>University of South Australia</p></li>
                <li>
                    <p className='font-bold'>Diploma of Information Technology, </p>  
                    <p className='font-style: italic'>South Australian Institute of Business and Technology</p>
                 </li>
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id);
        });
    };


  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:text-center sm:col-span-5' id="about">
            <Image src="/aboutme.png" width={700} height={700} alt={''} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About me</h2>
                <p className='text-base md:text-lg '>
                    Recent graduated with a degree in Information Technology. Experienced and willing to learn in front-end development. Highly motivated, skilled at problem solving and customer services. Can work well in a team and solo environment.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                </div>
                <div className='mt-8'>{Tab_Data.find((t) => t.id === tab)?.content} </div>
            </div>
        </div>
    </section>

    
  )
}

export default About
