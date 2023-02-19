import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
  }

const Parallax = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 100);
	const y2 = useParallax(scrollYProgress, 200);
  return (
	<div ref={ref} className="parallax flex flex-col">
		<motion.div style={{y2}} className="card"></motion.div>
		<motion.h2 style={{y}}>Parallax</motion.h2>
	</div>
  )
}

export default Parallax
