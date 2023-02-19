import '../styles/Text.sass';
import '../styles/Defaults.sass';
import '../styles/Classes.sass';
import '../styles/App.sass';
import '../styles/Components.sass';
import '../styles/Animation.sass';
import '../styles/Mobile.sass';


import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {

  return (
    // <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    // </AnimatePresence>
  )
}
