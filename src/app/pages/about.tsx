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
            content: "I'm Yunus Kocaman, a computer science student at Brandeis University with a passion for software engineering and machine learning/AI. As cliche as it sounds, I make it a goal to learn something new every day, not just in tech, but also in fields like history, theology, and philosophy. Right now, I'm diving into audio classification and speech recognition, working on training an ML model to recognize Arabic Maqamat, a project that perfectly blends my love for technology and Arabic melodies. Outside of coding, I enjoy playing basketball with friends, cooking a ribeye, and teaching others, whether it's about programming, theology or just life in general. I'm always looking for new challenges and ways to apply technology to the world around me. Feel free to reach out! I'd love to connect!"
        },
        {
            title: "Experience",
            content: (
                <div className="flex flex-col gap-4">
                    <Container
                        title="Data Engineering Intern, Pioneer Charter School of Science, July. 2025 – Present"
                        content={[
                            ["Site-to-site VPN", "StrongSwan on EC2", "Automated daily PowerSchool → S3 transfers"],
                            ["AWS Glue ETL", "Configured ETL jobs", "Eliminated manual exports"],
                            ["Pipeline Monitoring", "CloudWatch & S3 metrics", "Ensured high availability"],
                            ["SQL Queries", "Developed & optimized", "Extracted & transformed datasets"],
                            ["QuickSight Dashboards", "Populated visualizations", "Cut report time from ~30 min to < 1 min"]
                        ]}
                    />
                    <Container
                        title= "Boston Education & Counseling / Youth Mentor, Sep. 2022 – Present"
                        content={[
                            [
                            "Mentored and Supervised 30+ Students",
                            "Provided weekly academic, social, and spiritual guidance to middle and high school students"
                            ],
                            [
                            "Led a Team of 7 Mentors",
                            "Managed and mentored a team of seven to support student development"
                            ],
                            [
                            "Facilitated 15+ Youth Retreats",
                            "Organized and led 7–10 day retreats focused on personal growth, leadership, and mentorship"
                            ]
                        ]}
                    />
                </div>
            )
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
                            ["CS Courses", "Data Structures and Algorithms", "OOP", "Python", "Operating Systems", "Embedded Systems", "Fundamentals of Software Engineering", "Intro to Computer Security"], 
                            ["ML Courses", "Intro to Machine Learning", "NLP"], 
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
                        content={[[null, "Java", "Python", "C", "JavaScript/TypeScript", "Swift", "SQL"]]} 
                    />
                    <Container 
                        title="Full Stack Development" 
                        content={[["Frontend", "Next.js", "React", "HTML/CSS/Tailwind", "JUnit"], 
                        ["Backend", "Node.js", "Flask"], 
                        ["Cloud Services & Databases", "CosmosDB","MongoDB","Firebase,","AWS", "Azure", "PostgreSQL", "SQLite"]]} 
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