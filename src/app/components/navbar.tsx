import React, { useRef } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import Image from 'next/image';



const Navbar = () => {
    const location = useLocation();

    const getLinkClass = (hash: string) => {
        return location.hash === hash ? "text-blue-500" : "text-black";
    };
    
    const sideMenuRef = useRef<HTMLUListElement>(null); 

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)'
            document.body.style.overflow= 'hidden'; 
            setIsMenuOpen(true);
        }
    }
    const closeMenu =() => {
        if(sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(100%)'
            document.body.style.overflow='auto';
            setIsMenuOpen(false);
        }
    }

    return (
        <div >
            {/* Name/logo */}
            <nav className="w-full fixed flex px-5 lg:px-8 xl-px=[8%] py-4 items-center justify-between z-50 text-lg gap-7 font-medium m-4">
                <header className="w-32 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                    <NavLink to="#top" smooth className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                        YUNUS
                    </NavLink>
                </header>
                {/* middle navbar */}
                <ul className="hidden lg:flex gap-6 lg:gap-10 justify-center rounded-lg bg-white items-center font- shadow-md w-120 h-12 ml-10 ">
                    <NavLink to="#About" smooth className={getLinkClass("#About")}>
                        About
                    </NavLink>
                    <NavLink to="#Experience" smooth className={getLinkClass("#Experience")}>
                        Experience
                    </NavLink>
                    <NavLink to="#Projects" smooth className={getLinkClass("#Projects")}> 
                        Projects
                    </NavLink>
                </ul>
                {/* right navbar */}
                <div className = "flex items-center gap-4">
                    <button>
                        <Image src ="/moon_icon.png" alt ="moon_icon " width={24} height ={24} className= "cursor-pointer"/>
                    </button>
                    <NavLink to="#Contact" smooth className="w-44 h-10 rounded-lg bg-white items-center justify-center hidden lg:flex font-bold shadow-md
                        bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                        CONTACT
                    </NavLink>
                    <button onClick={openMenu} className='block lg:hidden mr-3'>
                        <Image src ="/menu-black.png" alt ="menu" width={24} height ={24} className= "cursor-pointer"/>
                    </button>
                </div>
               

                {/* mobile */}

                <ul ref={sideMenuRef} className="flex lg:hidden gap-4 flex-col py-20 px-10 fixed right-0 top-0 bottom-0 
                w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 transform translate-x-full">
                    <div className= "absolute left-6 top-6">
                        <button onClick={closeMenu}>
                            <Image src ="/right-arrow-bold.png" alt ="exit " width={24} height ={24} className= "cursor-pointer"/>
                        </button>
                    </div>
                    <NavLink to="#Home" smooth onClick={closeMenu} className={getLinkClass("#Home")}>
                        Home
                    </NavLink>
                    <NavLink to="#About" smooth onClick={closeMenu} className={getLinkClass("#About")}>
                        About
                    </NavLink>
                    <NavLink to="#Experience" smooth onClick={closeMenu} className={getLinkClass("#Experience")}>
                        Experience
                    </NavLink>
                    <NavLink to="#Projects" smooth onClick={closeMenu} className={getLinkClass("#Projects")}> 
                        Projects
                    </NavLink>
                    <NavLink to="#Contact" smooth onClick={closeMenu} className={getLinkClass("#Contact")}>
                        Contact
                    </NavLink>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;