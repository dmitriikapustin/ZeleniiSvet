import { useEffect, useState, useContext } from 'react'
import logo from '../assets/svg/logo.svg'
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import useMediaQuery from '../components/hooks/useDebounce'
import useWindowDimensions from '../components/hooks/useWindowDimensions'
import { useSyncExternalStore } from 'react';
import {PopupState} from '../context/buttonContext'




import PromoLine from '@/components/PromoLine'


export default function Header(){
    const [show, setShow] = useState(false)

    const [width, height] = useWindowDimensions();

    const [isServicesOpen, setServicesOpen] = useState(false)

 
    useEffect(() => {
        console.log( isServicesOpen )
    }, [isServicesOpen])


 

    return(
        <>
            <header className="header">
                <PromoLine></PromoLine>
                <div className='container flex justify-between items-center py'>
                    <img src={logo.src} className='header__logo' />
                    <HeaderContent width={width} />
                    <div className={`header__burger ${show && 'header__burger--open'} ${isServicesOpen && ' services-open'}`} onClick={() => setShow(!show)}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className={`header-mob ${show && 'header-mob--open'} `}>
                    <div className={`header-mob__menu ${isServicesOpen && 'services-open'}` }>
                        <HeaderContent setServicesOpen={setServicesOpen} width={width} />
                    </div>
                </div>
            </header>
        </>
    )
}

const HeaderContent = (props) => {

    const {popupState, setPopupState} = useContext(PopupState)

    // console.log(popupState)

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

            <nav className={"header__menu flex justify-between" + (isTab === true ? " services-open" : "")}>
                <a href="#" className="header__menu-item">Главная</a>
                <a href="#" className="header__menu-item">Кредитный калькулятор</a>
                { props.width > 800 ?
                    <motion.div
                        onHoverStart={toggleHoverMenu}
                        onHoverEnd={toggleHoverMenu}
                        className='header__menu-container'
                    >
                        <motion.button
                            // whileTap={{ scale: 0.97 }}
                            animate={isHover ? "open" : "closed"}
                            >
                            <a href="" className="header__menu-item">
                                Услуги
                            </a>
                            <motion.div
                                variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                                }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.55 }}
                            >
                                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
                                </svg>

                            </motion.div>
                        </motion.button>
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
                        onClick={() => {
                            toggleTab(!isTab)
                            props.setServicesOpen(!isTab)
                        }}
                        className='header__menu-container'
                    >
                        <motion.button
                            // whileTap={{ scale: 0.97 }}
                            animate={isTab ? "open" : "closed"}
                            onClick={() => {
                                toggleTab(!isTab)
                                props.setServicesOpen(!isTab)
                            }}
                            >
                            <a className="header__menu-item">
                                Услуги
                            </a>
                            <motion.div
                                variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                                }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.55 }}
                            >
                                <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
                                </svg>

                            </motion.div>
                        </motion.button>
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
            <button 
                className='action action--light'
                onClick={() => setPopupState(!popupState)}
            >
                Оставить заявку
            </button>
            <div className={"popup" + (popupState === true ? ' open' : '')}>POPUP</div>
        </>
    )
}