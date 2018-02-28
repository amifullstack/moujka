import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Store from './Store/Store';

// CSS
import './css/mainSass.scss'

import MyAppContainer from './MyAppContainer';

const renderAPP = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Component />
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
