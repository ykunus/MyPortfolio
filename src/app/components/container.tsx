import React from 'react'

const Container = ({
    content
}: {
    content: React.ReactNode,
}) => {
    return (
        <div className="flex w-full gap-4">
            <div className="flex flex-col p-4 border-2 border-black rounded-lg w-full">
                {content}
            </div>
        </div>
    )
}

export default Container
