import React from 'react'
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import './App.css'

import {BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends React.Component {

  // componentDidMount() {
  //       fetch('http://localhost:5000/users')
  //       .then(response => response.json())
  //       .then(console.log)
  //   }

  render() {
    
    // const change = () => {
    //   this.setState({
    //     loggedIn: !this.state.loggedIn
    //   })
    // }
    
    return (
      <Router>
        <div className="app">


        <Route exact path="/" render={() => <LandingPage />} />
          
        <Route path="/main" render={() => <Main />} /> 
      
    
        
        </div>
      </Router>
    )
  }
}


