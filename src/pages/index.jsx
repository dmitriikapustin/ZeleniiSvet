import React from 'react';
import { useState, useEffect, useContext } from 'react';


import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';

import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'

import { AllContexts } from '@/context/Context'

const dateC = new Date();

let day = dateC.getDate();
let month = dateC.getMonth();
let year = dateC.getFullYear();

console.log(day, month, year)

export async function getStaticProps() {
    const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
    const dataPhonesResp = respPhones.data;
    console.log(dataPhonesResp)
    return { props: { dataGetPhones: dataPhonesResp } }
}

function App(dataGetPhones) {
  
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
      <HeroSection/>
      <Services/>
      <div className='bc-white-container'>
        <Calculator />
        <ForWhat />
      </div>
      <Help/>
      <MainProfits />
      <Form/>
      <WeWork/>
      <CreditStory/>
      <PartnersBlock />
      <MapBlock/>
    </>
  );
}

export default App;