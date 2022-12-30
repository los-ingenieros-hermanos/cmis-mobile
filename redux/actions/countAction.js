// redux/actions/countAction.js
export const increment = (name) => {
    return {
      type: 'COUNT_INCRESE',
      payload1:name
    };
  };
   
  export const decrement = (name) => {
    return {
        type: 'COUNT_DECRESE',
        payload1:name
    };
  };