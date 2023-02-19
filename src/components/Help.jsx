import src from '../assets/png/credit-img.png'
import srcSet from '../assets/png/credit-img@2x.png'
import ScrollAnimation from './animationC/ScrollAnimation'

export default function Help(){
    return(
        <section className="help">
            <div className="container flex items-center">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <img src={src.src} srcSet={srcSet.src} className="help__img" />
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} triggerOnce={false}>
                    <div className='help__content'>
                        <h2 className='help__title font-5-light'>Наша миссия — получить у банка <b>выгодное кредитование</b> для вас.</h2>
                        <p className="help__desc">Мы знаем, что у всех разные ситуации в жизни. Расскажите свою — разберёмся и поможем. </p>
                        <button className='action action--light'>
                            <span>Оставить заявку</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 13.5L9.45 12.4125L12.1125 9.75H3V8.25H12.1125L9.45 5.5875L10.5 4.5L15 9L10.5 13.5Z" fill="#FBFBFB"/>
                            </svg>
                        </button>
                    </div>                
                </ScrollAnimation>

            </div>
        </section>
    )
}