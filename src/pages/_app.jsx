
import '../styles/App.sass';

import { AnimatePresence } from 'framer-motion'

import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
