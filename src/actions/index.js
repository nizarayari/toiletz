import axios from 'axios';

//grabs from server
const ROOT_URL = 'localhost://3000'
const API_KEY = 'key';
export const FETCH_TOILETZ = 'FETCH_TOILETZ'

//const request = axios.get('{$ROOT_URL}/endpoint${API_KEY}');


export function search(city,radius) {
	const url = `${ROOT_URL}/api/toilet`
	const request = axios.get(url);

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