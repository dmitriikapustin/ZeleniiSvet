import React from 'react'
import { motion, useTime, useTransform, useMotionValue } from "framer-motion";
import ScrollAnimation from '../animationC/ScrollAnimation'



const RunLine = ({children, className, fromX, toX}) => {


	const runLineVariants = {
		animate: {
			x: [fromX, toX],
			transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 50,
				ease: "linear",
			},
			},
		},
	};


  return (
	//   <div className='flex flex-row nowrap runline-container'>
	<ScrollAnimation delay={0.1} triggerOnce={true}>
		<motion.div
			className={className}
			animate="animate"
			variants={runLineVariants}
			>
				
					{children}
		</motion.div>
	</ScrollAnimation>
	//   </div>
  )
}

export default RunLine
