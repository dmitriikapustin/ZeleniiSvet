import VideoBackground from "./atoms/VideoBackground"

import { useEffect, useState, useContext } from 'react'

import {PopupState} from '../context/buttonContext'



export default function HeroSection(props){

    const {popupState, setPopupState} = useContext(PopupState)

    console.log(popupState)

    return(
        <section className="hero relative">
            <VideoBackground />
            <div className={'container' + (props.type === 1 ? ' uslugi' : '')}>
                <div>
                    <h1 className="hero__title mtl">
                        С нами вам одобрят кредит на
                    </h1>
                    <span className="">любые цели</span>
                    <h3>
                        Мы не берём предоплату и не просим миллиона документов.                 
                    </h3>
                    <button 
                        className="action"
                        onClick={() => setPopupState(!popupState)}
                        >
                        Оставить заявку
                    </button>
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