import axios from 'axios';
import apikey from '../env-google';
import querystring from 'querystring';

//grabs from server
//const ROOT_URL = 'localhost://3000'
const API_KEY = "PLACE YOUR API KEY HERE";
export const FETCH_TOILETZ = 'FETCH_TOILETZ';
export const SELECT_TOILETZ = 'SELECT_TOILETZ';
//const request = axios.get('{$ROOT_URL}/endpoint${API_KEY}');

export function search(endpoint) {
	return convertAddress(endpoint)
		.then(function(payload) {
			if(payload.error){
				console.log(payload.status, "ERROR INSIDE ACTIONS, IN SEARCH");
				console.log(payload.statusText, "ERROR INSIDE ACTIONS, IN SEARCH");
			}
			console.log(payload, "INSIDE SEARCH");
			axios.get('./api/toilet/',
				querystring.stringify({
			            latitude: payload.latitude,
					    longitude: payload.longitude,
					    address: payload.address
			    }), {
			      headers: { 
			        "Content-Type": "application/x-www-form-urlencoded"
			      }
			    })
				.then(function(payload) {
					if(payload.error) {
						console.log(payload.status, "ERROR INSIDE ACTIONS, IN SEARCH");
						console.log(payload.statusText, "ERROR INSIDE ACTIONS, IN SEARCH");
					}
					return {
							type: FETCH_TOILETZ,
							payload: payload
					};
				})
				.catch(function(response) {
					console.log(response);
				})
		})

}

export function convertAddress(address) {
	return new Promise(function(resolve, reject) {
	let response;
	let coords;
	resolve(axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + API_KEY)
		.then(function(payload) {
			if(payload.error) {
				console.log(payload.status, "ERROR INSIDE ACTIONS, IN CONVERTADDRESS");
				console.log(payload.statusText, "ERROR INSIDE ACTIONS, IN CONVERTADDRESS");
			}
			console.log(payload, "PAYLOAD (GOOGLE API) IN ACTIONS, CONVERTADDRESS");
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
			console.log(response);
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




