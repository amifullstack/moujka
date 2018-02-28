import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



// Components
import Home from './Components/Home/Home'
import Header from './Components/Shared/Header/Header';
import Profile from './Components/Account/Profile/Profile';
import LoginPage from './Components/Account/LoginPage/LoginPage';

import TodoContainer from './Components/Todo/TodoContainer';
import AddTodoForm from './Components/Todo/AddTodoForm/AddTodoForm';

import Footer from './Components/Shared/Footer/Footer';

// css
import './App.css'

// // Temp Redux
// import { addTodo, removeTodo } from './Actions/index'
// import Store from './Store/Store'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // window.store = Store;
    // window.addTodo = addTodo;
    // window.removeTodo = removeTodo;

    return(
      <Router>
        <div className="App">        
          <Header/>
          <Route exact path="/" component={Home} />
            <p>  Beats From Cloud</p>
          <Route path="/account/profile/:id" component={Profile} />
          <Route path="/login" component={LoginPage} />
          {/* <AddTodoForm />
          <TodoContainer /> */}
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
