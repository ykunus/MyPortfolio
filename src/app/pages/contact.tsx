import React from 'react'

const contact = () => {
  return (
    <div className="space-y-8 px-6 md:ml-24">
        <div className="w-left">
            <h1 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left">Contact Me</h1>
        </div>
        <div className="">
            <ul className="text-lg md:text-2xl space-y-6 md:space-y-8">
                <li>
                    <a href="mailto:yukocaman13@gmail.com" className="flex flex-col md:flex-row md:space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">Email:</span> 
                        <span className="text-gray-600 font-light">yukocaman13@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yunus-kocaman-b372822b5/" className="flex flex-col md:flex-row md:space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">LinkedIn:</span> 
                        <span className="text-gray-600 font-light truncate">linkedin.com/in/yunus-kocaman</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ykunus?tab=repositories" className="flex flex-col md:flex-row md:space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">GitHub:</span> 
                        <span className="text-gray-600 font-light truncate">github.com/ykunus</span>
                    </a>
                </li>
                <li className="flex flex-col md:flex-row md:space-x-4">
                    <span className="hover:text-blue-500 text-gray-700 font-semibold">Number:</span> 
                    <span className="text-gray-600 font-light">272 201 8563</span>
                </li>
                <li className="flex flex-col md:flex-row md:space-x-4">
                    <span className="hover:text-blue-500 text-gray-700 font-semibold">Address:</span> 
                    <span className="text-gray-600 font-light">710 Main StWaltham, MA 02451</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default contact
