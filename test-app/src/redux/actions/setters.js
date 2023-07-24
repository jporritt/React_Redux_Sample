import { userConstants } from "../redux_constants/userConstants";

export const setUser = (userData) => (dispatch) => {
    dispatch({
      type: userConstants.SET_USER,
      data: userData,
    });
  };