import React from 'react'
import { motion, useTime, useTransform, useMotionValue } from "framer-motion";


const RunLine = ({children, className, fromX, toX}) => {


	const runLineVariants = {
		animate: {
			x: [fromX, toX],
			transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 20,
				ease: "linear",
			},
			},
		},
	};


  return (
	//   <div className='flex flex-row nowrap runline-container'>
		<motion.div
			className={className}
			animate="animate"
			variants={runLineVariants}
			>
				{children}


		</motion.div>
	//   </div>
  )
}

export default RunLine
