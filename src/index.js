import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// CSS
import './css/mainSass.scss'

// DevTools
import DevTools from './Components/Shared/DevTools';
// Store
import configurStore from './Store/Store';

import MyAppContainer from './MyAppContainer';

const Store = configurStore();

const renderAPP = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
      <div>
        <Component />
        <DevTools />
      </div>
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  );
};

renderAPP(MyAppContainer);
if (module && module.hot) {
  module.hot.accept('./MyAppContainer', () => {
    render(MyAppContainer);
  });
};
