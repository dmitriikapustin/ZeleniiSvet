import React from 'react';

import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Head from 'next/head'
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';

function kontakty() {

  return (
    <>
      <Head>
        <title>Зелёный свет</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>
      <MapBlock/>
      <WeWork/>
    </>
  );
}

export default kontakty;