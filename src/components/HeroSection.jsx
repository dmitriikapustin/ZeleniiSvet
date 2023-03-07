import VideoBackground from "./atoms/VideoBackground"

import { useEffect, useState, useContext } from 'react'

import {PopupState} from '../context/buttonContext'



export default function HeroSection(){

    const {popupState, setPopupState} = useContext(PopupState)

    console.log(popupState)

    return(
        <section className="hero relative">
            <VideoBackground />
            <div className='container'>
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
                </div>
            </div>
            
        </section>
    )
}