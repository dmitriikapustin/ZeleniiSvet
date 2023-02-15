import React, {useState} from 'react';

import Button from '../components/Button';
import ProjectsList from '../components/ItemsCards.jsx';

import { motion, AnimatePresence } from "framer-motion";

import Head from 'next/head'

import Block from '../components/Block'

function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>

      <Head>
        <title>Заголовок</title>
        <meta property="og:title" content="Заголовок" key="title" />
      </Head>

      <Block />

    </>
  );
}

export default App;
