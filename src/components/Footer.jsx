import logo from '../assets/svg/logo-light.svg'
import logoW from '../assets/svg/logo-white-bc.svg'
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
                    <div className="footer__menu mbm">
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
                    <div className='flex items-center'>
                        <img src={logoW.src} className='footer__logo' />
                        <p className='h-fit mb0 mlm'>&copy;&nbsp;{new Date().getFullYear()}</p>
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