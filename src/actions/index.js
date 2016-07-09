import axios from 'axios';

//grabs from server
const ROOT_URL = 'localhost://3000/api/toilet'
const API_KEY = 'key';

//const request = axios.get('{$ROOT_URL}/endpoint${API_KEY}');


export function search(city,radius) {
	const url = ``
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