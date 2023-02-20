import React from 'react'
import FormС from './FormС'

const FormBlock = ({data}) => {
  return (
	<div className='flex flex-col container' style={{'overflow': 'visible'}}>
		<div className="formblock formblock-container">
			<FormС data={data}/>
		</div>
	</div>
  )
}

export default FormBlock
