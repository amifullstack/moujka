export const AUTHENTICATION_LOGIN_ATTEMPT = 'AUTHENTICATION_LOGIN_ATTEMPT';
export const AUTHENTICATION_LOGIN_FAILURE = 'AUTHENTICATION_LOGIN_FAILURE';
export const AUTHENTICATION_LOGIN_SUCCESS = 'AUTHENTICATION_LOGIN_SUCCESS';
export const AUTHENTICATION_SESSION_CHECK_FAILURE = 'AUTHENTICATION_SESSION_CHECK_FAILURE';
export const AUTHENTICATION_SESSION_CHECK_SUCCESS = 'AUTHENTICATION_SESSION_CHECK_SUCCESS';


export const loginAttempt = () => ({ type: AUTHENTICATION_LOGIN_ATTEMPT});
export const loginFailure = error => ({ type: AUTHENTICATION_LOGIN_FAILURE, error});
export const loginSuccess = json => ({ type: AUTHENTICATION_LOGIN_SUCCESS, json});
export const sessionCheckFailure = () => ({type: AUTHENTICATION_SESSION_CHECK_FAILURE});
export const sessionCheckSuccess = json => ({ type: AUTHENTICATION_SESSION_CHECK_SUCCESS, json});