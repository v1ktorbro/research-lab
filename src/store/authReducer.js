const defaultState = {
  isAuth: false,
};

const TOGGLE_AUTH_STATE  = 'TOGGLE_AUTH_STATE';

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH_STATE:
      return {...state, isAuth: !state.isAuth};
    default:
      return state;
  }
};

export const toggleAuthState = (payload) => ({type: TOGGLE_AUTH_STATE, payload});