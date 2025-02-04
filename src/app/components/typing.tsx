import {useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const Typing = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <TypeAnimation
            sequence={[
                'Welcome Recruiter!', 
                1000, 
                'Welcome Recruiter!\nYour search ends here', 
                1000, 
                'Welcome Recruiter!\nYour search ends here :)', 
                1000,
                () => onComplete()
            ]}
            wrapper="div"
            speed={50}
            style={{ 
                display: 'inline-block',
                whiteSpace: 'pre-line',
                lineHeight: '1.5'
            }}
            cursor={false}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        />
    );
}

export default Typing;
