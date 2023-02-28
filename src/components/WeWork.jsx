import icon1 from './../assets/svg/1.svg'
import icon2 from './../assets/svg/2.svg'
import icon3 from './../assets/svg/3.svg'
import icon4 from './../assets/svg/4.svg'
import icon5 from './../assets/svg/5.svg'
import icon6 from './../assets/svg/6.svg'
import icon7 from './../assets/svg/7.svg'

import ScrollCardsAnimation from './animations/ScrollCardsAnimation'
import ScrollAnimation from './animations/ScrollAnimation'

import WeWorkCard from './WeWorkCard'

const mock = [
    {
        icon: icon1.src,
        title: 'Потребительский кредит',
        text: ['Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет. Мы поможем получить потребительский кредит в банке.'],
    },
    {
        icon: icon3.src,
        title: 'Рефинансирование',
        text: ['Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.'],
    },
    {
        icon: icon5.src,
        title: 'Ипотека',
        text: ['Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.', 'Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.'],
    },
    {
        icon: icon7.src,
        title: 'Кредит под залог недвижимости',
        text: ['Бывает, что средства нужны настолько, что вы готовы заложить недвижимость для подтверждения платёжеспособности. Наша команда позаботится о том, чтобы процедура прошла быстро и безопасно. '],
    },
    {
        icon: icon2.src,
        title: 'Кредит под залог автомобиля',
        text: ['Случаются разные ситуации, когда вам срочно нужна крупная сумма. Мы с пониманием к этому относимся и помогаем получить самый выгодный кредит с хорошими условиями.'],
    },
    {
        icon: icon4.src,
        title: 'Кредит для юридических лиц',
        text: ['Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'],
    },
    {
        icon: icon6.src,
        title: 'Лизинг',
        text: ['Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'],
    },
    {
        icon: icon7.src,
        title: 'Мы поможем решить вашу проблему',
        text: ['Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.'],
    },
]



export default function WeWork(){
    return(
        <section className="work">
            <div className="container">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <h2 className="work__title font-5-light"><b>Работаем</b> с физическими и юридическими лицами</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <p className="work__text">
                        Группа Компаний <b>«Зеленый свет»</b> создана, чтобы оказывать качественные финансовые услуги.
                    </p>
                </ScrollAnimation>

                <ScrollCardsAnimation
                    className={"work__cards"}
                >
                    {mock.map((m, i) => <WeWorkCard key={i} {...m} isGreen={i === 7}/>)}
                </ScrollCardsAnimation>
                {/* <div className="work__cards">
                    {mock.map((m, i) => <WeWorkCard key={i} {...m} isGreen={i === 7}/>)}
                </div> */}
            </div>
        </section>
    )
}