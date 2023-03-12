import { useEffect, useState } from 'react'
import greenBg from './../assets/svg/work-card-bg.svg'
import Button from "./atoms/Button"


import VideoBackground from './atoms/VideoBackground'

export default function WeWorkCard(props){
    const {icon, title, text, isGreen, index, i} = props

    const [hiddenCard, setHiddenCard] = useState(false)

    useEffect(() => {
        console.log(i, index)
        i === index ? setHiddenCard(true) : setHiddenCard(false)
    }, [])

    return(
        <div className={`relative work-card flex flex-col h-full ${index && isGreen && ' green-x2 '} ${hiddenCard === true ? 'hidden' : ''} ${isGreen ? 'work-card--green' : ''}`}>
            {isGreen 
                ? <VideoBackground/>
                : '' }
            <div>{icon && !isGreen &&  <img src={icon} className="work-card__icon block w-auto h-auto" />}</div>
            <h3 className="work-card__title">{title}</h3>
            {text.map((t, i) => <p className="work-card__text" key={i}>{t}</p>)}
            <Button 
                component='WeWorkCard'
                mode={`${isGreen ? 'white' : 'light'}`}
                text='Оставить заявку'
                icon='true'
            />

        </div>
    )
}