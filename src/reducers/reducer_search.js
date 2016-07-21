import { SEARCH_CENTER } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = {latitude: 31.2001, longitude: 29.9187}, action) {   // data will be return on action.payload.data
	switch(action.type) {
	case SEARCH_CENTER:
  		return action.payload;
	}
	return state;
}
