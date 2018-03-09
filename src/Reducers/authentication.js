import { 
  AUTHENTICATION_LOGIN_ATTEMPT, 
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_SESSION_CHECK_SUCCESS,
  AUTHENTICATION_SESSION_CHECK_FAILURE,
  AUTHENTICATION_LOGOUT_SUCCESS,
  AUTHENTICATION_LOGOUT_FAILURE,
} from '../Actions/authentication'


// Initial State
const InitialState = {
  firstName: '',
  id: '', 
  isLoggedIn: false,
  isLoggingIn: false,
  lastName: '',
  username: '',
};

const authenticationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_ATTEMPT: {
      const newState = Object.assign({}, state);
      newState.isLoggingIn = true;
      return newState;
    }
    case AUTHENTICATION_LOGIN_SUCCESS:
    case AUTHENTICATION_SESSION_CHECK_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.id = action.json._id;
      newState.firstName = action.json.firstName;
      newState.isLoggedIn = true,
      newState.isLoggingIn = false,
      newState.lastName = action.json.lastName;
      newState.username = action.json.username;
      return newState;
    }
    case AUTHENTICATION_LOGIN_FAILURE:
    case AUTHENTICATION_SESSION_CHECK_FAILURE: 
    case AUTHENTICATION_LOGOUT_SUCCESS:
    {
      const newState = Object.assign({}, state);
      return newState;
    }
    case AUTHENTICATION_LOGOUT_FAILURE: {
      // todo: handle error!
      return state;
    }
    
    default: {
      return state;
    }
  }
}

export default authenticationReducer;
