import React, {useState, useEffect, useContext} from 'react';
import Link from "next/link";

import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';
import CreditStory from '@/components/CreditStory';
import Story from '@/components/Story';
import Text from '@/components/Text'

import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'


import Button from '@/components/atoms/Button'




import {PopupState} from '@/context/buttonContext'

import { Provider } from 'react';







export async function getStaticProps() {
	const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}

function ipoteka ({dataGetPhones}) {

    const [popupState, setPopupState] = useState(false)

    return (
        <>
            <PopupState.Provider value={{ popupState, setPopupState }}>
          <Head>
            <title>Зелёный свет</title>
            <meta property="og:title" content="Заголовок" key="title" />
          </Head>
          <div className='scroll-area'>
              <Header/>
            
              <main>
                  <HeroSection
                    type={1}
                    newTitle='Поможем получить ипотеку на выгодных условиях'
                  />

                <div className='bc-white-container'>
                  <Calculator />
                  <Story 
                    type={5}
                    reverse={true}
                    title='Заголовок'
                    subtitle='Подзаголовок'
                    text='Текст'
                    photo='/images/avto.jpg'
                  />
                  <Story 
                    type={5}
                    title='Заголовок'
                    subtitle='Подзаголовок'
                    text='Текст'
                    photo='/images/avto.jpg'
                  >
                    <Button 
                        mode='light'
                        text='Бесплатная консультация'
                        icon='true'
                    />
                  </Story>
                  <Text
                    type={1}
                    title='Оформи ипотеку'
                    text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
                    text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
                  />
                </div>
                
                <Help/>
                <MainProfits />
                <Form
                  data={dataGetPhones}
                />
                <WeWork 
                    index={2}
                    title={''}
                />
                <CreditStory/>
                <PartnersBlock />
                <MapBlock/>
              </main>
            <Footer/>
          </div>
        </PopupState.Provider>
        </>
      );
}

export default ipoteka;