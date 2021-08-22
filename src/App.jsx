import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Courses from './components/Courses'
import Course_details from './components/Course_details';
import Bac from './components/Bac';
import Instructors from './components/Instructors';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import About from './components/About';
import TopScroll from './components/TopScroll';
import Subject from './components/Subject';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";







function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
            <About />
            <Courses />
            <Bac />
            <Instructors />
          </Route>
          <Route exact path="/Course/Course_details">
            <Course_details />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <SignIn />
          </Route>
          <Route exact path="/subject">
            <Subject />
          </Route>
        </Switch>
        <Footer />
        <TopScroll />
      </Router>
    </>
  );
}

export default App;
