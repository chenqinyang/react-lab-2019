const initial = {
	id : 'NA'
};

const session = (state = initial, action) => {
	
  	switch (action.type) {
		  case "updateSession" :
		  	console.log("++++Test: state is ", state);
		  	console.log("++++Test: receive updateSession action, action is ", action);
			return Object.assign({}, state, action.session);
	  	default:
	  		return state;
  	}
};

export default session;