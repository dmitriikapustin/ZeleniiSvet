import ScrollAnimation from './animationC/ScrollAnimation'


export default function forWhat(){
    return (
        <section className="forWhat">
            <div class="container">
                <div class="cards_services">
                <ScrollAnimation delay={0} triggerOnce={true}>
                    <div class="card_services">
                        <img class="card_img" src="/images/card.png" alt=""/>
                        <h1 class="title_card"><span>Зачем</span> нужен кредитный брокер?</h1>
                        <p>Вам необходимы деньги, а банк по каким-то причинам не дал их в долг. Брокер согласует с банком всё по кредиту так, чтобы он вас устроил.</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={true}>
                    <div class="card_services">
                        <img class="card_img" src="/images/card.png" alt=""/>
                        <h1 class="title_card"><span>Зачем</span> нужен кредитный брокер?</h1>
                        <p>В вашем текущем кредите есть просрочка, а банк отказался идти на компромисс? Наш специалист рефинансирует этот долг на выгодных условиях, сэкономив ваши деньги и время.</p>
                    </div>
                </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}