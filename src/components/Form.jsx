import React, {useContext} from 'react'
import FormС from './FormС'

import VideoBackground from '@/components/atoms/VideoBackground'

import { PhonesData } from '@/context/Context'

const Form = () => {

	const { phonesData } = useContext(PhonesData)

	return (
		<div className='flex flex-row flex-wrap container form-card px0 ov-visible'>
			<VideoBackground />
			<div className="formblock formblock-container relative cd6 cm4">
				<FormС data={phonesData} />
			</div>
			<div className="woman cd6 cm4">
				<img src="/images/woman.png" alt="" />
			</div>
		</div>
	)
}

export default Form
