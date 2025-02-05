import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FlyoutContent from '../components/flyoutContent'
import FlyoutLink from '../components/flyoutlink'
import Container from '../components/container'
import { NavLink } from 'react-router-dom'

// const imageArray = [
//     { src: "/PortfolioPic.jpeg", alt: "me" },
//     { src: "/babaWife.png", alt: "my wife and grandpa" },
//     { src: "/danishOmo.jpeg", alt: "danish and omo" },
//     { src: "/family-1.jpeg", alt: "family" },
//     { src: "/monopoly.jpeg", alt: "monopoly" },
//     { src: "/smiley.jpeg", alt: "sniley"},
//     { src: "/vaccum.png", alt: "vaccum" },
//     { src: "/grill.jpeg", alt: "grill" },
//     { src: "/teaching-2.jpg", alt: "teaching" },
// ]
const aboutMe = FlyoutContent({info: "info" })
const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Add refs for each section
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    // Scroll function
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
        if (ref.current) {
            const yOffset = -110;
            const element = ref.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            setActiveSection(sectionName);
        }
    };

    const sections = [
        {
            title: "About Me",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Education",
            content: (
                <Container 
                    leftContent={
                        <>
                            <h3 className="text-xl font-semibold mb-2">Bachelor's in Computer Science</h3>
                            <p className="text-gray-700">University of California, Los Angeles</p>
                            <p className="text-gray-600">2018 - 2022</p>
                        </>
                    }
                    rightContent={
                        <>
                            <h3 className="text-xl font-semibold mb-2">Relative Coursework</h3>
                            <p className="text-gray-700">Data Structures</p>
                            <p className="text-gray-700">Algorithms</p>
                            <p className="text-gray-700">Computer Organization</p>
                            <p className="text-gray-700">Operating Systems</p>
                            <p className="text-gray-700">Computer Networks</p>
                        </>
                    }
                />
            )
        },
        {
            title: "Skills",
            content: (
                <div className="flex flex-col w-full gap-4">
                    <Container
                        leftContent={
                            <>
                                <h3 className="text-xl font-semibold mb-2">Bachelor's in Computer Science</h3>
                                <p className="text-gray-700">University of California, Los Angeles</p>
                                <p className="text-gray-600">2018 - 2022</p>
                            </>
                        }
                        rightContent={
                            <>
                                <h3 className = "text-xl font-semibold mb-2">Relative Coursework</h3>
                                <p className="text-gray-700">Data Structures</p>
                                <p className="text-gray-700">Algorithms</p>
                                <p className="text-gray-700">Computer Organization</p>
                                <p className="text-gray-700">Operating Systems</p>
                                <p className="text-gray-700">Computer Networks</p>
                            </>
                        }
                    />
                    <Container
                        leftContent={
                            <>
                                <h3 className="text-xl font-semibold mb-2">Bachelor's in Computer Science</h3>
                                <p className="text-gray-700">University of California, Los Angeles</p>
                                <p className="text-gray-600">2018 - 2022</p>
                            </>
                        }
                        rightContent={
                            <>
                                <h3 className = "text-xl font-semibold mb-2">Relative Coursework</h3>
                                <p className="text-gray-700">Data Structures</p>
                                <p className="text-gray-700">Algorithms</p>
                                <p className="text-gray-700">Computer Organization</p>
                                <p className="text-gray-700">Operating Systems</p>
                                <p className="text-gray-700">Computer Networks</p>
                            </>
                        }
                    />

                  
                </div>
                
            )
        },
        {
            title: "Experience",
            content: "Worked on various projects..."
        }
    ];

    return (
        <div className="pt-54 pl-15 flex flex-col">
            <div className="flex justify-center pl-24">
                <h1 className="text-4xl font-bold -ml-28">Hello!</h1>
            </div>
            <div className="flex justify-start pl-24 mt-6 gap-8">
                <div className="sticky top-28 h-fit">
                    <Image src="/PortfolioPic.jpeg" alt="me" width={350} height={400} 
                        className="rounded-full object-cover w-[380px] h-[380px] border-2 border-black" 
                    /> 
                    <ul className="flex flex-col gap-4 mt-6">
                        <li>
                            <NavLink 
                                to="#aboutMe"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if(aboutMeRef.current){
                                        scrollToSection({current: aboutMeRef.current}, "aboutMe");
                                    }
                                }}
                                className={
                                    `text-lg transition-colors text-black  hover:text-blue-500`
                                }
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="#education"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (educationRef.current) {
                                        scrollToSection({ current: educationRef.current }, "education");
                                    }
                                }}
                                className={
                                    `text-lg transition-colors text-black  hover:text-blue-500`
                                }
                            >
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="#skills"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if(skillsRef.current){
                                        scrollToSection({current: skillsRef.current}, "skills");
                                    }
                                }}
                                className={({ isActive }) => 
                                    `text-lg transition-colors text-black hover:text-blue-500`
                                }
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="#experience"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if(experienceRef.current){
                                        scrollToSection({current: experienceRef.current}, "experience");
                                    }
                                }}
                                className={({ isActive }) => 
                                    `text-lg transition-colors text-black hover:text-blue-500`
                                }
                            >
                                Experience
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-16 pb-20 flex-1 mr-24">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            ref={
                                section.title === "Education" ? educationRef :
                                section.title === "Skills" ? skillsRef :
                                section.title === "Experience" ? experienceRef :
                                section.title === "About Me" ? aboutMeRef :
                                null
                            }
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gradient-to-b from-white to-pink-100 rounded-2xl p-6 shadow-md"

                        >
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <div className="text-lg">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About