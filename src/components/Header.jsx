import { useEffect, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import useMediaQuery from '../components/hooks/useDebounce'
import useWindowDimensions from '../components/hooks/useWindowDimensions'
import { useSyncExternalStore } from 'react';


import PromoLine from '@/components/PromoLine'



export default function Header(){
    const [show, setShow] = useState(false)

    const [width, height] = useWindowDimensions();

 
    console.log( height, width )


    // const dimensions = ;

    // function useWindowDimensions() {
    //     // the 3rd parameter is optional and only needed for server side rendering
    //     return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    // }
    
    // function subscribe(callback) {
    //     window.addEventListener('resize', callback);
    //     return () => window.removeEventListener('resize', callback);
    // }
    
    // function getSnapshot() {
    //     return { width: window.innerWidth, height: window.innerHeight };
    // }
    
    // function getServerSnapshot() {
    //     return {
    //         width: 0,
    //         height: 0,
    //     };
    // }

    // console.log(useWindowDimensions())

    return(
        <>
        <header className="header">
            <PromoLine></PromoLine>
            <div className='container flex justify-between items-center py'>
                <img src={logo.src} className='header__logo' />
                <HeaderContent width={width} />
                <div className={`header__burger ${show && 'header__burger--open'}`} onClick={() => setShow(!show)}>
                    <span></span><span></span><span></span>
                </div>
            </div>
            <div className={`header-mob ${show && 'header-mob--open'}`}>
                <div className='header-mob__menu'>
                    <HeaderContent width={width} />
                </div>
            </div>
        </header>
        </>
    )
}

const HeaderContent = ({width}) => {

    const [isTab, toggleTab] = useState(false)
    const [isHover, toggleHover] = useState(false)
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
      };
    
    const toggleTabMenu = () => {
        toggleTab(!isTab);
      };



    // const mobSize = useMediaQuery("(max-width: 800px)");

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
            duration: 0.2
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
            duration: 0.2,
            },
            transitionEnd: {
            display: "none"
            }
        }
    };

    return(
        <>

            <nav className="header__menu flex justify-between">
                <a href="#" className="header__menu-item">Главная</a>
                <a href="#" className="header__menu-item">Кредитный калькулятор</a>
                { width > 800 ?
                    <motion.div
                        onHoverStart={toggleHoverMenu}
                        onHoverEnd={toggleHoverMenu}
                        className='header__menu-container'
                    >
                        <a href="" className="header__menu-item">
                            Услуги
                        </a>
                        <motion.div
                            className="sub-menu"
                            initial="exit"
                            animate={isHover ? "enter" : "exit"}
                            variants={subMenuAnimate}
                        >
                            <div className="sub-menu-background" />
                            <div className="sub-menu-container flex flex-col">
                                <Link href={`services/potrebitelskiy-kredit`} className="sub-menu-item mbs">Потребительский кредит</Link>
                                <Link href={`services/refinansirovanie`} className="sub-menu-item mbs">Рефинансирование</Link>
                                <Link href={`services/ipoteka`} className="sub-menu-item mbs">Ипотека</Link>
                                <Link href={`services/kredit-pod-zalog-nedvizhimosti`} className="sub-menu-item mbs">Кредит под залог недвижимости</Link>
                                <Link href={`services/kredit-pod-zalog-avtomobilya`} className="sub-menu-item mbs">Кредит под залог автомобиля</Link>
                                <Link href={`services/kredit-dlya-yuridicheskikh-lits`} className="sub-menu-item mbs">Кредит для юридических лиц</Link>
                                <Link href={`services/lizing`} className="sub-menu-item">Лизинг</Link>
                            </div>
                        </motion.div>
                    </motion.div> :
                    <motion.div
                        onClick={() => toggleTab(!isTab)}
                        className='header__menu-container'
                    >
                        <a className="header__menu-item">
                            Услуги
                        </a>
                        <motion.div
                            className="sub-menu"
                            initial="exit"
                            animate={isTab ? "enter" : "exit"}
                            variants={subMenuAnimate}
                        >
                            <div className="sub-menu-background" />
                            <div className="sub-menu-container flex flex-col">
                                <Link href={`services/potrebitelskiy-kredit`} className="sub-menu-item mbs">Потребительский кредит</Link>
                                <Link href={`services/refinansirovanie`} className="sub-menu-item mbs">Рефинансирование</Link>
                                <Link href={`services/ipoteka`} className="sub-menu-item mbs">Ипотека</Link>
                                <Link href={`services/kredit-pod-zalog-nedvizhimosti`} className="sub-menu-item mbs">Кредит под залог недвижимости</Link>
                                <Link href={`services/kredit-pod-zalog-avtomobilya`} className="sub-menu-item mbs">Кредит под залог автомобиля</Link>
                                <Link href={`services/kredit-dlya-yuridicheskikh-lits`} className="sub-menu-item mbs">Кредит для юридических лиц</Link>
                                <Link href={`services/lizing`} className="sub-menu-item">Лизинг</Link>
                            </div>
                        </motion.div>
                    </motion.div>}
                <a href="#" className="header__menu-item">О компании</a>
                <a href="#" className="header__menu-item">Контакты</a>
            </nav>
            <button className='action action--light'>
                Оставить заявку
            </button>
        </>
    )
}