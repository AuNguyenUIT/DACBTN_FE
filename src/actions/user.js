import * as userTypes from "./../constants/user";

export const userPending = () => {
  return {
    type: userTypes.USER_PENDING,
  };
};

export const registerUser = (payload) => {
  return {
    type: userTypes.REGISTER_USER,
    payload,
  };
};
export const registerUserSuccess = (payload) => {
  return {
    type: userTypes.REGISTER_USER_SUCCESS,
    payload,
  };
};
export const registerUserFailed = (payload) => {
  return {
    type: userTypes.REGISTER_USER_FAILED,
    payload,
  };
};

export const loginUser = (payload) => {
  return {
    type: userTypes.LOGIN_USER,
    payload,
  };
};
export const loginUserSuccess = (payload) => {
  return {
    type: userTypes.LOGIN_USER_SUCCESS,
    payload,
  };
};
export const loginUserFailed = (payload) => {
  return {
    type: userTypes.LOGIN_USER_FAILED,
    payload,
  };
};

export const updateProfile = (payload) => {
  return {
    type: userTypes.UPDATE_PROFILE,
    payload,
  };
};
export const updateProfileSuccess = (payload) => {
  return {
    type: userTypes.UPDATE_PROFILE_SUCCESS,
    payload,
  };
};
export const updateProfileFailed = (payload) => {
  return {
    type: userTypes.UPDATE_PROFILE_FAILED,
    payload,
  };
};

export const logout = () => {
  return {
    type: userTypes.LOG_OUT,
  };
};
