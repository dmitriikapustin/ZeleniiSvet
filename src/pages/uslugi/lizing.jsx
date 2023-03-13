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


const lizing = (dataGetPhones) => {

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
        newTitle='Поможем получить лизинг на выгодных условиях'
      />

      <div className='bc-white-container'>
        <Calculator />
        <Story
          type={5}
          reverse={true}
          title='Затрудняетесь с получением кредита? Пусть Зелёный свет станет Вашим проводником!'
          subtitle=''
          text='Наша команда опытных профессионалов предлагает помощь в оформлении документов, выборе банка для лизинга и получении необходимого кредита.'
          photo='/images/story-lizing.png'
        />
        <Story
          type={5}
          title=''
          subtitle='Мы понимаем, как важно иметь финансовую поддержку, когда она Вам больше всего нужна. С нашей поддержкой Вы можете быть уверены, что процесс рассмотрения Вашей заявки на кредит пройдет  гладко и быстро.'
          text='Свяжитесь с Зелёным светом сегодня и получите кредит, который подходит именно Вам!'
          photo='/images/story-lizing-2.jpg'
        >
          <Button
            mode='light'
            text='Бесплатная консультация'
            icon='true'
          />
        </Story>
        <Text
          type={0}
          title='Оформи лизинг'
          text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
          text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
        />
      </div>

      <Help />
      <MainProfits />
      <Form/>
      <WeWork
        index={6}
        title={''}
      />
      <CreditStory />
      <PartnersBlock />
      <MapBlock />
    </>
  )
}

export default lizing
