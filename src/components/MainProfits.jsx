import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"

export default function MainProfits(){
    return (
        <section className="mainProfits">
            <div className="container flex flex-row">
                {/* <div className="cards flex w-full"> */}
                <ScrollAnimation delay={0} triggerOnce={false} className={"cd6 cm4 scroll-container mb"}>
                    <div className="card flex flex-col items-center round">
                        <img src="/images/image1.png" alt=""/>
                        <h2 className="title_card text-center">Получите <span>лучшие условия </span></h2>
                        <p className='text-center'>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Оставить заявку'
                            icon='true'
                        />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false} className={"cd6 cm4 scroll-container"}>
                    <div className="card card-2 flex flex-col items-center">
                        <img src="/images/image2.png" alt=""/>
                        <h2 className="title_card text-center">Получите <span>лучшие условия </span></h2>
                        <p className='text-center'>Отправляйте деньги через ACH, Wire или SWIFT в США или по всему миру в несколько кликов.</p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Оставить заявку'
                            icon='true'
                        />
                    </div>
                </ScrollAnimation>
                {/* </div> */}
            </div>
        </section>
    )
}