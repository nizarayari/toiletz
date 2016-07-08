import {combineReducers} from 'redux';
import ToiletReducer from './reducer_toilets'

const rootReducer = combineReducers({
	toilets: ToiletReducer
});

export default rootReducer;