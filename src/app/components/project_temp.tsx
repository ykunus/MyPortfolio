import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import Image from 'next/image';

export const Project_temp = ({ projectCard }: { projectCard: ProjectType }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-b from-pink-100 to-white">
            <div className="sticky top-0 h-screen w-full flex items-center">
                <motion.div style={{x}} className="flex gap-10">
                    <ProjectCard projectCard={projectCard} />
                </motion.div>
            </div>
        </section>
    );
}

export const ProjectCard = ({ projectCard }: { projectCard: ProjectType }) => {
    const toolPairs = projectCard.tools.reduce((result: string[][], tool, index) => {
        if (index % 2 === 0) {
            result.push([tool]);
        } else {
            result[result.length - 1].push(tool);
        }
        return result;
    }, []);

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
            <div className="flex justify-left">
                <Image 
                    src={projectCard.image} 
                    alt={projectCard.title} 
                    width={250}
                    height={150}
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Tools Section */}
            <div className="grid grid-cols-2 gap-4">
                {toolPairs.map((pair, index) => (
                    <div key={index} className="flex flex-row gap-2">
                        {pair.map((tool) => (
                            <div key={tool} className="text-sm text-gray-500 rounded-full bg-gray-200 px-2 py-1">{tool}</div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Description Section */}
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{projectCard.description}</h1>
            </div>
        </div>
      </div>
    );
};

type ProjectType = {
    url: string;
    title: string;
    image: string;
    description: string;
    tools: string[];
  };