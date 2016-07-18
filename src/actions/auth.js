import axios from 'axios';
import { browserHistory } from 'react-router';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'auth_error';
export const STORE_USER = 'STORE_USER';
export let USER_ID;


export function login({ email, password }) {
    
    return function(dispatch){
    // Submit email/password to the server
    axios.post('/api/auth/login',{ email, password }) //should see the Token in Network => Preview
        .then( response => {
            //If request is good...
            // - update state to indicate user is authenticated
            dispatch({ type: AUTH_USER })
            // - Save the JWT token
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('userId',response.data.user.id)
            // - redirect to the route '/'
            browserHistory.push('/');
            storeId(response);
        })
        .catch(() => {
            //if request is bad...
            // - Show an error to the server
            dispatch(authError('Bad Login Info'))
        })
    }
}
export function signupUser({gender,password,email}) {
    
    return function(dispatch){
        axios.post('/api/auth/signup',{ 
            username:"Bob",
            password,
            email,
            gender
             
            }) 
            .then( response => {
                dispatch({ type: AUTH_USER})
                localStorage.setItem('token',response.data.token)
                browserHistory.push('/');
            })
            .catch(() => {
                dispatch(authError(response.data.error))
            })
    }
}
export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
export function signoutUser(){
    localStorage.removeItem('token');
    return { type: UNAUTH_USER }
}
export function storeId(response) {
    USER_ID = response.data.user.id;
}