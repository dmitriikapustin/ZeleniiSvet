import React, {useState, useEffect, useContext} from 'react';
import Link from "next/link";

import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

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
import Story from '@/components/Story';

import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'




import {PopupState} from '@/context/buttonContext'

import { Provider } from 'react';







export async function getStaticProps() {
	const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}

function ipoteka ({dataGetPhones}) {

    const [popupState, setPopupState] = useState(false)

    return (
        <>
          <Head>
            <title>Зелёный свет</title>
            <meta property="og:title" content="Заголовок" key="title" />
          </Head>
          <div className='scroll-area'>
            <PopupState.Provider value={{ popupState, setPopupState }}>
              <Header/>
            </PopupState.Provider>
              <main>
                <PopupState.Provider value={{ popupState, setPopupState }}>
                  <HeroSection
                    type={1}
                  />
                </PopupState.Provider>

                <div className='bc-white-container'>
                  <Calculator />
                  <Story 
                    type={2}
                    reverse={true}
                  />
                  {/* <ForWhat /> */}
                </div>
                
                <Help/>
                <MainProfits />
                <Form
                  data={dataGetPhones}
                />
                <WeWork 
                    index={2}
                    title={''}
                />
                <CreditStory/>
                <PartnersBlock />
                <MapBlock/>
              </main>
            <Footer/>
          </div>
        {/* <Story
            fetchUrl={''} // Сюда отдаем юрл который надо разобрать
            type={1}
            fullsize={false}
            reverse={true}
        /> */}
        {/* // <Layout>
            // <div>
            // 	<div className='container'>
            // 		<Link href={`/animation`}>Animation</Link>
            // 		<CalcBlock />
            // 		<FormBlock data={dataGetPhones}/>
            // 	</div>
            // </div>
        // </Layout> */}
        </>
      );
}

export default ipoteka;