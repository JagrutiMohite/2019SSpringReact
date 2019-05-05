import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'toastr/build/toastr.css'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';
import About from './views/About'
import Friends from './views/MyFriends'
import Login from './views/Login'


const Home = ()=> <h1>You are home</h1>

function App() {
  return (
    <div className="App">
    <Router>
        <Nav />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About} />
          <Route path="/MyFriends" component={Friends} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
