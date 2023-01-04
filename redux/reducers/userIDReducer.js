// redux/reducers/countReducer.js
const initialState = {
    userID:0
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          ...state,
          userID:action.payload,
        };
      default:
        return state;
    }
  };