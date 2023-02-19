import React from 'react'
import { motion, useTime, useTransform } from "framer-motion";



const TextA = () => {

	const texts = [
		{
			value: 'First'
		},
		{
			value: 'Second'
		},
		{
			value: 'Third'
		}
	]

	// const transformYfunc = (i) => {

	// }

	// const transformY = useTransform(

	// )

	// const time = useTime();
	// const y = useTransform(time, [0, 1200], [0, -100], { clamp: false });

	const animate = {
		y: ['100%', '0%', '-100%', '-200%', '-300%']
	}

	const transition = {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 0
	}

  return (
		<div className="container-text-a">
			<motion.div
				className='flex flex-col text-container'
				animate={animate}
				transition={transition}
			>
				{texts.map((text, index) => {
					return (
						<motion.p key={index+text}
						>{text.value}
						</motion.p>
					)
				}) }
			</motion.div>
		</div>
  )
}

export default TextA
