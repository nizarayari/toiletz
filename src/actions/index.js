import axios from 'axios';

//grabs from server
//const ROOT_URL = 'localhost://3000'
const API_KEY = 'key';
export const FETCH_TOILETZ = 'FETCH_TOILETZ'

//const request = axios.get('{$ROOT_URL}/endpoint${API_KEY}');

export function search(endpoint) {
	const request = axios.get('./api/toilet//');

	return {
		type: FETCH_TOILETZ,
		payload: request
	};

}

export function SelectToilet (toilet){
	//SelectToilet is an ActionCreator, it needs to return an action,
	// an object with a type property.

	return {
		type: 'TOILET_SELECTED', //always uppercase
		//piece of data that describe the action
		payload: toilet

	};
}

// export function search(url) {
// 	return function(dispatch) {
// 		//dispatch(requestData());
// 		return axios.get('api/toilet')
// 			.then(function(response) {
// 				console.log(response);
// 				//dispatch(receiveData(response.data));
// 			})
// 			.catch(function(response){
// 				// dispatch(receiveError(response.data));
// 				// dispatch(pushState(null,'/error'));
// 			})
// 	}
// }