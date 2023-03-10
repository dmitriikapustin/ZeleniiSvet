import React, {useContext} from 'react'

import Form from '@/components/Form'

import { PopupState } from '@/context/Context'

export async function getStaticProps() {
	const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}

const PopupLayout = ({dataGetPhones}) => {

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
