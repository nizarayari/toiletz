import { FETCH_TOILETZ } from '../actions/index'

export default function(state=null,action){
	switch (action.type){
		case FETCH_TOILETZ:
		console.log(action.payload.data,"inside switch")
		return action.payload.data || action.payload
	}
	
	return state
 
}