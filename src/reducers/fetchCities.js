
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CITIES':
        return {...state, ...action.payload}
    default:
      return state;
  }
};
