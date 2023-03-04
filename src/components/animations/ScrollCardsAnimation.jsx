import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollCardsAnimation = ({children, className}) => {

    
    const initial = {
        opacity: 0,
        scale: .9
    }
    const animate = {
        opacity: 1,
        scale: 1

    }

    const { ref, inView, entry } = useInView({
        threshold: 1,
        triggerOnce: true,
      });



  return (
    <div ref={ref} className={className}>
        {children.map((child, index) => {
            return <motion.div
                key={index}
                initial={initial}
                whileInView={animate}
                transition={{
                    duration: .5,
                    delay: .2 * index,
                    ease: "easeInOut"
                }}
            >
                {child}
            </motion.div>
        })}

    </div>
  )
}

export default ScrollCardsAnimation
