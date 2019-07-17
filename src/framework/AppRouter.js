import React, { Component, Suspense } from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

const AppLoader = React.lazy(() => import('./AppLoader'));
const CreateRecord = React.lazy(() => import('../page/CreateRecord'));
const RecordSummary = React.lazy(() => import('../page/RecordSummary'));
const HookTrier = React.lazy(() => import('../page/HookTrier'));

class AppRouter extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const routes = [
      {
        path: '/',
        component: AppLoader
      },
      {
        path: '/create',
        component: CreateRecord
      },
      {
        path: '/summary',
        component: RecordSummary
      },
      {
        path: '/hookTrier',
        component: HookTrier
      }
    ];

    const RouteWithSubRoutes = (route) => (
      <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )} />
    );

    const Loading = (
      <React.Fragment>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </React.Fragment>
    );


    return (
      <React.Fragment>
        <Suspense fallback={Loading}>

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

        </Suspense>
      </React.Fragment >
    );
  }
}

export default AppRouter;