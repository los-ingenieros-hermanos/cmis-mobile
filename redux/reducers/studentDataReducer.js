// redux/reducers/countReducer.js
// write all initial states here
const initialState = {
    firstname:"",
    lastname:"",
    email:"",
    id:"",
    image:"",
    bookmarks:[],
    events:[],
    interests:[],
    role:"",
  };
  


  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIRSTNAME':
        return {
          ...state,
          firstname:action.payload,
        };

        case 'UPDATE_LASTNAME':
          return {
            ...state,
            lastname:action.payload,
          };  

      case 'UPDATE_EMAIL':
        return {
          ...state,
          email:action.payload,  
        };
      
      case 'UPDATE_ID':
        return {
          ...state,
          id:action.payload,
        };

        case 'UPDATE_IMAGE':
        return {
          ...state,
          image:action.payload,
        };

        case 'UPDATE_BOOKMARKS':
        return {
          ...state,
          bookmarks:action.payload,
        };

        case 'UPDATE_EVENTS':
        return {
          ...state,
          events:action.payload1,
        };

        case 'UPDATE_INTERESTS':
        return {
          ...state,
          interests:action.payload,
        };

        case 'UPDATE_ROLE':
        return {
          ...state,
          role:action.payload,
        };

        

      default:
        return state;
    }
  };