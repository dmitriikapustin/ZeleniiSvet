import React from 'react'
import FormС from './FormС'

import VideoBackground from '@/components/atoms/VideoBackground'

const Form = ({data}) => {
  return (
	<div className='flex flex-col container px0 ov-visible'>
		<div className="formblock formblock-container relative">
			<VideoBackground />
			<FormС data={data}/>
			<div className="woman absolute">
				<img src="/images/woman.png" alt="" />
			</div>
		</div>
	</div>
  )
}

export default Form
