import React, { Component, Suspense } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import history from './history';
import store from './store';
import message_en from '../locale/message_en';

//UI
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

// import AppRouter from './AppRouter';
import Header from '../page/common/Header';
const AppLoader = React.lazy(() => import('./AppLoader'));
const CreateLeave = React.lazy(() => import('../page/CreateLeave'));
const LeaveSummary = React.lazy(() => import('../page/LeaveSummary'));

// Intl
addLocaleData([...en]);
addLocaleData({
  locale: 'en-UPPER',
  parentLocale: 'en'
});

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function AppController() {

  const classes = useStyles();

  const SuspenseLoading = (
    <CircularProgress className={classes.progress} />
  );

  function ActionLoading() {
    return (
      <React.Fragment>
        <CircularProgress className={classes.progress} color="secondary" />
      </React.Fragment>
    );
  }

  return (
    <div>
      <IntlProvider locale='en' messages={message_en} >
        <Provider store={store}>
          <Header />
          {/* <ActionLoading /> */}
          <Suspense fallback={SuspenseLoading} >
            <Container maxWidth="sm">
              <Router history={history}>
                <Route path="/" component={AppLoader} />
                <Route path="/create" component={CreateLeave}/>
                <Route path="/summary" component={LeaveSummary}/>
              </Router>
            </Container>
          </Suspense>
        </Provider>
      </IntlProvider>
    </div>
  );
}

