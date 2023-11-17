'use client';
import React, { MouseEventHandler, useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "Car Showcase | 2023",
        description: "This is a practice project, created with Next.js, Tailwindcss, TypeScript, React.js, and used Headlessui",
        image: 'carshowcase.png',
        link: 'https://github.com/Mchei/Practice_carshowcase',
        tag: ["All","Web"],
    },
    {
        id: 2,
        title: "My Protfolio | 2023",
        description: 
        "This is a protfolio website for my previous work and future works as well. "+
        "The website is created with Next.js, Tailwindcss, TypeScript, React.js",
        image: 'portfolio.png',
        link: '/',
        tag: ["All","Web"],
    },
    {
        id: 3,
        title: "iprintnet.com.hk | 2019",
        description: "This is a work project I worked on in 2019, and provided support until 2020. This website is created with Wordpress, also implemented WooCommerce.",
        image: 'iprintnet.png',
        link: 'https://iprintnet.com.hk/',
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "unoparts.com.au | 2021",
        description: "This is a work project I worked on in 2021, and provided support until 2022. This website is created with Magento 2.0 (now Adobe Commerce), with ERP Plugin.",
        image: 'hero.jpg',
        link: 'https://unoparts.com.au',
        tag: ["All", "Web"],
    },    
    {
        id: 5,
        title: "SQL Checker | 2021",
        description: "This is a final year project I worked on in 2021. This software is created with C#, could check SQL Queries and mark scores and export into an excel file.",
        image: 'sqlchecker.png',
        link: 'https://github.com/Mchei/SQLChecker2021',
        tag: ["All", "Desktop"],
    },
    {
        id: 6,
        title: "Business Analyst Project with Prototype and Solution | 2022",
        description: "This is a final year project I worked on in 2022 for The Australian Muscle Car Club of South Australia. "+
                    "This project provided a detailed solutions and recommendations for them to transforming from a paper-based system to an automation system.",
        image: 'report.png',
        link: 'Car-System-Report.pdf',
        tag: ["All", "IT Solution"],
    },
    {
        id: 7,
        title: "Game Assistance Software | 2012",
        description: "This is a hobby project I worked on 2012."+
                    "This project provided a solution for players to gain some advantages in-game.",
        image: 'hero.jpg',
        link: '/',
        tag: ["All", "Desktop"],
    },
    {
        id: 8,
        title: "Business Analyst Project with Solution (Reservation) | 2022",
        description: "This is a work project I worked on in 2022 for iDarts Adelaide. "+
                    "This project provided a detailed solutions and recommendations for them to transforming from a paper-based reservation system to an online reservation system.",
        image: 'idartsrev.png',
        link: 'https://idartsadelaide.resos.com/booking',
        tag: ["All", "IT Solution"],
    },    
    {
        id: 9,
        title: "Karaoke System Maintaince and Server Upgrade | 2020 - 2022",
        description: "This is a work project I worked on in 2022 for iDarts Adelaide "+
                    "This project is a continuous project since 2020 to 2022, including Windows Server 2008 Maintaince and switch Karaoke System with local Database transfer and setup. ",
        image: 'hero.jpg',
        link: 'https://www.idarts.com.au/',
        tag: ["All", "Server"],
    },
    {
        id: 10,
        title: "Game Server Maintaince | 2021 - 2022",
        description: "This is a hobby project I worked on in 2021 to 2022 "+
                    "This project is a Minecraft Cloud Server running on Google Cloud. ",
        image: 'hero.jpg',
        link: '/',
        tag: ["All", "Server"],
    },
];

const MyProject = () => {
    const [tag, setTag] = useState("All");
  
    // Adjust the type of handleTagChange
    const handleTagChange: MouseEventHandler<HTMLButtonElement> = (event) => {
      const newTag = event.currentTarget.innerText;
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    return (
      <>
        <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6" id="myproject">
           <ProjectTag 
                onClick={handleTagChange} 
                tag="All" 
                isSelected = {tag === "All"}/> 
            <ProjectTag 
                onClick={handleTagChange} 
                tag="Web" 
                isSelected = {tag === "Web"}/> 
            <ProjectTag 
                onClick={handleTagChange} 
                tag="Desktop" 
                isSelected = {tag === "Desktop"}/> 
            <ProjectTag 
                onClick={handleTagChange} 
                tag="IT Solution" 
                isSelected = {tag === "IT Solution"}/> 

            <ProjectTag 
                onClick={handleTagChange} 
                tag="Server" 
                isSelected = {tag === "Server"}/> 

          
          {/* Add more ProjectTag components as needed */}
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-12 flex-auto ">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              link={project.link}
            />
          ))}
        </div>
      </>
    );
  };
  
  export default MyProject;
