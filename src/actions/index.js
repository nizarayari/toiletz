import axios from 'axios';

//grabs from server
const ROOT_URL = 'root url'
const API_KEY = 'key';

//const request = axios.get('{$ROOT_URL}/endpoint${API_KEY}');


export function search(endpoint) {
	const request = axios.get('api/review/user/15');

	return {
		type: 'FETCH_TOILETZ',
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