import { useState } from 'react'
import logo from '../assets/svg/logo.svg'

import PromoLine from '@/components/PromoLine'

export default function Header(){
    const [show, setShow] = useState(false)
    return(
        <>
        <header className="header">
            <PromoLine></PromoLine>
            <div className='container flex justify-between items-center mtm'>
                <img src={logo.src} className='header__logo' />
                <HeaderContent/>
                <div className={`header__burger ${show && 'header__burger--open'}`} onClick={() => setShow(!show)}>
                    <span></span><span></span><span></span>
                </div>
                <div className={`header-mob ${show && 'header-mob--open'}`} onClick={() => setShow(!show)}>
                    <div className='header-mob__menu'>
                        <HeaderContent isMob />
                    </div>
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
                <a href="#" className="header__menu-item">Про рынок</a>
                <a href="#" className="header__menu-item">Брокерские услуги</a>
                <a href="#" className="header__menu-item">Управление активами</a>
                <a href="#" className="header__menu-item">О компании</a>
            </nav>
            <button className='action action--light'>
                Оставить заявку
            </button>
        </>
    )
}