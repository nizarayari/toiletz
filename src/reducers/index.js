import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToiletReducer from './reducer_toilets';
import ActiveToilet from './reducer_active_toilets';
import SignInReducer from './reducer_sign_in';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  search: SearchReducer,
  toilets: ToiletReducer,
  activeToilet:ActiveToilet,
  user: SignInReducer,
  form:formReducer
});

export default rootReducer;
