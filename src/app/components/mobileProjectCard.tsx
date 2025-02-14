import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MobileProjectCard = ({ projectCards }: { projectCards: ProjectType[] }) => {
    return (
        <div className="flex flex-col gap-8 px-4">
            {projectCards.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-b from-white to-pink-100 rounded-2xl p-6 shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-4">v Click Image v</p>
                    <Image 
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={220}
                        className="rounded-lg object-cover w-full mb-4 cursor-pointer hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(project.url, '_blank')}
                    />
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, i) => (
                            <span 
                                key={i}
                                className="bg-white px-3 py-1 rounded-full text-sm shadow-sm bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        {project.description.map((desc, i) => (
                            <li key={i} className="text-gray-700">{desc}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
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

export default MobileProjectCard;
