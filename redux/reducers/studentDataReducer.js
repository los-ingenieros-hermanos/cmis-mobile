// redux/reducers/countReducer.js
// write all initial states here
const initialState = {
    firstname:"",
    lastname:"",
    email:"",
    id:"",
    image:"data:image/png;base64,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",
    bookmarks:[],
    events:[],
    interests:[],
    role:"",
    banner:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWO88mo7AwZgwhQagqIAIVECiU3z3qcAAAAASUVORK5CYII=",
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

        case 'UPDATE_BANNER':
        return {
          ...state,
          banner:action.payload,
        };

        

      default:
        return state;
    }
  };