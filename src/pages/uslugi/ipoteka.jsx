import React from 'react';

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

function ipoteka () {

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