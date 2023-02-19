import React from 'react'
import Link from "next/link";
import TestAnimation from '../components/animationC/TestAnimation'
import Calculator from '../components/animationC/Calculator'
import TextA from '../components/animationC/TextA'
import TextB from '../components/animationC/TextB'
import Scroll from '../components/animationC/Scroll'
import Parallax from '../components/animationC/Parallax'
import RunLine from '../components/animationC/RunLine'



const animation = () => {
  return (
	<div>
		<Link href={`/`}>HOME</Link>
		<TestAnimation />
		<Calculator />
		<TextA />
		<TextB />
		<Scroll />
		<Parallax />
		<RunLine />
	</div>
  )
}

export default animation
