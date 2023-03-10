import React, {useContext} from 'react'
import FormС from './FormС'

import VideoBackground from '@/components/atoms/VideoBackground'

import { PhonesData } from '@/context/Context'

const Form = () => {

	const { phonesData } = useContext(PhonesData)

	return (
		<div className='flex flex-col container form-card px0' style={{ 'overflow': 'hidden' }}>
			<VideoBackground />
			<div className="formblock formblock-container relative">
				<FormС data={phonesData} />
			</div>
		</div>
	)
}

export default Form
