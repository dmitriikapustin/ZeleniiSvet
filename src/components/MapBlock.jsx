import fb from '../assets/svg/socials/fb.svg'
import inst from '../assets/svg/socials/inst.svg'
import tg from '../assets/svg/socials/tg.svg'
import vk from '../assets/svg/socials/vk.svg'
import wa from '../assets/svg/socials/wa.svg'
import mark from '../assets/svg/map-icon.svg'
import mask from '../assets/svg/map-mask.svg'
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import ScrollAnimation from './animations/ScrollAnimation'

const MAP_POINT = [59.9651155, 30.3156276]

export default function MapBlock() {
    return (
        <section className="map relative">
            <div className="container flex items-center">
                <ScrollAnimation delay={0} triggerOnce={true} className={'map__info'}>
                        <h2 className="map__title">Мы всегда на связи 24/7</h2>
                        <p className="map__text">Вы всегда сможете дозвониться до нас и узнать ответы на все свои вопросы. </p>
                        <div className="map__group">
                            <div className="map__group-title">Телефон</div>
                            <a href="#" className="map__group-link">8 495 799 29 55</a>
                        </div>
                        <div className="map__group">
                            <div className="map__group-title">Почта</div>
                            <a href="mailto:hello@zesvet.ru" className="map__group-link">hello@zesvet.ru</a>
                        </div>
                        <div className="map__group">
                            <p className="map__group-title">Адрес</p>
                            <p className="map__group-link">
                                г. Москва, ул. Ленинская слобода, д. 26
                            </p>
                        </div>
                        <div className="map__group">
                            <div className="map__group-title">Мессенджеры и социальные сети</div>
                            <div className="map__group-socials flex">
                                <a className="" href="">
                                    <img src={fb.src} />
                                </a>
                                <a className="" href="">
                                    <img src={inst.src}/>
                                </a>
                                <a className="" href="">
                                    <img src={tg.src}/>
                                </a>
                                <a className="" href="">
                                    <img src={vk.src} />
                                </a>
                                <a className="" href="">
                                    <img src={wa.src} />
                                </a>
                            </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.7} triggerOnce={true} className={'map__map relative w-full'}>
                        <img src={mask.src} className='map__mask block absolute' />
                    <YMaps
                        width='100%'
                        height='100%'
                    >
                        <YMap 
                            width='100%'
                            height='100%'
                            defaultState={{ center: MAP_POINT, zoom: 17 }} 
                        >
                            <Placemark
                                    geometry={MAP_POINT}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageSize: [46, 69],
                                        iconImageHref: mark.src
                                    }}
                                />
                        </YMap>
                    </YMaps>
                </ScrollAnimation>
            </div>
        </section>
    )
}