import src from './../assets/png/card-mock.png'
import srcSet from './../assets/png/card-mock@2x.png'
import ServicesCard from './ServicesCard'
import CardsAnimation from './animationC/CardsAnimation'

const mock = [
    {
        src: src.src,
        srcSet: srcSet.src,
        title: 'Отказали в <b>кредите!</b>',
        desc: 'Поможем! Проконсультируем и доведём до подписания договора в банке.'
    },
    {
        src: src.src,
        srcSet: srcSet.src,
        title: 'Нет времени на <b>анализ</b> банков и условий',
        desc: 'Мы всё сделаем сами, включая сбор ваших документов и одобрение кредита. А вы сэкономите свои время и силы.'
    },
    {
        src: src.src,
        srcSet: srcSet.src,
        title: 'Нет официального <b>дохода</b>',
        desc: 'Это не проблема. Мы знаем законные способы его получить кредит, если у вас нет документально-подтверждённого дохода.'
    },
    {
        src: src.src,
        srcSet: srcSet.src,
        title: 'Плохая кредитная <b>история</b> с просрочкой!',
        desc: 'Мы повысим ваши шансы на заём без серых схем — всё прозрачно и по закону.'
    }
]




export default function Services(){
    return(
        <div className="services">
            <CardsAnimation
                className={'container flex items-stretch'}
            >
                {mock.map((m, i) => <ServicesCard key={i} {...m} />)}
            </CardsAnimation>


        </div>
    )
}