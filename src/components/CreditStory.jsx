import React from 'react'
import ScrollAnimation from './animations/ScrollAnimation'

const CreditStory = () => {
  return (
    <section className='creditstory'>
        <div className='container flex flex-col'>
            <ScrollAnimation delay={0}>
                <div className="title">
                    <h2>Кредитная история</h2>
                </div>
            </ScrollAnimation>
            <div className="flex flex-row items-center">
                <ScrollAnimation delay={0} className={'cd6 cm4'}>
                    <div className="flex flex-col">
                        <div className="top flex flex-col">
                            <h3 className='text-center mb0'>Экспертное заключение по вашей кредитной истории</h3>
                            <p className='text-center w-full'>но основе данных из двух бюро</p>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center">
                            <div className="cd6 cm2">
                                <button className='action action--light w-fit'>
                                    <span>Получить выписку</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 13.5L9.45 12.4125L12.1125 9.75H3V8.25H12.1125L9.45 5.5875L10.5 4.5L15 9L10.5 13.5Z" fill="#FBFBFB"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm2">
                                <span className='mb0'>Решение за 20 минут</span>
                                <p className='mb0'>услуга предоставляется в офисе компании</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} className={'cd6 cm4'}>
                    <div className="flex flex-col">
                        <div className="top flex flex-col">
                            <h3 className='text-center mb0'>Проверить кредитную историю</h3>
                            <p className='text-center w-full'>расширенная версия из НБКИ</p>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center">
                            <div className="cd6 cm2">
                                <button className='action action--light w-fit'>
                                    <span>Получить выписку</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 13.5L9.45 12.4125L12.1125 9.75H3V8.25H12.1125L9.45 5.5875L10.5 4.5L15 9L10.5 13.5Z" fill="#FBFBFB"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm2">
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
