import React from 'react'

const contact = () => {
  return (
    <div className=" space-y-8 ml-24">
        <div className="w-left">
            <h1 className="text-4xl font-bold text-black">Contact Me</h1>
        </div>
        <div className="">
            <ul className=" text-2xl space-y-8">
                <li>
                    <a href="mailto:yukocaman13@gmail.com" className= "space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">Email:</span> 
                        <span className="text-gray-600 font-light">yukocaman13@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/yunus-kocaman/" className= "space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">LinkedIn:</span> 
                        <span className="text-gray-600 font-light">https://www.linkedin.com/in/yunus-kocaman/</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ykunus?tab=repositories" className= "space-x-4">
                        <span className="hover:text-blue-500 text-gray-700 font-semibold">GitHub:</span> 
                        <span className="text-gray-600 font-light">https://github.com/ykunus?tab=repositories</span>
                    </a>
                </li>
                <li className= "space-x-4">
                    <span className="hover:text-blue-500 text-gray-700 font-semibold">Number:</span> 
                    <span className="text-gray-600 font-light">272 201 8563</span>
                </li>
                <li className= "space-x-4">
                    <span className="hover:text-blue-500 text-gray-700  font-semibold">Address:</span> 
                    <span className="text-gray-600 font-light">710 Main StWaltham, MA 02451</span>
                </li>
                
                
            </ul>
        </div>
    </div>
  )
}

export default contact
