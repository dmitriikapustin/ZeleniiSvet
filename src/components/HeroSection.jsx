import VideoBackground from "./atoms/VideoBackground"

export default function HeroSection(){
    return(
        <section className="hero relative">
            <VideoBackground />
            <div className='container'>
                <div>
                    <h1 className="hero__title">
                        С нами вам одобрят кредит на
                    </h1>
                    <span className="">любые цели</span>
                    <h3>
                        Мы не берём предоплату и не просим миллиона документов.                 
                    </h3>
                    <button className="action">
                        Оставить заявку
                    </button>
                </div>
            </div>
            
        </section>
    )
}