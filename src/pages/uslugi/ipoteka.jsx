import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import Story from '@/components/Story';
import Text from '@/components/Text'
import MainProfits from '@/components/MainProfits'
import Button from '@/components/atoms/Button'

import { AllContexts } from '@/context/Context'

export async function getStaticProps() {
  const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
  const dataPhonesResp = respPhones.data;
  console.log(dataPhonesResp)
  return { props: { dataGetPhones: dataPhonesResp } }
}


function ipoteka (dataGetPhones) {

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
            newTitle='Поможем получить ипотеку на выгодных условиях'
          />
          <div className='bc-white-container'>
            <Calculator />
            <Story 
              type={5}
              reverse={true}
              title='Вы нуждаетесь в ипотечном кредите?'
              subtitle=''
              text='В компании Зелёный свет мы облегчаем получение ипотечного кредита. Наши сотрудники проводят индивидуальные консультации, разбирают сложившуюся ситуацию и находят оптимальные условия для каждого.'
              photo='/images/story-ipoteka-1.png'
            />
            <Story 
              type={5}
              title=''
              subtitle='Инвестирование в жилье — одно из самых ответственных финансовых решений, которые Вы можете принять. С нашей помощью Вы сможете получить средства, необходимые для приобретения дома вашей мечты.'
              text='Пройдите с Зелёным светом все этапы получения кредита, свяжитесь с нами сегодня и мы вместе найдём лучшие условия.'
              photo='/images/story-ipoteka-2.png'
            >
              <Button 
                  mode='light'
                  text='Бесплатная консультация'
                  icon='true'
              />
            </Story>
            <Text
              type={0}
              title='Оформи ипотеку'
              text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
              text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
            />
          </div>
          <Help/>
          <MainProfits />
          <Form/>
          <WeWork 
              index={2}
              title={''}
          />
          <CreditStory/>
          <PartnersBlock />
          <MapBlock/>
        </>
      );
}

export default ipoteka;