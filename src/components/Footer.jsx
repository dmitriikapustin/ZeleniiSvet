import logo from '../assets/svg/logo-light.svg'
import logoW from '../assets/svg/logo-white-bc.svg'
import wa from '../assets/svg/socials/wa.svg'
import tg from '../assets/svg/socials/tg.svg'

import Link from 'next/link'

import VideoBackground from './atoms/VideoBackground'

export default function Footer(){
    return(
        <footer className="footer relative">
            <VideoBackground />
            <div className="container">
                <div className="footer__top flex justify-between">
                    <h2 className="footer__title font-5-light">Поможем лучить кредит на выгодных условиях</h2>
                    <div className="footer__menu mbm">
                        <Link href="/">Главная</Link>
                        <Link href="/kreditniy-kalkulyator">Кредитный калькулятор</Link>
                        <Link href="/uslugi/potrebitelskiy-kredit" >Потребительский кредит</Link>
                        <Link href="/uslugi/refinansirovanie" >Рефинансирование</Link>
                        <Link href="/uslugi/ipoteka" >Ипотека</Link>
                        <Link href="/uslugi/kredit-pod-zalog-nedvizhimosti" >Кредит под залог недвижимости</Link>
                        <Link href="/uslugi/kredit-pod-zalog-avtomobilya" >Кредит под залог автомобиля</Link>
                        <Link href="/uslugi/kredit-dlya-yuridicheskikh-lits" >Кредит для юридических лиц</Link>
                        <Link href="/uslugi/lizing" >Лизинг</Link>
                        <Link href="/o-kompanii">О компании</Link>
                        <Link href="/kontakty">Контакты</Link>
                    </div>
                </div>
                <div className="footer__bottom flex items-center justify-between">
                    <div className='flex items-center'>
                        <img src={logoW.src} className='footer__logo' />
                        <p className='h-fit mb0 mlm'>&copy;&nbsp;{new Date().getFullYear()}</p>
                    </div>
                    <div className='footer__bottom-social flex item-center'>
                        <a href="https://wa.clck.bar/79381333311">
                            <img src={wa.src} />
                        </a>
                        <a href="https://t.me/GreenLight61">
                            <img src={tg.src} style={{marginRight: 2}} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}