import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



// Components
import HomePageContainer from './Components/Home/HomePageContainer';
import Header from './Components/Shared/Header/Header';
import Profile from './Components/Account/Profile/Profile';
// import LoginPage from './Components/Account/LoginPage/LoginPage';
import LoginPageContainer from './Components/Account/LoginPage/LoginPageContainer/LoginPageContainer';

import TodoContainer from './Components/Todo/TodoContainer';
import AddTodoForm from './Components/Todo/AddTodoForm/AddTodoForm';
import ProgressContainer from './Components/Progress/ProgressContainer';

import Spinner from './Components/Shared/Spinner/Spinner';
import Footer from './Components/Shared/Footer/Footer';

// css
import './App.css'

// // Temp Redux
// import { addTodo, removeTodo, incrementValue } from './Actions/index'
// import Store from './Store/Store'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // window.store = Store;
    // window.addTodo = addTodo;
    // window.removeTodo = removeTodo;
    // console.log(this.props)
    const { authenticationReducer, Progress } = this.props.state;
    // console.log(authenticationReducer)

    return(
      <Router>
        <div className="App">
          <Header authentication={authenticationReducer} />
          <Route exact path="/" component={HomePageContainer}  />            
          <Spinner Progress={Progress} />        
          <Route path="/account/profile/:id" component={Profile} />
          <Route path="/login" component={LoginPageContainer} />
          <Route path='/todo' component={TodoContainer} />
          <Route path='/progress' component={ProgressContainer} />
          {/* <AddTodoForm />
          <TodoContainer /> */}
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
