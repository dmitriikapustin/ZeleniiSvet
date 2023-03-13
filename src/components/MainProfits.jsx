import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"

export default function MainProfits(){
    return (
        <section className="mainProfits">
            <div className="container flex flex-row">
                {/* <div className="cards flex w-full"> */}
                <ScrollAnimation delay={0} triggerOnce={false} className={"cd6 cm4 scroll-container mb"}>
                    <div className="card flex flex-col items-center round">
                        <img src="/images/photo_1.jpg" alt=""/>
                        <h3 className="title_card text-center px"><span>Профессиональная команда</span> финансовых специалистов </h3>
                        <p className='text-center'>Наша команда имеет большой опыт в решении финансовых вопросов, поэтому вы можете быть уверены, что любой совет, который вы получите, будет разработан специально для вашей ситуации и условий. </p>
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
                        <img src="/images/photo_2.jpg" alt=""/>
                        <h3 className="title_card text-center">Полноценный <br/><span>комплекс услуг</span></h3>
                        <p className='text-center'>Мы возьмем на себя весь процесс работы по решению вашего вопроса и будем сопровождать вас на каждом этапе получения кредита – от анализа документов до информирования об условиях одобренного кредита</p>
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