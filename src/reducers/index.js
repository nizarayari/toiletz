import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToiletReducer from './reducer_toilets';
import ActiveToilet from './reducer_active_toilets';
import {reducer as formReducer} from 'redux-form';
import ReviewsReducer from './reducer_reviews';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  toilets: ToiletReducer,
  activeToilet:ActiveToilet,
  reviews: ReviewsReducer,
  auth: authReducer,
  form:formReducer,
});

export default rootReducer;
