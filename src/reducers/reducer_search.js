import { FETCH_TOILETZ, FETCH_TOILET, FETCH_USER } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = 1, action) {   // data will be return on action.payload.data
	// switch(action.type) {
	// case FETCH_USER:
	// 	return { ...state, all: action.payload.data };
	// case FETCH_TOILET:
	// 	return { ...state, all: action.payload.data };
	// case FETCH_TOILETZ:
	// 	return { ...state, all: action.payload.data };
	// default:
	// 	return state;
	// }
	return state;
}