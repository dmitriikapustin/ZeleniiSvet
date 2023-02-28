import React from 'react'
import { motion, useTime, useTransform, useAnimationFrame, useMotionValue, useScroll } from "framer-motion";
import { wrap } from "@motionone/utils";

const RunningLine = ({children, baseVelocity}) => {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();

	// const marqueeVariants = {
	// 	animate: {
	// 		x: ['0%', '-61.4%'],
	// 		transition: {
	// 		x: {
	// 			repeat: Infinity,
	// 			repeatType: "loop",
	// 			duration: 5,
	// 			ease: "linear",
	// 		},
	// 		},
	// 	},
	// };
	useAnimationFrame((t, delta) => {
		let moveBy =  baseVelocity * (delta / 1000);
		baseX.set(baseX.get() + moveBy);
	})

	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
	<div className='flex flex-row container-text-b nowrap'>
		<motion.div
			style={{ x }}
		>
			{children}
		</motion.div>

	</div>
  )
}

export default RunningLine
