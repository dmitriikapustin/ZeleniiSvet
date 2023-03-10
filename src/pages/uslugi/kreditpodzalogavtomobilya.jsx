import React, {useState, useEffect, useContext} from 'react'

import axios from 'axios';

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainProfits from '@/components/MainProfits'
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';
import CreditStory from '@/components/CreditStory';
import Story from '@/components/Story';

import {PopupState} from '@/context/buttonContext'

export async function getStaticProps() {
	const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}

const kreditpodzalogavtomobilya = ({ dataGetPhones }) => {
  const [popupState, setPopupState] = useState(false)


  return (
    <>
      <PopupState.Provider value={{ popupState, setPopupState }}>
        <Head>
          <title>Зелёный свет</title>
          <meta property="og:title" content="Заголовок" key="title" />
        </Head>
        <div className='scroll-area'>
          <Header />

          <main>
            <HeroSection
              type={1}
              newTitle='Поможем получить ипотеку на выгодных условиях'
            />

            <div className='bc-white-container'>
              <Calculator />
              <Story
                type={5}
                reverse={true}
                title='подзаголовк Заголовок'
                subtitle='Заголовок'
                text='Заголовок'
                photo='/images/avto.jpg'
              />
              {/* <ForWhat /> */}
            </div>

            <Help />
            <MainProfits />
            <Form
              data={dataGetPhones}
            />
            <WeWork
              index={4}
              title={''}
            />
            <CreditStory />
            <PartnersBlock />
            <MapBlock />
          </main>
          <Footer />
        </div>
      </PopupState.Provider>
    </>
  )
}

export default kreditpodzalogavtomobilya
