import React, {useRef} from 'react'
import { motion, useTime, useTransform, useScroll } from "framer-motion";


const Scroll = () => {

	const scrollRef = useRef(null)

	const initial = {
		x: '-50%',
		opacity: 0.5
	}

	const visible = {
		x: '0%',
		opacity: 1,
	}

	const transition = {
		duration: .5,
		ease: "easeOut",
	}

	console.log(scrollRef)

  return (
	<div ref={scrollRef} className="flex flex-row scroll-container">
		<motion.div
			initial={initial}
		  	whileInView={visible}
			// viewport={{ root: scrollRef, amount: 0.9 }}
			className='scroll-item'
			transition={transition}
		>

		</motion.div>
	</div>
  )
}

export default Scroll
