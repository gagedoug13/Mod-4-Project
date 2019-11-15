import React from 'react'
import Main from './components/Main'
import './App.css'
import line from './My line.png'



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img className = "logo" src={line}>
          
          </img>
        </div>
        <Main />
      </div>
    )
  }
}


