import React from 'react'
import { motion } from "framer-motion";

const TestAnimation = () => {

	// const container = {
	// 	animate: {opacity: 1, scale: 1},
	// 	transition: {duration: .6, ease: "easeInOut" },
	// }

	// const animate = {
	// 	to: {
	// 		x: "0%",
	// 	},
	// 	transition: { duration: .6, ease: "easeInOut" },
	// }


  return (
	<motion.div
		className='flex flex-row space-between container'
		initial={{opacity: 0, scale: 0.5}}
		animate={{opacity: 1, scale: 1}}
		transition={{type: 'spring', duration: .9, ease: "easeInOut"} }
		>
		<motion.div
			whileHover={{
				scale: 1.1,
				transition: { duration: .3 },
			}}
			className="animated-item item-1"
		/>
		<motion.div
			whileTap={{
				scale: 0.9,
				rotate: 60,
				color: '#000',
				transition: { duration: 0.5 },
			}}
			className="animated-item item-2"
			initial={{x: '-111.5%'}}
			animate={{x: 0}}
			transition={{ type: 'spring', stiffness: 50,  mass: 0.5, duration: .2, ease: "easeInOut", delay: .7}}
		/>
		<motion.div
			className="animated-item item-3"
			initial={{x: '-223%'}}
			animate={{x: 0}}
			transition={{ type: 'spring', stiffness: 50,  mass: 0.5, duration: .3, ease: "easeInOut", delay: .8}}
		/>
	</motion.div>
  )
}

export default TestAnimation
