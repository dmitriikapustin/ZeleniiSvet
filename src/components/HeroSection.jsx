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
                    <h1 className="hero__title cd8 cm4 mbm">
                        {(props.type !== 1 ? 'Поможем получить кредит на выгодных условиях' : '')}
                        {(props.type === 1 ? props.newTitle : '')}
                        
                    </h1>
                    {/* <b className={(props.type === 1 && ' mb')}>на выгодных условиях</b> */}
                    <p className={"cd7 cm4 " + (props.type === 1 && ' hidden')}>
                        Наши менеджеры - профессионалы своего дела, которые не только подберут для получения кредита один из 30 банков-партнёров, но и помогут получить самые выгодные условия
                    </p>
                    <Button 
                        mode='white'
                        text='Бесплатная консультация'
                        icon='true'
                    />
                    {props.type === 1 ? (                   
                        <div className="params flex flex-row mtm">
                            <div className="flex flex-col mrl">
                                <h3>Ставка от</h3>
                                <h2 className="span-param">4.4%</h2>
                            </div>
                            <div className="flex flex-col mrl">
                                <h3>Сумма кредита до</h3>
                                <h2 className="span-param">200 млн</h2>
                            </div>
                            <div className="flex flex-col">
                                <h3>Срок одобрения</h3>
                                <h2 className="span-param">1 день</h2>
                            </div>
                    </div>) : ''}
                </div>
            </div>
        </section>
    )
}