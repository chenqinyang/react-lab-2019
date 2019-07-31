import React, { Component, Suspense } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import history from './history';
import store from './store';
import message_en from '../locale/message_en';
// import AppRouter from './AppRouter';
import Header from '../page/common/Header';

const AppLoader = React.lazy(() => import('./AppLoader'));
const CreateRecord = React.lazy(() => import('../page/CreateRecord'));
const RecordSummary = React.lazy(() => import('../page/RecordSummary'));
const HookTrier = React.lazy(() => import('../page/HookTrier'));

// Intl
addLocaleData([...en]);
addLocaleData({
  locale: 'en-UPPER',
  parentLocale: 'en'
});

export default function AppController() {

  const Loading = (
    <div> Loading... </div>
  );

  return (
    <div>
      <IntlProvider locale='en' messages={message_en} >
        <Provider store={store}>
          <Header />
          <Suspense fallback={Loading} >
            <Router history={history}>
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/summary">Summary</Link>
          </li>
          <li>
            <Link to="/hookTrier">Hook Trier</Link>
          </li>
              <Route path="/" component={AppLoader} />
              <Route path="/create" component={CreateRecord}/>
              <Route path="/summary" component={RecordSummary}/>
              <Route path="/hookTrier" component={HookTrier}/>
            </Router>
          </Suspense>
        </Provider>
      </IntlProvider>
    </div>
  );
}

