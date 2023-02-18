import icon from '../../assets/svg/work-mock-icon.svg'
import WeWorkCard from './WeWorkCard'

const mock = {
    icon: icon.src,
    title: 'Потребительский кредит',
    text: ['Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.', 'Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.'],

}



export default function WeWork(){
    return(
        <section className="work">
            <div className="container">
                <h2 className="work__title"><b>Работаем</b> с физическими и юридическими лицами</h2>
                <p className="work__text">
                    Группа Компаний <b>«Зеленый свет»</b> создана, чтобы оказывать качественные финансовые услуги.
                </p>
                <div className="work__cards">
                    {Array(8).fill(mock).map((m, i) => <WeWorkCard key={i} {...m} isGreen={i === 7}/>)}
                </div>
            </div>
        </section>
    )
}