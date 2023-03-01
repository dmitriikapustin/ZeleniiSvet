import ScrollAnimation from './animations/ScrollAnimation'

export default function MainProfits(){
    return (
        <section className="mainProfits">
            <div className="container flex flex-row">
                {/* <div className="cards flex w-full"> */}
                <ScrollAnimation delay={0} triggerOnce={false} className={"cd6 cm4 scroll-container"}>
                    <div className="card flex flex-col items-center round">
                        <img src="/images/image1.png" alt=""/>
                        <h2 className="title_card text-center">Получите <span>лучшие условия </span></h2>
                        <p className='text-center'>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <a className="action action--light" href="">Оставить заявку
                            <svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9.5L6.95 8.4125L9.6125 5.75H0.5V4.25H9.6125L6.95 1.5875L8 0.5L12.5 5L8 9.5Z"s/>
                            </svg>
                        </a>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false} className={"cd6 cm4 scroll-container"}>
                    <div className="card card-2 flex flex-col items-center">
                        <img src="/images/image2.png" alt=""/>
                        <h2 className="title_card text-center">Получите <span>лучшие условия </span></h2>
                        <p className='text-center'>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <a className="action action--light" href="">Оставить заявку
                            <svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9.5L6.95 8.4125L9.6125 5.75H0.5V4.25H9.6125L6.95 1.5875L8 0.5L12.5 5L8 9.5Z"/>
                            </svg>
                        </a>
                    </div>
                </ScrollAnimation>
                {/* </div> */}
            </div>
        </section>
    )
}