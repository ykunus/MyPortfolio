import React from 'react'
import { Project_temp} from '../components/project_temp'
const projectCards = [
    {
        url: 'https://github.com/ykunus/MyPortfolio',
        title: 'This Website!',
        image: '/linkedIn-favicon .png',
        description: ['This website is a portfolio website for my projects and skills.',  'It is built with Next.js, Tailwind CSS, TypeScript, and React.', 'It is hosted on Vercel'],
        tools: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express']
    },
    {
        url: 'https://github.com/ykunus/MyPortfolio',
        title: 'YumJunction!',
        image: '/linkedIn-favicon .png',
        description: ['This website is a portfolio website for my projects and skills.',  'It is built with Next.js, Tailwind CSS, TypeScript, and React.', 'It is hosted on Vercel'],
        tools: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express']
    },
    {
        url: 'https://github.com/ykunus/MyPortfolio',
        title: 'Linux Shell!',
        image: '/linkedIn-favicon .png',
        description: ['This website is a portfolio website for my projects and skills.',  'It is built with Next.js, Tailwind CSS, TypeScript, and React.', 'It is hosted on Vercel'],
        tools: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express']
    }
]
const projects = () => {
  return (
    <div>
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">v Scroll Down v</h1>
        </div>
        <Project_temp projectCards={projectCards} />
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">^ Scroll Up ^</h1>
        </div>
    </div>
    
  )
}

export default projects
