import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';

export const Project_temp = ({ projectCards }: { projectCards: ProjectType[] }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-b from-pink-100 to-white">
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                <motion.div style={{x}} className="flex gap-56">
                    {projectCards.map((card) => (
                        <ProjectCard key={card.title} projectCard={card} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export const ProjectCard = ({ projectCard }: { projectCard: ProjectType }) => {
    return (
      <div 
        className="group relative h-[500px] w-[900px] overflow-hidden rounded-2xl shadow-md"
        style={{
          backgroundImage: "url('/header-bg-color.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col gap-4 p-8">
            <div className="flex justify-left gap-8">
                <div className="flex flex-col gap-4">
                    <Image 
                        src={projectCard.image} 
                        alt={projectCard.title} 
                        onClick={() => window.open(projectCard.url, '_blank')}
                        width={400}
                        height={220}
                        className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                        style={{ minWidth: "400px", minHeight: "220px", maxWidth: "400px", maxHeight: "220px" }}
                    />
                    
                    <div className="grid grid-cols-2 gap-2">
                        {projectCard.tools.map((tool, index) => (
                            <div 
                                key={`${projectCard.title}-${tool}-${index}`}
                                className="rounded-full bg-white items-center justify-center flex font-medium shadow-sm px-2 py-1 text-sm"
                            >
                                <div className="text-xs bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-center">
                                    {tool}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                    <h1 className="text-xl font-bold">{projectCard.title}</h1>
                    <ul className="list-disc list-inside space-y-1.5 text-sm">
                        {projectCard.description?.map((desc, index) => (
                            <li key={index} className="text-gray-700">{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
};

type ProjectType = {
    url: string;
    title: string;
    image: string;
    description: string[];
    tools: string[];
  };