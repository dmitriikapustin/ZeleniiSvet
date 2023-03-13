import React, {useContext} from 'react'
import FormС from './FormС'

import VideoBackground from '@/components/atoms/VideoBackground'

import { AllContexts } from '@/context/Context'

import useWindowDimensions from './hooks/useWindowDimensions'

const Form = () => {

	const { phonesData } = useContext(AllContexts)

	const [width, height] = useWindowDimensions();

	return (
		<div className='flex flex-row flex-wrap container form-card px0 ov-visible'>
			<VideoBackground />
			<div className="cd-s-1"></div>
			<div className="formblock formblock-container relative cd5 cm4">
				<FormС data={phonesData} />
			</div>
			<div className="cd-s-1"></div>
			<div className={"z-100 woman cd5 cm4" + (width < 800 && ' hidden')}>
				<img src="/images/woman.png" alt="" />
			</div>
		</div>
	)
}

export default Form
