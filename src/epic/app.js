import { ofType} from 'redux-observable';
import {delay, mergeMap, mapTo} from 'rxjs/operators';

const appEpic = action$ => action$.pipe(
	ofType('addRecord'),
	delay(1000), // Asynchronously wait 1000ms then continue
	// mergeMap(action => {console.log('++++Test: the action is triggered and catch by Epic , ', action); return {type: 'DONNOT'}; } )
	mapTo ({ type: 'addRecordDone'})
);

export default appEpic;