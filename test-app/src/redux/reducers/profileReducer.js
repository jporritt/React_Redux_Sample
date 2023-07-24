import { userConstants } from '../redux_constants/userConstants';


const user = {
  lastName: 'b',
  firstName: 'a',
  error: '',
};

export const defaultState = {
    profile: user,
    loaded: false,
    error: '',
  };

export const profileReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case userConstants.ADD_USER_REQUEST:
      return {
        ...state,
      };
    case userConstants.ADD_USER_SUCCESS:
      return {
        ...state,
      };
    case userConstants.ADD_USER_FAILURE:
      return {
        ...state,
      };
    case userConstants.SET_USER:
      return {
        ...state,
        profile:action.data
      };
    default:
      return {
        ...state,
      };
  }
};
