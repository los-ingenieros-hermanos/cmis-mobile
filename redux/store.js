import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import CurrentTabReducer from './reducers/currentTabReducer'; 

const rootReducer = combineReducers({
  count1: CountReducer,
  tabName: CurrentTabReducer
});
 
export const store = createStore(rootReducer);