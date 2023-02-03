// redux/reducers/countReducer.js
const initialState = {
    navigation:null
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'CUSTOM_NAVIGATION':
        return {
          ...state,
          navigation:action.payload,
        };
      default:
        return state;
    }
  };