import React from 'react'
import { Project_temp} from '../components/project_temp'
import MobileProjectCard from '../components/mobileProjectCard'

const projectCards = [
    {
        url: 'https://github.com/abbasi-danish/YumJunction',
        title: 'YumJunction!',
        image: '/yum-junction .png',
        description: ["Led a team of students in developing a full-stack web recipe application using React and Node.js", "Built a backend server to store and manage recipe data, integrating JSON-based APIs and CosmosDB for scalable storage.", "Designed a dynamic front-end with React and Tailwind CSS, allowing users to add and share their recipes.",
            "Implemented Azure Services for cloud hosting, automated deployment, and monitoring.", "Set up alerting mechanisms for backend services to ensure reliability and performance.","Utilized Docker for containerized deployment, ensuring consistency across development and production environments." ],
        tools: ['JavaScript', 'React', 'Node.js/Express.js', 'CosmosDB', 'Azure Function/App Service/Monitor', 'Docker']
    },
    {
        url: 'https://github.com/ykunus/unix-shell',
        title: 'Linux Shell!',
        image: '/unix-shell.png',
        description: ["Developed a Unix-like shell with a fully functional Read-Eval-Print Loop (REPL) supporting essential shell commands (pwd, ls, cd, cat, grep, wc, etc.).", "Implemented the Pipes and Filters architecture to support command chaining (— operator), enabling seamlessdata flow between commands",
            "Enhanced shell capabilities with error handling, ensuring robust input validation and appropriate system responses for incorrect commands.", "Optimized command execution by efficiently parsing and handling user inputs while adhering to Unix shell conventions."],
        tools: ['Java', 'Multithreading', 'Concurrency', 'Thread Synchronization']
    },
    {
        url: 'https://github.com/ykunus/MyPortfolio',
        title: 'Fraud Detection!',
        image: '/fraud-detection.png',
        description: ['Explored multiple machine learning models for fraud detection, including Logistic Regression, Decision Trees, and K-Nearest Neighbors (K-NN).',
            'Engineered and optimized features using imbalanced dataset techniques (SMOTE) to improve fraud classification in skewed datasets.','Implemented a data preprocessing pipeline with Pandas and NumPy, handling missing values, feature scaling, and outlier detection to enhance model performance.',
            'Visualized dataset distributions and fraud patterns using Matplotlib and Seaborn, refining feature selection and model interpretability.','Analyzed and compared model performance using Scikit-Learn metrics such as confusion matrices, ROC curves, and precision-recall analysis to select the most suitable approach.'
        ],
        tools: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Imbalanced-learn']
    },
    {
        url: 'https://github.com/ykunus/MyPortfolio',
        title: 'This Website!',
        image: '/my-portfolio.png',
        description: ['This website is a portfolio website for my projects and skills.',  'It is built with Next.js, Tailwind CSS, TypeScript, and React.', 'It is hosted on Vercel'],
        tools: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express']
    }
]

const projects = () => {
  return (
    <div>
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md hidden md:flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">v Scroll Down v</h1>
        </div>
        <h1 className="text-4xl text-black md:hidden justify-center items-center flex">Projects</h1>
        <div className="hidden md:block">
            <Project_temp projectCards={projectCards} />
        </div>
        <div className="md:hidden mt-8">
            <MobileProjectCard projectCards={projectCards} />
        </div>
        <div className="w-full h-48 bg-gradient-to-b from-white to-pink-100 p-6 shadow-md hidden md:flex items-center justify-center">
            <h1 className="text-4xl text-gray-400">^ Scroll Up ^</h1>
        </div>
    </div>
    
  )
}

export default projects
