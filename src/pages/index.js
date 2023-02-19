import React, {useState, useEffect} from 'react';
import Link from "next/link";






import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Slider from '../components/Slider';
import CalcBlock from '@/blocks/CalcBlock';
import FormBlock from '@/blocks/FormBlock';
import PartnersBlock from '@/blocks/PartnersBlock';
import FormС from '../components/FormС'
import Layout from '../components/animationC/Layout'
import Head from 'next/head'
import PromoLine from '@/components/PromoLine';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';









export async function getStaticProps() {
	const respPhones = await axios.get(`http://localhost:1337/api/form-requests?populate=*`);
	const dataPhonesResp = respPhones.data;
	console.log("YOYOOOOYOOYOYYO")
	return { props: { dataGetPhones: dataPhonesResp } }
}





function App({dataGetPhones}) {



  return (

    <>

      <Head>
        <title>Заголовок</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
      <PromoLine/>
      <div className='scroll-area'>
        <Header/>
        <main>
          <HeroSection/>
          <Services/>
          <Help/>
          <WeWork/>
		  <PartnersBlock />
		  <div className='bc-white-container'>
		  	<CalcBlock />
		  </div>
		  <FormBlock data={dataGetPhones}/>
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
