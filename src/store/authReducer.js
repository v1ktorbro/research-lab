const defaultState = {
  isAuth: false,
  email: '',
};

const SET_LOGIN_DATA_USER  = 'SET_LOGIN_DATA_USER';

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA_USER:
      return {...state, isAuth: action.payload.isAuth, email: action.payload.email};
    default:
      return state;
  }
};

export const setLoginDataUser = (payload) => ({type: SET_LOGIN_DATA_USER, payload});