import src from './../assets/png/card-mock.png'
import srcSet from './../assets/png/card-mock@2x.png'
import ServicesCard from './ServicesCard'
import CardsAnimation from './animations/CardsAnimation'
// import avto from '/images/avto.jpg'
// import potreb from '/images/potreb.jpg'
// import ipoteka from '/images/ipoteka.jpg'
// import refin from '/images/refin.jpg'


const mock = [
    {
        src: 'refin',
        title: 'Потребительский <b>кредит</b>',
        desc: 'Поможем! Проконсультируем и доведём до подписания договора в банке.'
    },
    {
        src: 'potreb',
        title: 'Рефинансирование',
        desc: 'Мы всё сделаем сами, включая сбор ваших документов и одобрение кредита. А вы сэкономите свои время и силы.'
    },
    {
        src: 'ipoteka',
        title: 'Ипотека',
        desc: 'Это не проблема. Мы знаем законные способы его получить кредит, если у вас нет документально-подтверждённого дохода.'
    },
    {
        src: 'avto',
        title: 'Залог под квартиру или машину',
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