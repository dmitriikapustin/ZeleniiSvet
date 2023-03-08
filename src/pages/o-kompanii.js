import React, {useState, useEffect, useContext} from 'react';
import Link from "next/link";

import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Slider from '../components/Slider';
import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';
import CreditStory from '@/components/CreditStory';

import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'


import {PopupState} from '../context/buttonContext'

function kontakty() {
  
  const [popupState, setPopupState] = useState(false)

  return (
    <>
      <Head>
        <title>Зелёный свет</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
      <PopupState.Provider value={{ popupState, setPopupState }}>
      <div className='scroll-area'>
          <Header/>
          <main>
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
          </main>
        <Footer/>
      </div>
      </PopupState.Provider>
    </>
  );
}

export default kontakty;