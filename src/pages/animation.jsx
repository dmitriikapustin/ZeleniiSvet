import React from 'react'
import Link from "next/link";
import TestAnimation from '../components/animations/TestAnimation'
import Calculator from '../components/animations/Calculator'
import TextA from '../components/animations/TextA'
import TextB from '../components/animations/TextB'
import Scroll from '../components/animations/Scroll'
import Parallax from '../components/animations/Parallax'
import RunLine from '../components/animations/RunLine'



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
