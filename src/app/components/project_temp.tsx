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
        className="group relative h-[500px] w-[800px] overflow-hidden rounded-2xl shadow-md"
        style={{
          backgroundImage: "url('/header-bg-color.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col gap-8 p-8">
            {/* Image Section */}
            <div className="flex justify-left gap-8">
                <Image 
                    src={projectCard.image} 
                    alt={projectCard.title} 
                    onClick={() => window.open(projectCard.url, '_blank')}
                    width={250}
                    height={150}
                    className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                />
                {/* Description Section */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{projectCard.title}</h1>
                    <ul className="list-disc list-inside space-y-2">
                        {projectCard.description?.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Tools Section */}
            <div className="w-1/2">
                <div className="grid grid-cols-2 gap-4">
                    {projectCard.tools.map((tool) => (
                        <div 
                            key={tool}
                            className="rounded-full bg-white items-center justify-center flex font-bold shadow-md"
                        >
                            <div 
                                className="text-sm text bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text px-2 py-1 text-center"
                            >
                                {tool}
                            </div>
                        </div>
                    ))}
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