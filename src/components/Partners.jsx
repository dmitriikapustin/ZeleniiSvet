import React from 'react'
import { motion } from "framer-motion";
import RunningLine from './animationC/RunningLine'
import RunLine from './animationC/RunLine'
import ScrollAnimation from './animationC/ScrollAnimation'



const PartnersBlock = () => {
  return (
    <div className='partners'>
        <div class="title_partners">
                <ScrollAnimation delay={0.3} triggerOnce={false}>
                    <h1 class="text_partners">Наши <span>партнеры</span></h1>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false}>
                    <p>Мы — группа брокерских компаний «Зелёный свет». Официально сотрудничаем с более чем 30 российскими банками, так как ценим честность и прозрачность в нашей работе.</p>
                </ScrollAnimation>
        </div>
        <div class="sliders_partners">
            <RunLine className={"slider_track"} fromX={"-50%"} toX={'0%'}>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                </div>
                <div class="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                </div>
            </RunLine>
            <RunLine className={"slider_track"} fromX={"0%"} toX={'-50%'}>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                </div>
                <div className="slide">
                    <img clasName="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                </div>
                <div className="slide">
                    <img clasName="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                </div>
            </RunLine>
            <RunLine className={"slider_track"} fromX={"-50%"} toX={'0%'}>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                </div>
            </RunLine>
            <RunLine className={"slider_track"} fromX={"0%"} toX={'-50%'}>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                </div>
                <div className="slide">
                    <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                </div>
            </RunLine>
        </div>
    </div>
  )
}

export default PartnersBlock
