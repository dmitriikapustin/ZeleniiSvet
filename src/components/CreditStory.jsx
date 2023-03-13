import Image from 'next/image'
import React from 'react'
import ScrollAnimation from './animations/ScrollAnimation'

import Button from "./atoms/Button"

const CreditStory = (props) => {

    // props.fetchUrl

    const imageWidth = 2000
    const imageHeight = 2000
    
    const title = 'Увеличиваем прибыль вашего бизнеса'
    const subtitle = 'Делаем это быстро и надежно'
    const text = 'Какой то длинный текст'
    const photo = 'LINK'

  return (
    <section className='creditstory'>
        <div className='container flex flex-col'>
            <ScrollAnimation delay={0}>
                <div className="title mbl">
                    <h2>Проверьте кредитную историю</h2>
                </div>
            </ScrollAnimation>
            <div className="flex flex-row items-start">
                <ScrollAnimation delay={0} className={'cd6 cm4'}>
                    <div className="c-card flex flex-col">
                        <div className="top flex flex-col mb items-center">
                            <h3 className='text-center mbs cd9'>Экспертное заключение по вашей кредитной истории</h3>
                            <p className='text-center w-full'>но основе данных из двух бюро</p>
                            <Image width={imageWidth} height={imageHeight} src='/images/cs_1.svg'/>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center items-center">
                            <div className="cd6 cm4 mb">
                                <Button 
                                    className=''
                                    component='CreditStory'
                                    mode="light"
                                    text='Получить выписку'
                                    icon='true'
                                />
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm4">
                                    <span className='mb0'>Решение за 20 минут</span>
                                    <p className='mb0'>услуга предоставляется в офисе компании</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} className={'cd6 cm4'}>
                    <div className="c-card flex flex-col">
                        <div className="top flex flex-col mb items-center">
                            <h3 className='text-center mbs cd9'>Проверить кредитную историю онлайн</h3>
                            <p className='text-center w-full'>расширенная версия из НБКИ</p>
                            <Image width={imageWidth} height={imageHeight} src='/images/cs_2.svg'/>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center items-center">
                            <div className="cd6 cm4 mb">
                                <Button 
                                    style={{width: 'fit-content !important'}}
                                    component='CreditStory'
                                    mode="light"
                                    text='Получить выписку'
                                    icon='true'
                                />
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm4">
                                <span className='mb0'>Стоимость</span>
                                <p className='mb0'>Необходимо письменное согласие</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </section>
  )
}

export default CreditStory
