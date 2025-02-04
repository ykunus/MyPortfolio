import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Flyoutlink = ({children, href, content}: {
    children: React.ReactNode, 
    href: string, 
    content: () => React.ReactNode
}) => {

  const [isOpen, setOpen] = useState(false)

  const showFlyout = isOpen
  
  return (
    <div onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className="relative w-fit h-fit">
        <a href={href} className="relative text-black">
            {children}
            <span style={{ transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)' }} className="absolute -bottom-2 -left-2 -right-2 h-1 
            origin-right scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"/>        
        </a>
        <AnimatePresence>
            {showFlyout &&(
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-full top-0 ml-4 bg-neutral-900 text-white rounded-lg shadow-2xl"
                >
                    {content && content()}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Flyoutlink
