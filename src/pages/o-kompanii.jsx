import React from 'react';

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


function kontakty() {

  return (
    <>
      <Head>
        <title>Зелёный свет</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
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