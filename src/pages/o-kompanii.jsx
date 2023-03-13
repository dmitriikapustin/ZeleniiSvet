import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'
import Text from '@/components/Text'

import { AllContexts } from '@/context/Context'

export async function getStaticProps() {
  const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
  const dataPhonesResp = respPhones.data;
  console.log(dataPhonesResp)
  return { props: { dataGetPhones: dataPhonesResp } }
}


function kontakty(dataGetPhones) {

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
      <div className='block py'></div>
      <Text
        type={1}
        title='Зелёный свет'
        text1='Зелёный свет — это компания, которая предоставляет людям доступ к кредитам на выгодных условиях. Мы понимаем, что жизнь может быть непредсказуемой и иногда вам нужна дополнительная финансовая поддержка. С нами вы можете получить быстрый и легкий доступ к необходимым вам средствам, не беспокоясь о высоких процентных ставках или скрытых комиссиях. У нас конкурентоспособные ставки и широкий спектр кредитных продуктов, поэтому  можете быть уверены — вы находитесь в надежных руках.'
        text2='Поиск подходящего кредитного решения может стать сложной задачей, но наша команда опытных профессионалов готова помочь вам. Обладая опытом во всех аспектах кредитования, мы будем работать с вами, чтобы найти индивидуальное финансовое решение, отвечающее вашим конкретным потребностям. Мы понимаем, что ситуация каждого человека уникальна — именно поэтому мы уделяем время тому, чтобы узнать каждого клиента и его цели, прежде чем создать индивидуальный план для получения кредита. '
      />
      <MapBlock/>
      <div className='bc-white-container'>
        <Calculator />
        <ForWhat />
      </div>
      <Help/>
      <MainProfits />
      <WeWork/>
      <CreditStory/>
      <PartnersBlock />
    </>
  );
}

export default kontakty;