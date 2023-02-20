import '../styles/Defaults.sass';
import '../styles/Classes.sass';

// Подключаем атомы
// Атомы - мелкие элементы типа кнопок, табуляции и тд
import '../styles/atoms/Button.sass';

// Подключаем блоки
import '../styles/components/Block.sass';
import '../styles/components/PromoLine.sass'
import '../styles/components/Header.sass'
import '../styles/components/HeroSection.sass'
import '../styles/components/Services.sass'
import '../styles/components/Help.sass'
import '../styles/components/WeWork.sass'
import '../styles/components/Map.sass'
import '../styles/components/Footer.sass'

import '../styles/components/Partners.sass'
import '../styles/components/IndCalculator.sass'
import '../styles/components/Calculator.sass'
import '../styles/components/Form.sass'
import '../styles/components/Calculator.sass'
import '../styles/components/PromoLine.sass'

import '../styles/components/MainProfits.sass'
import '../styles/components/ForWhat.sass'


// Эти контроллеры не удаляем
// Внутри контроллеров пишутся дефолтные стили по цветам, шрифтам и прочему
import '../styles/controllers/Colors.sass';
import '../styles/controllers/DarkMode.sass';
import '../styles/controllers/Fonts.sass';
import '../styles/controllers/Graphik.sass';
import '../styles/controllers/Grid.scss';
import '../styles/controllers/HorizontalMobile.sass';
import '../styles/controllers/Radius.sass';
import '../styles/controllers/TextSizes.sass';
import '../styles/controllers/WhiteSpace.sass';


// Вот это надо будет потом на свежую голову в компоненты запихать
import '../styles/Mobile.sass';


import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {

  return (
    // <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    // </AnimatePresence>
  )
}
