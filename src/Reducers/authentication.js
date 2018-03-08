import { 
  AUTHENTICATION_LOGIN_ATTEMPT, 
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGIN_FAILURE
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
    case AUTHENTICATION_LOGIN_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.id = action.json._id;
      newState.firstName = action.json.firstName;
      newState.isLoggedIn = true,
      newState.isLoggingIn = false,
      newState.lastName = action.json.lastName;
      newState.username = action.json.username;
      return newState;
    }
    case AUTHENTICATION_LOGIN_FAILURE: {
      const newState = {
        firstName: '',
        id: '', 
        isLoggedIn: false,
        isLoggingIn: false,
        lastName: '',
        username: '',
      };
      return newState;
    }
    
    default: {
      return state;
    }
  }
}

export default authenticationReducer;
