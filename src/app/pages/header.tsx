import React, { useState } from 'react'
import Image from 'next/image'
import Typing from '../components/typing'
import { motion } from 'framer-motion'

const header = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showQualities, setShowQualities] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemQualities = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="pt-56 pl-24 flex flex-col items-center">
        <div className="w-full flex justify-between items-center">
            <div className="flex-1">
                <Typing onComplete={() => {
                    setShowIcons(true);
                    setShowQualities(true);
                }}/>
            </div>
            
            <div className="flex pr-24">
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate={showQualities ? "show" : "hidden"}
                    className="flex flex-col gap-6 text-2xl"
                >
                    <motion.ul className="space-y-4">
                        <motion.li variants={itemQualities} >
                            Software Engineer
                        </motion.li>
                        <motion.li variants={itemQualities} >
                            Problem Solver
                        </motion.li>
                        <motion.li variants={itemQualities} >
                            Creative Thinker
                        </motion.li>
                        <motion.li variants={itemQualities} >
                            Best Candidate?
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
        <motion.div 
            className="mt-40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <ul className="flex gap-6 items-center justify-center -ml-28">
                <li>
                    <button className="rounded-full hover:opacity-80 transition-opacity flex items-center justify-center">
                        <Image 
                            src="/linkedIn-favicon .png"
                            onClick={() => window.open('https://www.linkedin.com/in/yunus-kocaman-b372822b5/', '_blank')}
                            alt="me" 
                            width={50} 
                            height={50} 
                            className="lg:rounded"
                        />
                    </button>
                </li>
                <li>
                    <button className="rounded-full hover:opacity-80 transition-opacity flex items-center justify-center">
                        <Image 
                            src="/github-favicon.png" 
                            onClick ={() => window.open('https://github.com/ykunus', '_blank')}
                            alt="me" 
                            width={50} 
                            height={50} 
                            className="lg:rounded"
                        />
                    </button>
                </li>
                <li>
                    <button className="rounded-full hover:opacity-80 transition-opacity flex items-center justify-center">
                        <Image 
                            src="/resume-favicon .png" 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/Yunus_Kocaman_Resume_2025_Feb_05_latest.pdf';
                                link.download = '/Yunus_Kocaman_Resume_2025_Feb_05_latest.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            alt="Download Resume" 
                            width={50} 
                            height={50} 
                            className="lg:rounded"
                        />
                    </button>
                </li>
            </ul>
        </motion.div>
    </div>
  )
}

export default header