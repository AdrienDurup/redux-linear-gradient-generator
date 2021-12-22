// redux
import { Provider, useSelector } from 'react-redux';
import store from '../store';

// components
import GradientBox from '../components/GradientBox';
import Counter from '../components/Counter';
import ColorCodes from '../components/ColorCodes';
import ColorButtons from '../components/Colorbuttons';
import DegresButtons from '../components/DegresButtons';

const GradientCreator = () => {
  console.log('main');
  return (
    <Provider store={store}>
      <Counter />
      <ColorButtons />
      <ColorCodes />
      <GradientBox />
      <DegresButtons />
    </Provider>
  );
};
export default GradientCreator;
