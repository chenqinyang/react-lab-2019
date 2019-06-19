const initial = [];

const func = (state = initial, action) => {

	switch (action.type) {
		case "addRecord":
			let newState = Object.assign([], state);
			newState.push(action.record);
			return newState;
		default:
			return state;
	}
};

export default func;