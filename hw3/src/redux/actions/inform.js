import * as api from "../../auth-api";
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT
} from "../actions/types";

export const signUserIn = credentials => dispatch => {
  dispatch({ type: SIGN_IN_REQUEST });

  api.signIn(credentials).then(
    response => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: response });
    },
    error => dispatch({ type: SIGN_IN_FAILURE, payload: error })
  );
};

export const signUserOut = () => dispatch => {
  return api.signOut().then(() => {
    dispatch({ type: SIGN_OUT });
  });
};
