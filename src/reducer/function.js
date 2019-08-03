const initial = [];

const func = (state = initial, action) => {

	switch (action.type) {
	case 'addRecord':
		let newState = Object.assign([], state);
		newState.push(action.record);
		return newState;
	case 'addRecordDone':
		console.log('++++Test: add record is done and this should be from epic.');
		return state;
	default:
		return state;
	}
};

export default func;