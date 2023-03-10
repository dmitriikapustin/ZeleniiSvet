import React from 'react';

import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import MainProfits from '@/components/MainProfits'

function kontakty() {

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