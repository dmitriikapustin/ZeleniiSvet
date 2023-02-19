import fb from '../assets/svg/socials/fb.svg'
import inst from '../assets/svg/socials/inst.svg'
import tg from '../assets/svg/socials/tg.svg'
import vk from '../assets/svg/socials/vk.svg'
import wa from '../assets/svg/socials/wa.svg'
import mark from '../assets/svg/map-icon.svg'
import mask from '../assets/svg/map-mask.svg'
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";

const MAP_POINT = [59.9651155, 30.3156276]

export default function MapBlock() {
    return (
        <section className="map">
            <div className="container flex">
                <div className="map__info">
                    <h2 className="map__title">Мы всегда на связи</h2>
                    <p className="map__text">Группа Компаний «Зеленый свет» создана, чтобы оказывать качественные финансовые услуги.</p>
                    <div className="map__group">
                        <div className="map__group-title">Телефон</div>
                        <a href="#" className="map__group-link">8 999 999 99 99</a>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Почта</div>
                        <a href="mailto:hello@zesvet.ru" className="map__group-link">hello@zesvet.ru</a>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Адрес</div>
                        <div className="map__group-link">
                            Тут какой-то адрес в 2 строки, 125480
                        </div>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Мессенджеры и социальные сети</div>
                        <div className="map__group-socials">
                            <a href="">
                                <img src={fb.src} />
                            </a>
                            <a href="">
                                <img src={inst.src}/>
                            </a>
                            <a href="">
                                <img src={tg.src}/>
                            </a>
                            <a href="">
                                <img src={vk.src} />
                            </a>
                            <a href="">
                                <img src={wa.src} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='map__map'>
                    <img src={mask.src} className='map__mask' />
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
                </div>
            </div>
        </section>
    )
}