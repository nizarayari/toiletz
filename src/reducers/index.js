import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import ToiletReducer from './reducer_toilets';
import ActiveToilet from './reducer_active_toilets';

const rootReducer = combineReducers({
  search: SearchReducer,
  toilets: ToiletReducer,
  activeToilet:ActiveToilet
});

export default rootReducer;
