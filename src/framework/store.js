import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage/session'; 

import appSaga from '../saga/app';
import appEpic from '../epic/app';
import app from '../reducer';

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const store = createStore(
//     combineReducers({
//         reducer,
//         router: routerReducer
//     }),
//     applyMiddleware(middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
// )

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  		// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  	}) : compose;

const enhancer = composeEnhancers(
	// applyMiddleware(sagaMiddleware)
	applyMiddleware(epicMiddleware)
);

const persistConfig = {
	key: 'react-lab',
	storage,
};

const persistedReducer = persistReducer(persistConfig, 
	combineReducers({
		app
	})
);

const store = createStore(
	// combineReducers({
	//     app,
	//     router: routerReducer
	// }),
	persistedReducer,
	enhancer
	// autoRehydrate()
);

persistStore(store);

// then run the saga
// sagaMiddleware.run(appSaga);
epicMiddleware.run(appEpic);

export default store;