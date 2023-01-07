// redux/actions/countAction.js
export const setID = (id) => {
    return {
      type: 'SET_ID',
      payload:id
    };
  };

export const setRole = (role) => {
    return {
      type: 'SET_ROLE',
      payload:role
    };
  };

export const setProfileImage = (image) => {
    return {
      type: 'SET_PROFILE_IMAGE',
      payload:image
    };
  };  

  export const setDefaultBanner = (banner) => {
    return {
      type: 'SET_BANNER_IMAGE',
      payload:banner
    };
  }; 
