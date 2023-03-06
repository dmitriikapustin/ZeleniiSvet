import { useState } from 'react'
import logo from '../assets/svg/logo.svg'

import PromoLine from '@/components/PromoLine'
import VideoBackground from '@/components/atoms/VideoBackground'

export default function Header(){
    const [show, setShow] = useState(false)
    return(
        <>
        <header className="header">
            <PromoLine></PromoLine>
            <div className='container flex justify-between items-center py'>
                <img src={logo.src} className='header__logo' />
                <HeaderContent/>
                <div className={`header__burger ${show && 'header__burger--open'}`} onClick={() => setShow(!show)}>
                    <span></span><span></span><span></span>
                </div>
            </div>
            <div className={`header-mob ${show && 'header-mob--open'}`} onClick={() => setShow(!show)}>
                <div className='header-mob__menu'>
                    <HeaderContent isMob />
                </div>
            </div>
        </header>
        </>
    )
}

const HeaderContent = ({isMob}) => {
    return(
        <>
        
            <nav className="header__menu flex justify-between">
                <a href="#" className="header__menu-item">Главная</a>
                <a href="#" className="header__menu-item">Кредитный калькулятор</a>
                <a className="header__menu-item">Услуги</a>
                <a href="#" className="header__menu-item">О компании</a>
                <a href="#" className="header__menu-item">Контакты</a>
            </nav>
            <button className='action action--light relative ov-hidden'>
                <a className='z-100'>Оставить заявку</a>
                <div style={{opacity: 0.69}}>
                    <VideoBackground />
                </div>
            </button>
        </>
    )
}