import cross from '../assets/svg/cross.svg'
import bg from '../assets/svg/adv_bg.svg'
import React, { useState } from 'react'

export default function PromoLine(){
    const [isOpen, setIsOpen] = useState(true)
    return(
        <div className={'promoline' + (isOpen === false ? ' close' : '')} style={{backgroundImage: `url(${bg.src})`}}>
            <div className="promoline__text">
                Акция! Сниженный процент по ипотеке до конца 2023 года  
            </div>
            <img src={cross.src} className="promoline__cross" onClick={() => {setIsOpen(false)}}/>
        </div>
    )
}