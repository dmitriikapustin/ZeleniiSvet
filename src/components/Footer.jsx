import logo from '../assets/svg/logo-light.svg'
import wa from '../assets/svg/socials/wa.svg'
import tg from '../assets/svg/socials/tg.svg'

import VideoBackground from './atoms/VideoBackground'

export default function Footer(){
    return(
        <footer className="footer relative">
            <VideoBackground />
            <div className="container">
                <div className="footer__top flex justify-between">
                    <h2 className="footer__title font-5-light">Поможем с кредитом на любые цели</h2>
                    <div className="footer__menu">
                        <a href="">Work</a>
                        <a href="">About us</a>
                        <a href="">Engagements</a>
                        <a href="">Career</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Customer Terms</a>
                        <a href="">Designer Terms</a>
                    </div>
                </div>
                <div className="footer__bottom flex items-center justify-between">
                    <div className='flex item-center'>
                        <img src={logo.src} className='footer__logo' />
                        <span>&copy;&nbsp;{new Date().getFullYear()}</span>
                    </div>
                    <div className='footer__bottom-social flex item-center'>
                        <a href="">
                            <img src={wa.src} />
                        </a>
                        <a href="">
                            <img src={tg.src} style={{marginRight: 2}} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}