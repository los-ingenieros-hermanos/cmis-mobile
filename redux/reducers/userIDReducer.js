// redux/reducers/countReducer.js
const initialState = {
    userID:0,
    userRole:""
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          ...state,
          userID:action.payload,
        };
      case 'SET_ROLE':
          return {
            ...state,
            userRole:action.payload,
          };  
      default:
        return state;
    }
  };