import VideoBackground from "./atoms/VideoBackground"

import { useEffect, useState, useContext } from 'react'

import {PopupState} from '../context/buttonContext'

import Button from "./atoms/Button"

export default function HeroSection(){

    const {popupState, setPopupState} = useContext(PopupState)

    console.log(popupState)

    return(
        <section className="hero relative">
            <VideoBackground />
            <div className='container'>
                <div className="block mym">
                    <h1 className="hero__title">
                        Поможем получить кредит
                    </h1>
                    <b className="">на выгодных условиях</b>
                    <p className="cd7 cm4">
                        Наши менеджеры - профессионалы своего дела, которые не только подберут для получения кредита один из 30 банков-партнёров, но и помогут получить самые выгодные условия
                    </p>
                    <Button 
                        mode='white'
                        text='Бесплатная консультация'
                        icon='true'
                    />
                </div>
            </div>
        </section>
    )
}