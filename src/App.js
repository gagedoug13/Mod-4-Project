import React from 'react'
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import './App.css'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default class App extends React.Component {

  render() {
    
    // const change = () => {
    //   this.setState({
    //     loggedIn: !this.state.loggedIn
    //   })
    // }
    
    return (
      <div className="app">

        <Router>

        <Route exact path="/" render={() => <LandingPage />}>
          
        </Route>
          
        <Route path="/main" render={() => <Main />}/> 
      
    
        </Router>
        
      </div>
    )
  }
}


