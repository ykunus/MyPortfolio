"use client";
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../components/container'

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Add refs for each section
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    // Scroll function
    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sections = [
        {
            title: "About Me",
            content: "I'm Yunus Kocaman, a computer science student at Brandeis University with a passion for software engineering and machine learning/AI. As cliché as it sounds, I make it a goal to learn something new every day—not just in tech, but also in fields like history, theology, and philosophy. Right now, I'm diving into audio classification and speech recognition, working on training an ML model to recognize Arabic Maqamat—a project that perfectly blends my love for technology and Arabic melodies. Outside of coding, I enjoy playing basketball with friends, cooking a ribeye, and teaching others—whether it's about programming, theology or just life in general. I'm always looking for new challenges and ways to apply technology to the world around me. Feel free to reach out—I'd love to connect!"
        },
        {
            title: "Education",
            content: (
                <div className="flex flex-col gap-4">
                    <Container 
                        title="Bachelor's of Science in Computer Science" 
                        content={[["Brandeis University", "2022-2026"]]} 
                    />
                    <Container 
                        title="Relative Coursework" 
                        content={[
                            ["CS Courses", "Data Structures and Algorithms", "OOP", "Python", "Operating Systems", "Embedded Systems", "Fundamentals of Software Engineering"], 
                            ["ML Courses", "Intro to Computer Security", "Intro to Machine Learning", "NLP"], 
                            ["Math Courses", "Intro to Probability & Statistics", "Calculus I", "Linear Algebra", "Discrete Structures"]
                        ]} 
                    />
                </div>
            )
        },
        {
            title: "Skills",
            content: (
                <div className="flex flex-col gap-4">
                    <Container 
                        title="Programming Languages" 
                        content={[[null, "Java", "Python", "C", "JavaScript/TypeScript", "Swift"]]} 
                    />
                    <Container 
                        title="Full Stack Development" 
                        content={[["Frontend", "Next.js", "React", "HTML/CSS", "Tailwind CSS"], 
                        ["Backend", "Node.js", "Flask"], 
                        ["Cloud Services & Databases", "CosmosDB", "Azure"]]} 
                    />
                    <Container 
                        title="Machine Learning & Data Science" 
                        content={[["Data Processing & Visualization", "Pandas", "NumPy", "Matplotlib", "Seaborn"], 
                        ["Frameworks & libraries", "Scikit-Learn", "Imbalanced-learn"]]} 
                    />
                    <Container 
                        title="DevOps & Development Tools" 
                        content={[["Version Control", "Git", "GitHub"], 
                        ["Infrastructure & Deployment", "Docker", "Azure"]]} 
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
        <div className="mt-24 md:mt-32 px-4 md:px-24 flex flex-col">
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold">Hello!</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-start mt-6 gap-8">
                <div className="md:sticky md:top-28 h-fit flex justify-center md:block">
                    <Image 
                        src="/PortfolioPic.jpeg" 
                        alt="me" 
                        width={350} 
                        height={400} 
                        className="rounded-full object-cover w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-2 border-black" 
                    /> 
                    
                </div>

                {/* Mobile view */}
                <div className="sm:hidden">
                    <div className="flex flex-col gap-8 justify-center items-center">                 
                        {sections.map((section, index) => (
                            <motion.div 
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gradient-to-b from-white to-pink-100 rounded-2xl p-6 shadow-md w-full"
                            >
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                <div className="text-lg">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden sm:flex flex-col gap-16 pb-20 flex-1 mr-24 grid-cols-2">
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