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
        desc: 'Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет? Мы поможем получить потребительский кредит в банке.'
    },
    {
        src: 'potreb',
        title: 'Рефинансирование',
        desc: 'Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.'
    },
    {
        src: 'ipoteka',
        title: 'Ипотека',
        desc: 'Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'
    },
    {
        src: 'avto',
        title: 'Залог под квартиру или машину',
        desc: 'Если вы хотите взять кредит под залог – наша команда позаботится о том, чтобы процедура прошла быстро и безопасно.'
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