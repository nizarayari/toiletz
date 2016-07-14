import { FETCH_USER } from '../actions/index'

export default function(state=null,action){
	console.log("Show me my user data",action);
	switch (action.type){
		case FETCH_USER:
		console.log(action.payload.data,"inside switch")
		return action.payload.data
	}
	
	return state
 
}