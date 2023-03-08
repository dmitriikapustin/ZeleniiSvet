import React from 'react'
import FormС from './FormС'

import VideoBackground from '@/components/atoms/VideoBackground'

const Form = ({data}) => {
  return (
	<div className='flex flex-col container' style={{'overflow': 'visible'}}>
		<div className="formblock formblock-container relative">
			<VideoBackground />
			<FormС data={data}/>
		</div>
	</div>
  )
}

export default Form
