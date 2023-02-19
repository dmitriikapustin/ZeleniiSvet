import React from 'react'
import FormС from '../components/FormС'

const FormBlock = ({data}) => {
  return (
	<div className='flex flex-col formblock container'>
		<div className="formblock-container">
			<FormС data={data}/>
		</div>
	</div>
  )
}

export default FormBlock
