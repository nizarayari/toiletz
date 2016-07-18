import { STORE_USER } from '../actions/auth';

export default function(state=null,action){
	switch (action.type){
		case STORE_USER:
		console.log(action.payload.data,"inside switch")
		return action.payload.data
	}
	
	return state
 
}