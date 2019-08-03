import { takeEvery } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloSaga(action) {
	let st = 1;
	yield st ++;
}
 
/*
   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
   Allows concurrent fetches of user.
 */
function* appSaga() {
	yield takeEvery('addRecord', helloSaga);
}

export default appSaga;