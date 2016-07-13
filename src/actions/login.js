import axios from 'axios';

export const FETCH_USER;

export function login(endpoint) {
	const request = axios.get('./api/auth/signin//');

	return {
		type: FETCH_USER,
		payload: request
	};

}

