
import '../styles/App.sass';

import { AnimatePresence } from 'framer-motion'

import ButtonContext from '../context/buttonContext'

export default function MyApp({ Component, pageProps }) {

  return (

        <ButtonContext>
          <Component {...pageProps} />
        </ButtonContext>

  )
}
