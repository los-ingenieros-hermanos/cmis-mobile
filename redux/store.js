import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import CurrentTabReducer from './reducers/currentTabReducer'; 
import UserIDReducer from './reducers/userIDReducer';

const rootReducer = combineReducers({
  count1: CountReducer,
  tabName: CurrentTabReducer,
  userID: UserIDReducer,
});
 
export const store = createStore(rootReducer);