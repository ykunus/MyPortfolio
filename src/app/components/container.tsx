import React from 'react'

const Container = ({title, content}: {title: string, content: (string | null)[][]}) => {
  return (
    <div className="flex-1 p-4 border-2 border-black rounded-lg">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {content.map((section, index) => (
            <div key={index} className="mb-4">
                {/* If first element exists, render as h4 subheading */}
                {section[0] && (
                    <h4 className="text-lg font-semibold mb-2">{section[0]}</h4>
                )}
                {/* Render remaining elements as bullet points */}
                <ul className="list-disc pl-4">
                    {section.slice(1).map((item, itemIndex) => (
                        item && (
                            <li key={itemIndex} className="text-gray-700">
                                {item}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Container