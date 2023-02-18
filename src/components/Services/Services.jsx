import src from '../../assets/png/card-mock.png'
import srcSet from '../../assets/png/card-mock@2x.png'
import ServicesCard from './ServicesCard'
const mock = {
    src: src.src,
    srcSet: srcSet.src,
    title: 'Помощь в оформлении <b>кредита</b>',
    desc: 'Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.'
}


export default function Services(){
    return(
        <div className="services">
            <div className='container flex items-stretch'>
                {Array(4).fill(mock).map((m, i) => <ServicesCard key={i} {...m} />)}
            </div>
        </div>
    )
}