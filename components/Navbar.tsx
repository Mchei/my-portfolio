'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from '.';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'My Project', href: '#myproject' },
    // Add more links as needed
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-5 right-5 z-10 bg-[#121212] bg-opacity-80'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-12'>
        <Link className='text-2xl md:text-5xl text-white font-semibold' href='/'>
            Michael Chan
        </Link>
        <div className='mobile-menu md:hidden'>
            {!isMenuOpen ? (
                <button onClick={() => setIsMenuOpen(true)} 
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                    <Bars3Icon className="h-5 w-5"/>
                </button> )
                :<button onClick={() => setIsMenuOpen(false)} 
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                    <XMarkIcon className="h-5 w-5" />
                </button>
            }
        </div>

        <div className='menu block md:w-auto max-sm:hidden max-md:hidden' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {isMenuOpen?(<button onClick={() => setIsMenuOpen(false)} 
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white'>
                    <XMarkIcon className="h-5 w-5" />
                </button>):
                navLinks.map((link) => (
                    <li key={link.title}>
                        <NavLink href={link.href} title={link.title}></NavLink>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      {isMenuOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>

  );
};

export default Navbar;
