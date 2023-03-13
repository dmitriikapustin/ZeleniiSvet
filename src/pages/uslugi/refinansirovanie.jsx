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


const refinansirovanie = (dataGetPhones) => {

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
        newTitle='Поможем получить рефинансирование на выгодных условиях'
      />

      <div className='bc-white-container'>
        <Calculator />
        <Story
          type={5}
          reverse={true}
          title='Вы хотите рефинансировать свой кредит, но не знаете, с чего начать?'
          subtitle=''
          text='Зелёный свет поможет упростить этот процесс. Благодаря нашей команде экспертов и простому оформлению документов мы поможем получить лучшую ставку по Вашему кредиту.          '
          photo='/images/story-refin-1.jpg'
        />
        <Story
          type={5}
          title=''
          subtitle='Наш быстрый и эффективный процесс позволяет получить отличную ставку с минимальными усилиями. Наши кредитные консультанты помогут Вам выбрать банк, идеально подходящий для Ваших потребностей.'
          text='Начните работу с Зелёным светом уже сегодня, минимизируя заботы и стресс!'
          photo='/images/story-refin-2.jpg'
        >
          <Button
            mode='light'
            text='Бесплатная консультация'
            icon='true'
          />
        </Story>
        <Text
          type={0}
          title='Оформи рефинансирование'
          text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
          text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
        />
      </div>

      <Help />
      <MainProfits />
      <Form/>
      <WeWork
        index={1}
        title={''}
      />
      <CreditStory />
      <PartnersBlock />
      <MapBlock />
    </>
  )
}

export default refinansirovanie
