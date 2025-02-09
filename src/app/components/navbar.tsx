"use client";
import React, { useRef } from 'react';
import Image from 'next/image';



const Navbar = () => {
    
    const sideMenuRef = useRef<HTMLUListElement>(null); 
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)';
            if (typeof document !== 'undefined') {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            }
            setIsMenuOpen(true);
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(100%)';
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
            setIsMenuOpen(false);
        }
    };

    const scrollToSection = (id: string) => {
        if (typeof document !== 'undefined') {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      return (
        <div className="w-full h-21 bg-[url('/header-bg-color.png')] bg-cover bg-no-repeat fixed top-0 left-0 z-50 overflow-x-hidden">
          <nav className="w-full flex px-4 sm:px-8 lg:px-8 xl:px-[8%] py-4 items-center justify-between text-lg gap-7 font-medium m-4">
            <header className="w-32 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
              <a href="#top" className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                YUNUS
              </a>
            </header>
    
            <ul className="hidden lg:flex gap-6 lg:gap-10 justify-center rounded-lg bg-white items-center shadow-md w-96 h-12 ml-10">
              {['top', 'about', 'projects'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`}
                  className="text-black hover:text-blue-500"
                >
                  {section === 'top' ? 'Home' : 
                   section === 'about' ? 'About Me' : 
                   'Projects'}
                </a>
              ))}
            </ul>
    
            <div className="flex items-center gap-4">
              <a 
                href="#contact"
                className="w-44 h-10 rounded-lg bg-white items-center justify-center hidden lg:flex font-bold shadow-md bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
              >
                CONTACT
              </a>
              <button onClick={openMenu} className='block lg:hidden mr-4'>
                <Image src="/menu-black.png" alt="menu" width={24} height={24} className="cursor-pointer"/>
              </button>
            </div>
          </nav>

          <ul ref={sideMenuRef} className="flex lg:hidden gap-4 flex-col py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen  bg-gradient-to-b from-pink-100 to-white transition-transform duration-500 transform translate-x-full">
            <div className="absolute left-6 top-6">
              <button onClick={closeMenu}>
                <Image src="/right-arrow-bold.png" alt="exit" width={24} height={24} className="cursor-pointer"/>
              </button>
            </div>
            {['top', 'about', 'experience', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={closeMenu}
                className="text-black hover:text-blue-500 justify-left"
              >
                {section === 'top' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </ul>
        </div>
      );
};

export default Navbar;