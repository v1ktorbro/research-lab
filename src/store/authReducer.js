const defaultState = {
  isAuth: false,
  emailCurrentUser: '',
  isRemember: false,
};

const TOGGLE_AUTH_STATE  = 'TOGGLE_AUTH_STATE';

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH_STATE:
      return {...state, isAuth: !state.isAuth, emailCurrentUser: action.payload.email, isRemember: action.payload.isRemember};
    default:
      return state;
  }
};

export const toggleAuthState = (payload) => ({type: TOGGLE_AUTH_STATE, payload});