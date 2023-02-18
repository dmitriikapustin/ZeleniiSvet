import React from 'react';

import Head from 'next/head'
import PromoLine from '@/components/PromoLine';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork/WeWork';
import MapBlock from '@/components/MapBlock';
import Footer from '@/components/Footer';

function App() {

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
          <MapBlock/>
          <Footer/>
        </main>
      </div>
    </>
  );
}

export default App;
