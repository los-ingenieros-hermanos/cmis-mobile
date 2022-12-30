// redux/reducers/countReducer.js
const initialState = {
    tabName:"Home"
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_TAB':
        return {
          ...state,
          tabName:action.payload,
        };
      default:
        return state;
    }
  };