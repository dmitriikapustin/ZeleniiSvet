import ScrollAnimation from './animations/ScrollAnimation'

export default function ForWhat(){
    return (
        <section className="forWhat ">
            <div className="container cards_services flex flex-row items-center">
                <ScrollAnimation delay={0} triggerOnce={false} className={'cd6 cm4'}>
                    <div className="card_services flex flex-col items-center relative">
                        <img className="card_img w-auto h-auto" src="/images/card.png" alt=""/>
                        <h2 className="titleCard text-center"><span>Зачем</span> нужен кредитный брокер?</h2>
                        <p className='text-center'>Вам необходимы деньги, а банк по каким-то причинам не дал их в долг. Брокер согласует с банком всё по кредиту так, чтобы он вас устроил.</p>
                    </div>
                    
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false} className={'cd6 cm4'}>
                    <div className="card_services flex flex-col items-center relative">
                        <img className="card_img w-auto h-auto" src="/images/card.png" alt=""/>
                        <h2 className="titleCard text-center"><span>Зачем</span> нужен кредитный брокер?</h2>
                        <p className='text-center'>Вам необходимы деньги, а банк по каким-то причинам не дал их в долг. Брокер согласует с банком всё по кредиту так, чтобы он вас устроил.</p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}