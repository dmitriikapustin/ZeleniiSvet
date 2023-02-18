import cross from '../assets/svg/cross.svg'
import bg from '../assets/svg/adv_bg.svg'

export default function PromoLine(){
    return(
        <div className='promoline' style={{backgroundImage: `url(${bg.src})`}}>
            <div className="promoline__text">
                Акция! Сниженный процент по ипотеке до конца 2023 года  
            </div>
            <img src={cross.src} className="promoline__cross" />
        </div>
    )
}