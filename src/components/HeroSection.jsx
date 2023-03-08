import VideoBackground from "./atoms/VideoBackground"

import { useEffect, useState, useContext } from 'react'

import {PopupState} from '../context/buttonContext'

import Button from "./atoms/Button"

export default function HeroSection(props){

    const {popupState, setPopupState} = useContext(PopupState)

    console.log(popupState)

    return(
        <section className="hero relative">
            <VideoBackground />
            <div className={'container' + (props.type === 1 ? ' uslugi' : '')}>
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
                    {props.type === 1 ? (                   
                        <div className="params flex flex-row mtl">
                            <div className="flex flex-col mrm">
                                <h3>Ставка от</h3>
                                <span className="span-param">4.4%</span>
                            </div>
                            <div className="flex flex-col mrm">
                                <h3>Сумма кредита до</h3>
                                <span className="span-param">200 млн</span>
                            </div>
                            <div className="flex flex-col">
                                <h3>Срок одобрения</h3>
                                <span className="span-param">1 день</span>
                            </div>
                    </div>) : ''}
                </div>
            </div>
        </section>
    )
}