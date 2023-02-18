import greenBg from '../../assets/svg/work-card-bg.svg'

export default function WeWorkCard(props){
    const {icon, title, text, isGreen} = props
    return(
        <div className={`work-card ${isGreen ? 'work-card--green' : ''}`} style={{backgroundImage: isGreen ? `url(${greenBg.src})` : 'f'}}>
            <div>{icon && !isGreen &&  <img src={icon} className="work-card__icon" />}</div>
            <div className="work-card__title">{title}</div>
            {text.map((t, i) => <p className="work-card__text" key={i}>{t}</p>)}
            <button className={`action ${isGreen ? 'action--white' : 'action--light'}`}>
                <span>Оставить заявку</span>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5078 13.5L9.45781 12.4125L12.1203 9.75H3.00781V8.25H12.1203L9.45781 5.5875L10.5078 4.5L15.0078 9L10.5078 13.5Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}