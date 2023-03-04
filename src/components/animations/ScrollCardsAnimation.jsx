import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollCardsAnimation = ({children, className}) => {

    // const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)



    const initial = {
        opacity: 0,
        scale: .9
    }
    const animate = {
        opacity: 1,
        scale: 1

    }

    const { ref, inView, entry } = useInView({
        threshold: 0.45,
        triggerOnce: true,
      });



  return (
    <motion.div ref={ref} className={className}>
        {children.map((child, index) => {
            return <motion.div
                key={index}
                initial={initial}
                animate={inView ? animate : ''}
                transition={{
                    duration: .5,
                    delay: .2 * index,
                    ease: "easeInOut"
                }}
            >
                {child}
            </motion.div>
        })}

    </motion.div>
  )
}

export default ScrollCardsAnimation