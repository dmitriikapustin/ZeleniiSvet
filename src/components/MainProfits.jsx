import ScrollAnimation from './animations/ScrollAnimation'

export default function MainProfits(){
    return (
        <section className="mainProfits">
            <div class="container">
                <div class="cards">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <div class="card round">
                        <img src="/images/image1.png" alt=""/>
                        <h1 class="title_card">Получите <span>лучшие условия </span></h1>
                        <p>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <a class="action action--light" href="">Оставить заявку
                            <svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9.5L6.95 8.4125L9.6125 5.75H0.5V4.25H9.6125L6.95 1.5875L8 0.5L12.5 5L8 9.5Z"s/>
                            </svg>
                        </a>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false}>
                    <div class="card">
                        <img src="/images/image2.png" alt=""/>
                        <h1 class="title_card">Получите <span>лучшие условия </span></h1>
                        <p>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <a class="action action--light" href="">Оставить заявку
                            <svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9.5L6.95 8.4125L9.6125 5.75H0.5V4.25H9.6125L6.95 1.5875L8 0.5L12.5 5L8 9.5Z"/>
                            </svg>
                        </a>
                    </div>
                </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}