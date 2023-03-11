import src from '../assets/png/credit-img.png'
import srcSet from '../assets/png/credit-img@2x.png'
import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"


export default function Help(){
    return(
        <section className="help">
            <div className="container flex items-center">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <img src={src.src} srcSet={srcSet.src} className="help__img mbm" />
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} triggerOnce={false}>
                    <div className='help__content'>
                        <h2 className='help__title'>Наша миссия — получить у банка <span>выгодное кредитование</span> для вас.</h2>
                        <p className="help__desc">Мы знаем, что у всех разные ситуации в жизни. Расскажите свою — разберёмся и поможем. </p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Оставить заявку'
                            icon='true'
                        />
                    </div>                
                </ScrollAnimation>

            </div>
        </section>
    )
}