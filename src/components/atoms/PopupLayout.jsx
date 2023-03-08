import React, {useContext} from 'react'

import Form from '@/components/Form'

import { PopupState } from '@/context/buttonContext'

const PopupLayout = () => {

    const {popupState, setPopupState} = useContext(PopupState)

  return (
    <>
        <div className='popup popup-form flex justify-center items-center'>
            <Form />
            <div 
                className='overlay'
                onClick={() => setPopupState(false)}
            ></div>
        </div>
    </>
  )
}

export default PopupLayout
