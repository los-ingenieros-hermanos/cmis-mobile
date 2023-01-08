// redux/reducers/countReducer.js
// write all initial states here
const initialState = {
    firstname:"",
    lastname:"",
    email:"",
    id:"",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAIAAADUCbv3AAAAFklEQVQokWP8s9CAATdgwiM3Kk2mNACuGAHlzPtVowAAAABJRU5ErkJggg==",
    bookmarks:[],
    events:[],
    interests:[],
    role:"",
    banner:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAAFElEQVQYlWO88mo7AwZgwhQagqIAIVECiU3z3qcAAAAASUVORK5CYII=",
    instagram:"",
    info:"Buraya profiliniz için bir açıklama yazabilirsiniz.",
  };
  


  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_INSTAGRAM':
        return {
          ...state,
          instagram:action.payload,
        };
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

        case 'UPDATE_INFO':
        return {
          ...state,
          info:action.payload,
        };

        

      default:
        return state;
    }
  };