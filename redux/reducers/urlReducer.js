// redux/reducers/countReducer.js
const initialState = {
    url:"http://192.168.1.35:8070"
    //url:"https://cmis.azurewebsites.net",
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