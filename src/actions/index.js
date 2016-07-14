import axios from 'axios';
//import Key from '../env-google';     remove comment after changing env-google-sample to env-google
import querystring from 'querystring';

//grabs from server
//const ROOT_URL = 'localhost://3000'
const API_KEY = "AIzaSyAUpKh2acbg-j_j4aRr-DGjeF7NXwCK_J4";    //This will be imported from env-google but it's not working now so just put your key here and remove before push


export const FETCH_TOILET = 'FETCH_TOILET';
export const FETCH_TOILETZ = 'FETCH_TOILETZ';
export const SELECT_TOILETZ = 'SELECT_TOILETZ';
export const CREATE_TOILET = 'CREATE_TOILET';

export function search(endpoint) {
	return convertAddress(endpoint)
		.then(function(payload) {
			
			let params = querystring.stringify({
	            latitude: payload.data.latitude,
			    longitude: payload.data.longitude,
			    address: payload.data.address
			});
			const request = axios.get('./api/toilet/', params)
					return {
						type: FETCH_TOILETZ,
						payload: request
					};
			
		})
		.catch(function(response) {
			console.log(response, "ERROR INSIDE FIRST THEN IN SEARCH IN ACTIONS");
		})
}

export function convertAddress(address) {
	return new Promise(function(resolve, reject) {
	let response;
	let coords;
	resolve(axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + API_KEY)
		.then(function(payload) {
			//console.log(payload, "PAYLOAD (GOOGLE API) IN ACTIONS, CONVERTADDRESS");
			response = payload.data.results[0].geometry.location;
			coords = { 
				latitude: response.lat,
			    longitude: response.lng,
			    address: address
			};
			return {
				data: coords
			}	
		}))
		.catch(function(response) {
			console.log(response, "ERROR INSIDE ACTIONS, IN CONVERTADDRESS");
		})
	})
}

export function SelectToilet(toilet){
	//SelectToilet is an ActionCreator, it needs to return an action,
	// an object with a type property.

	return {
		type: 'TOILET_SELECTED', //always uppercase
		//piece of data that describe the action
		payload: toilet

	};
}

export function createToilet(props) {
	const request = axios.post('./api/toilet//',props);

	return {
		type: CREATE_TOILET,
		payload: request
	};

}



