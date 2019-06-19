// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter} from 'react-router-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import history from './history';
import store from './store';
import message_en from '../locale/message_en';
import AppRouter from './AppRouter';
import Header from '../page/Header';

// Intl
addLocaleData([...en]);
addLocaleData({
  locale: 'en-UPPER',
  parentLocale: 'en'
});

class AppController extends Component {

  render() {
    console.log("++++Test: store = ", store, store.getState());

    return (
      <div>
        <IntlProvider locale='en' messages={message_en} >
          <Provider store={store}>
            <Header />
            <ConnectedRouter history={history} store={store}>
              <AppRouter />
            </ConnectedRouter>
          </Provider>
        </IntlProvider>
      </div>
    );
  }
}

export default AppController;

