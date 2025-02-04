import React from 'react'

const Container = ({
    leftContent,
    rightContent
}: {
    leftContent: React.ReactNode,
    rightContent: React.ReactNode
}) => {
    return (
        <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col p-4 border-2 border-black rounded-lg w-1/2">
                {leftContent}
            </div>
            <div className="flex flex-col p-4 border-2 border-black rounded-lg w-1/2">
                {rightContent}
            </div>
        </div>
    )
}

export default Container
