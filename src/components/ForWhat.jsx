import ScrollAnimation from './animationC/ScrollAnimation'


export default function forWhat(){
    return (
        <section className="forWhat">
            <div class="container">
                <div class="cards_services">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <div class="card_services">
                        <img class="card_img" src="/images/card.png" alt=""/>
                        <h1 class="title_card"><span>Зачем</span> нужно в две строки</h1>
                        <p>Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false}>
                    <div class="card_services">
                        <img class="card_img" src="/images/card.png" alt=""/>
                        <h1 class="title_card"><span>Зачем</span> нужно в две строки</h1>
                        <p>Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.</p>
                    </div>
                </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}