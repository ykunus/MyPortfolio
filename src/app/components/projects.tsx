import React from 'react'
import { Project_temp} from './project_temp'
const projectCard = {
    url: 'https://github.com/ykunus/MyPortfolio',
    title: 'This Website!',
    image: '/linkedIn-favicon .png',
    description: 'Portfolio website',
    tools: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB']
}
const projects = () => {
  return (
    <div>
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">v Scroll Down v</h1>
        </div>
        <Project_temp projectCard={projectCard} />
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">^ Scroll Up ^</h1>
        </div>
    </div>
    
  )
}

export default projects
