// redux/reducers/countReducer.js
const initialState = {
    id:"-1"
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DESIRED_PROFILE_ID':
        return {
          ...state,
          id:action.payload,
        };
      default:
        return state;
    }
  };