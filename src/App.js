import React from 'react'
import Main from './components/Main'
import './App.css'

import LandingPage from './components/LandingPage'





export default class App extends React.Component {

  state = {
    loggedIn: false
  }
  
  render() {
    
    const change = () => {
      this.setState({
        loggedIn: !this.state.loggedIn
      })
    }
    
    return (
      <div classname="app">

        {this.state.loggedIn

        ?<div>
          <Main />
        </div>

        :

        <div>
          <LandingPage change={change} />
        </div>
        }
      </div>
    )
  }
}


