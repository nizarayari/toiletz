import { FETCH_REVIEWS } from '../actions/index';

const INITIAL_STATE = {};


export default function(state = INITIAL_STATE,action){
	
	switch(action.type){
		case FETCH_REVIEWS:
		console.log('inside swith reviews', action.payload.data)
			return action.payload.data;

	default:
		return state;
	}
}