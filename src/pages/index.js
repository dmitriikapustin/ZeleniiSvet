import React, {useState, useEffect} from 'react';
import Link from "next/link";






import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Slider from '../components/Slider';
import Calculator from '@/components/Calculator';
import FormBlock from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import FormС from '../components/FormС'
import Head from 'next/head'
import PromoLine from '@/components/PromoLine';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';
import Story from '@/components/Story';


import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'


export async function getStaticProps() {
	const respPhones = await axios.get(`https://api.zesvet.ru/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log(dataPhonesResp)
	return { props: { dataGetPhones: dataPhonesResp } }
}





function App({dataGetPhones}) {



  return (

    <>

      <Head>
        <title>Зелёный свет</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
      <div className='scroll-area'>
      {/* <Story
          fetchUrl={''} // Сюда отдаем юрл который надо разобрать
          type={1}
          fullsize={false}
          reverse={true}
      /> */}
		  {/* <div className='bc-white-container'>
        <ForWhat />
		  </div>
		  <FormBlock data={dataGetPhones}/> */}
        <Header/>
        <main>
          <HeroSection/>
          <Services/>
          <div className='bc-white-container'>
            <Calculator />
          </div>
		  	  
          <Help/>
          <MainProfits />
          <WeWork/>
		      <PartnersBlock />
          <MapBlock/>
          <Footer/>
        </main>
      </div>
    </>
	// <Layout>
		// <div>
		// 	<div className='container'>
		// 		<Link href={`/animation`}>Animation</Link>
		// 		<CalcBlock />
		// 		<FormBlock data={dataGetPhones}/>
		// 	</div>
		// </div>
	// </Layout>
  );
}



export default App;
