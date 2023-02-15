import '../styles/Defaults.sass';
import '../styles/Classes.sass';

import '../styles/_other.sass';

// Подключаем атомы
// Атомы - мелкие элементы типа кнопок, табуляции и тд
import '../styles/atoms/Button.sass';

// Подключаем блоки
import '../styles/components/Block.sass';

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

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
