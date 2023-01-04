// redux/reducers/countReducer.js
const initialState = {
    url:"http://192.168.45.84:8070"
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_URL':
        return {
          ...state,
          url:action.payload,
        };
      default:
        return state;
    }
  };