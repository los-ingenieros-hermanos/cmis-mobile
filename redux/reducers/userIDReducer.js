// redux/reducers/countReducer.js
const initialState = {
    userID:"-1",
    userRole:"",
    userProfileImage:"data:image/png;base64,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",
    defaultBannerImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAbCAIAAAAYioOMAAAAIklEQVRIiWPkk1RgoBgwUW7EqCmjpoyaMmrKqCmjpgwrUwDaZAB99K0xsgAAAABJRU5ErkJggg=="
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          ...state,
          userID:action.payload,
        };
      case 'SET_ROLE':
          return {
            ...state,
            userRole:action.payload,
          };
      case 'SET_PROFILE_IMAGE':
          return {
            ...state,
            userProfileImage:action.payload,
          }; 
      case 'SET_BANNER_IMAGE':
            return {
              ...state,
              defaultBannerImage:action.payload,
            };         
      default:
        return state;
    }
  };