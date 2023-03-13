import src from '../assets/png/credit-img.png'
import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"


export default function Help(){
    return(
        <section className="help">
            <div className="container flex items-center">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <img src={src.src} className="help__img mbm" />
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} triggerOnce={false}>
                    <div className='help__content cd12'>
                        <h2 className='help__title'>Мы предоставляем людям доступ к кредитам на <span>выгодных условиях</span></h2>
                        <p className="help__desc">Мы понимаем, что жизнь может быть непредсказуемой и иногда вам нужна дополнительная финансовая поддержка. <br/><br/>С нами вы можете получить быстрый и легкий доступ к необходимым вам средствам, не беспокоясь о высоких процентных ставках или скрытых комиссиях.</p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Бесплатная консультация'
                        />
                    </div>                
                </ScrollAnimation>

            </div>
        </section>
    )
}