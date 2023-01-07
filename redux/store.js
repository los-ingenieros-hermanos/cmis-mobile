import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import CurrentTabReducer from './reducers/currentTabReducer'; 
import CurrentUserReducer from './reducers/userIDReducer';
import StudentDataReducer from './reducers/studentDataReducer';
import CommunityDataReducer from './reducers/communityDataReducer';
import urlReducer from './reducers/urlReducer';
import NavigationReducer from './reducers/navigationReducer';
import DesiredProfileReducer from './reducers/desiredProfileReducer';

const rootReducer = combineReducers({
  count1: CountReducer,
  tabName: CurrentTabReducer,
  userID: CurrentUserReducer,
  studentData: StudentDataReducer,
  communityData: CommunityDataReducer,
  url: urlReducer,
  customNavigation: NavigationReducer,
  desiredProfileID : DesiredProfileReducer
});
 
export const store = createStore(rootReducer);