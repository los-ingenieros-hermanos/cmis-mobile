// redux/reducers/countReducer.js
// write all initial states here
const initialState = {
    firstname:"belirtilmedi",
    email:"belirtilmedi",
    id:-1,
    image:"",
    role:"belirtilmedi",
    tags:[],
    username:"belirtilmedi",
    banner:null,
    followerCount:-1,
    memberCount:-1,
  };
  


  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FIRSTNAME':
        return {
          ...state,
          firstname:action.payload,
        };

      case 'UPDATE_USERNAME':
        return {
            ...state,
            username:action.payload,
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

        case 'UPDATE_ROLE':
        return {
          ...state,
          role:action.payload,
        };
        
        case 'UPDATE_TAGS':
        return {
            ...state,
            tags:action.payload,
        };

        case 'UPDATE_FOLLOWERCOUNT':
        return {
            ...state,
            followerCount:action.payload,
        };
        
        case 'UPDATE_MEMBERCOUNT':
        return {
            ...state,
            memberCount:action.payload,
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