import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FlyoutContent from '../components/flyoutContent'
import Container from '../components/container'
import { NavLink } from 'react-router-dom'

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
            content: "I'm Yunus Kocaman, a computer science student at Brandeis University with a passion for software engineering and machine learning/AI. As cliché as it sounds, I make it a goal to learn something new every day—not just in tech, but also in fields like history, theology, and philosophy. Right now, I'm diving into audio classification and speech recognition, working on training an ML model to recognize Arabic Maqamat—a project that perfectly blends my love for technology and Arabic melodies. Outside of coding, I enjoy playing basketball with friends, trying new foods, and teaching others—whether it's about programming or just life in general. I'm always looking for new challenges and ways to apply technology to the world around me. Feel free to reach out—I'd love to connect!"
        },
        {
            title: "Education",
            content: (
                <Container 
                    leftContent={
                        <>
                            <h3 className="text-xl font-semibold mb-2">Bachelor's of Science in Computer Science</h3>
                            <p className="text-gray-700">Brandeis University</p>
                            <p className="text-gray-600">2022-2026</p>
                        </>
                    }
                    rightContent={
                        <>
                            <h3 className="text-xl font-semibold mb-2">Relative Coursework</h3>
                            <h4 className="text-lg font-semibold mb-2">CS Courses</h4>
                            <p className="text-gray-700"> Data Structures and Algorithms</p>
                            <p className="text-gray-700">OOP</p>
                            <p className="text-gray-700">Python</p>
                            <p className="text-gray-700"> Operating Systems</p>
                            <p className="text-gray-700">Embedded Systems</p>
                            <p className="text-gray-700">Fundementals of Software Engineering</p>
                            <h4 className="text-lg font-semibold mb-2">ML Courses</h4>
                            <p className="text-gray-700">Intro to Computer Secuirty</p>
                            <p className="text-gray-700">Intro to Machine Learning</p>
                            <p className="text-gray-700">NLP</p>
                            <h4 className="text-lg font-semibold mb-2">Math Courses</h4>
                            <p className="text-gray-700">Intro to Probability & Statistics</p>
                            <p className="text-gray-700">Calculus I</p>
                            <p className="text-gray-700">Linear Algebra</p>
                            <p className="text-gray-700">Discrete Structures</p>
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
                                <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                                <p className="text-gray-700">Java</p>
                                <p className="text-gray-600">Python</p>
                                <p className="text-gray-600">C</p>
                                <p className="text-gray-600">JavaScript/TypeScript</p>
                                <p className="text-gray-600">Swift</p>

                            </>
                        }
                        rightContent={
                            <>
                                <h3 className = "text-xl font-semibold mb-2">Full Stack Development</h3>
                                <h4 className="text-lg font-semibold mb-2">Frontend</h4>
                                <p className="text-gray-700">Next.js</p>
                                <p className="text-gray-700">React</p>
                                <p className="text-gray-700">HTML/CSS</p>
                                <p className="text-gray-700">Tailwind CSS</p>
                                <h4 className="text-lg font-semibold mb-2">Backend</h4>
                                <p className="text-gray-700">Node.js</p>
                                <p className="text-gray-700">Flask</p>
                                <h4 className="text-lg font-semibold mb-2">Cloud Services & Databases</h4>
                                <p className="text-gray-700">CosmosDB</p>
                                <p className="text-gray-700">Azure</p>
                            </>
                        }
                    />
                    <Container
                        leftContent={
                            <>
                                <h3 className="text-xl font-semibold mb-2">Machine Learning & Data Science</h3>
                                <h4 className="text-lg font-semibold mb-2">Data Processing & Visualization</h4>
                                <p className="text-gray-700">Pandas</p>
                                <p className="text-gray-700">NumPy</p>
                                <p className="text-gray-700">Matplotlib</p>
                                <p className="text-gray-700">Seaborn</p>
                                <h4 className="text-lg font-semibold mb-2">Frameworks & libraries</h4>
                                <p className="text-gray-700">Scikit-Learn</p>
                                <p className="text-gray-700"> Imbalanced-lear</p>
                            </>
                        }
                        rightContent={
                            <>
                                <h3 className="text-xl font-semibold mb-2">DevOps & Development Tools</h3>
                                <h4 className="text-lg font-semibold mb-2">Version Control</h4>
                                <p className="text-gray-700">Git</p>
                                <p className="text-gray-700">GitHub</p>
                                <p className="text-gray-700">Matplotlib</p>
                                <p className="text-gray-700">Seaborn</p>
                                <h4 className="text-lg font-semibold mb-2">Infrastructure & Deployment</h4>
                                <p className="text-gray-700">Docker</p>
                                <p className="text-gray-700">Azure</p>
                            </>
                        }
                    />

                  
                </div>
                
            )
        },
        {
            title: "Experience",
            content: (
                <>
                    <ul className="">
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Boston Education and Counseling/Youth Mentor</h3>
                        </li>
                        <li>
                            <span className="text-black font-bold">Mentored and Supervised 30+ Students: </span>Provide weekly academic, social, and spiritual guidance to middle
                            and high school students, ensuring comprehensive support
                        </li>
                        <li>
                            <span className="text-black font-bold">Led a group of 7 Mentors: </span>Manage and mentor a team of five, equipping them with effective strategies to
                            support student development
                        </li>
                        <li>
                            <span className="text-black font-bold">Facilitated 15+ Youth Retreats: </span>Organized and led 7 to 10 day retreats focused on personal growth, leadership,
                        </li>
                    </ul>
                </>
            )
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