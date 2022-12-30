// redux/reducers/countReducer.js
const initialState = {
    count: 0,
    name:"Ersel"
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'COUNT_INCRESE':
        return {
          ...state,
          name:action.payload1,
          count: state.count + 1,
        };
      case 'COUNT_DECRESE':
        return {
          ...state,
          name:action.payload1,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };