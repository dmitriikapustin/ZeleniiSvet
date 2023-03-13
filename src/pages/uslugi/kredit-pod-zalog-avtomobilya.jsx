import React from 'react'
import { useEffect, useContext } from 'react';
import axios from 'axios';

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import MainProfits from '@/components/MainProfits'
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import Story from '@/components/Story';

import Button from '@/components/atoms/Button'
import Text from '@/components/Text'

import { AllContexts } from '@/context/Context'

export async function getStaticProps() {
  const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
  const dataPhonesResp = respPhones.data;
  console.log(dataPhonesResp)
  return { props: { dataGetPhones: dataPhonesResp } }
}


const kreditpodzalogavtomobilya = (dataGetPhones) => {

  const {setPhonesData} = useContext(AllContexts)
  useEffect(() => {
    setPhonesData(dataGetPhones)
  }, [])

  return (
    <>
      <Head>
        <title>Зелёный свет</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
      <HeroSection
        type={1}
        newTitle='Поможем получить кредит под залог автомобиля на выгодных условиях'
      />

      <div className='bc-white-container'>
        <Calculator />
        <Story
          type={5}
          reverse={true}
          title='Необходим кредит под залог автомобиля?'
          subtitle=''
          text='Зелёный свет поможет Вам с документами, выбором подходящего банка и получением кредита под залог Вашего автомобиля.'
          photo='/images/story-avto-1.png'
        />
        <Story
          type={5}
          title=''
          subtitle='Наши опытные сотрудники избавят Вас от бумажной волокиты и расскажут обо всех нюансах банковской системы.'
          text='Обратитесь в компанию Зелёный свет сегодня, и мы поможем Вам облегчить процесс получения кредита!'
          photo='/images/story-avto-2.png'
        >
          <Button
            mode='light'
            text='Бесплатная консультация'
            icon='true'
          />
        </Story>
        <Text
          type={0}
          title='Оформи кредит под залог автомобиля'
          text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
          text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
        />
      </div>

      <Help />
      <MainProfits />
      <Form/>
      <WeWork
        index={4}
        title={''}
      />
      <CreditStory />
      <PartnersBlock />
      <MapBlock />
    </>
  )
}

export default kreditpodzalogavtomobilya
