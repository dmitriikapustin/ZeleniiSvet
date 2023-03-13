import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import MainProfits from '@/components/MainProfits'

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
      <div className='bc-white-container'>
        <Calculator />
      </div>
      <MainProfits />
      <WeWork/>
      <CreditStory/>
      <PartnersBlock />
      <MapBlock/>
    </>
  );
}

export default kontakty;