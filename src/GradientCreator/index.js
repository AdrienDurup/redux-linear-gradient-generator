// redux
import { Provider } from 'react-redux';
import store from '../store';

// components
import GradientBox from '../components/GradientBox';
import Counter from '../components/Counter';
import ColorCodes from '../components/App/ColorCodes';
import ColorButtons from '../components/Colorbuttons';
import DegresButtons from '../components/DegresButtons';

const GradientCreator = () => {

  console.log('main');
  const test = () => {
    console.log('test bouton');
  };
  return (
    <Provider store={store}>
      <Counter value={0} />
      <ColorButtons setFirst={test} setLast={test} setAll={test} resetAll={test} />
      <ColorCodes first={'#FF00FF'} last={'#FFFF00'} />
      <GradientBox />
      <DegresButtons />
    </Provider>
  );
};
export default GradientCreator;
